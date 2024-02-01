import {
  BiRegularMoney,
  BiSolidCog,
  BiSolidCompass,
  BiSolidHome,
  BiSolidMegaphone,
  BiSolidPlusCircle,
  BiSolidRightArrowCircle,
} from "solid-icons/bi";
import { Match, Show, Switch } from "solid-js";

import { IS_DEV, IS_REVOLT, useClient } from "@revolt/client";
import { useTranslation } from "@revolt/i18n";
import { modalController } from "@revolt/modal";
import { useNavigate } from "@revolt/routing";
import {
  Button,
  CategoryButton,
  Column,
  Header,
  Typography,
  styled,
} from "@revolt/ui";

import wideSvg from "../../../../components/auth/src/flows/logo.png";

import { HeaderIcon } from "./common/CommonHeader";

/**
 * Base layout of the home page (i.e. the header/background)
 */
const Base = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Layout of the content as a whole
 */
const Content = styled("div")`
  width: fit-content;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme!.gap.xl};
`;

/**
 * Layout of the buttons
 */
const Buttons = styled("div")`
  display: flex;

  padding: ${(props) => props.theme!.gap.md};

  border-radius: ${(props) => props.theme!.borderRadius.lg};
  background: ${(props) => props.theme!.colours["sidebar-channels-background"]};
`;

/**
 * Make sure the columns are separated
 */
const SeparatedColumn = styled(Column)`
  margin-inline: 0.25em;
  width: 260px;
`;

/**
 * Make sure the image is separated from the welcome text
 */
const Image = styled("img")`
  margin-top: 0.5em;
  width: 100px;
`;

/**
 * Home page
 */
export function HomePage() {
  const t = useTranslation();
  const navigate = useNavigate();
  const client = useClient();

  /* additional styles */
  const styles = {
    color: "black",
  };

  // check if we're revolt.chat; if so, check if the user is in the Lounge
  const showLoungeButton = IS_REVOLT;
  const isInLounge =
    client()!.servers.get("01F7ZSBSFHQ8TA81725KQCSDDP") !== undefined;

  return (
    // TODO: i18n
    <Base>
      <Header placement="primary">
        <HeaderIcon>
          <BiSolidHome size={24} />
        </HeaderIcon>
        Home
      </Header>
      <Content style={{ display: "flex", "align-items": "center" }}>
        <Image src={wideSvg} />
        <Typography variant="home-page-title">
          {t("app.special.modals.onboarding.welcome")}
        </Typography>
        <Buttons>
          <SeparatedColumn>
            <CategoryButton
              onClick={() =>
                modalController.push({
                  type: "create_group",
                  client: client()!,
                })
              }
              description={t("app.home.group_desc")}
              icon={<BiSolidPlusCircle size={24} />}
            >
              {t("app.home.group")}
            </CategoryButton>
            <Switch fallback={null}>
              <Match when={showLoungeButton && isInLounge}>
                <CategoryButton
                  onClick={() => navigate("/server/01F7ZSBSFHQ8TA81725KQCSDDP")}
                  description={t("app.home.goto-testers_desc")}
                  icon={<BiSolidRightArrowCircle size={24} />}
                >
                  {t("app.home.goto-testers")}
                </CategoryButton>
              </Match>
              <Match when={showLoungeButton && !isInLounge}>
                <CategoryButton
                  description={t("app.home.join-testers_desc")}
                  icon={<BiSolidRightArrowCircle size={24} />}
                >
                  {t("app.home.join-testers")}
                </CategoryButton>
              </Match>
            </Switch>
            {/* <CategoryButton
              onClick={() =>
                window.open("https://insrt.uk/donate?utm_source=revoltapp")
              }
              description={t("app.home.donate_desc")}
              icon={<BiRegularMoney size={24} />}
            >
              {t("app.home.donate")}
            </CategoryButton> */}
          </SeparatedColumn>
          <SeparatedColumn>
            <Show when={IS_REVOLT}>
              <CategoryButton
                onClick={() => navigate("/discover")}
                description={t("app.home.discover_desc")}
                icon={<BiSolidCompass size={24} />}
              >
                {t("app.home.discover")}
              </CategoryButton>
            </Show>
            {/* <CategoryButton
              description={t("app.home.feedback_desc")}
              icon={<BiSolidMegaphone size={24} />}
            >
              {t("app.home.feedback")}
            </CategoryButton> */}
            <CategoryButton
              onClick={() => modalController.push({ type: "settings" })}
              description={t("app.home.settings-tooltip")}
              icon={<BiSolidCog size={24} />}
            >
              {t("app.home.settings")}
            </CategoryButton>
          </SeparatedColumn>
        </Buttons>

        {/* FEATURES */}
        <Typography variant="home-page-title">
          {t("app.special.modals.onboarding.features")}
        </Typography>
        <Buttons>
          <SeparatedColumn>
            <CategoryButton
              // onClick={() =>
              //   modalController.push({
              //     type: "create_group",
              //     client: client()!,
              //   })
              // }
              description={t("app.home.feat1_desc")}
              icon={<BiSolidPlusCircle size={24} />}
            >
              {t("app.home.feat1")}
            </CategoryButton>

            <Switch fallback={null}>
              <Match when={showLoungeButton && isInLounge}>
                <CategoryButton
                  onClick={() => navigate("/server/01F7ZSBSFHQ8TA81725KQCSDDP")}
                  description={t("app.home.feat2_desc")}
                  icon={<BiSolidRightArrowCircle size={24} />}
                >
                  {t("app.home.feat2")}
                </CategoryButton>
              </Match>
              <Match when={showLoungeButton && !isInLounge}>
                <CategoryButton
                  description={t("app.home.feat2_desc")}
                  icon={<BiSolidRightArrowCircle size={24} />}
                >
                  {t("app.home.feat2")}
                </CategoryButton>
              </Match>
            </Switch>
            <CategoryButton
              // onClick={() =>
              //   window.open("https://insrt.uk/donate?utm_source=revoltapp")
              // }
              description={t("app.home.feat2_desc")}
              icon={<BiRegularMoney size={24} />}
            >
              {t("app.home.feat2")}
            </CategoryButton>
          </SeparatedColumn>
          <SeparatedColumn>
            <Show when={IS_REVOLT}>
              <CategoryButton
                onClick={() => navigate("/discover")}
                description={t("app.home.feat3_desc")}
                icon={<BiSolidCompass size={24} />}
              >
                {t("app.home.feat3")}
              </CategoryButton>
            </Show>
            <CategoryButton
              description={t("app.home.feat3_desc")}
              icon={<BiSolidMegaphone size={24} />}
            >
              {t("app.home.feat3")}
            </CategoryButton>
            <CategoryButton
              // onClick={() => modalController.push({ type: "settings" })}
              description={t("app.home.feat4_desc")}
              icon={<BiSolidCog size={24} />}
            >
              {t("app.home.feat4")}
            </CategoryButton>
          </SeparatedColumn>
        </Buttons>

        {/* <Show when={IS_DEV}>
          <Button style={{ margin: "auto" }} onClick={() => navigate("/dev")}>
            Open Development Page
          </Button>
        </Show> */}
      </Content>
    </Base>
  );
}
