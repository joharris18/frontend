import { clientController } from "@revolt/client";
import { useTranslation } from "@revolt/i18n";
import { Link, useNavigate } from "@revolt/routing";
import { Button, Column, Row, Typography, styled } from "@revolt/ui";

import { FlowTitle } from "./Flow";
import { Fields, Form } from "./Form";
import RevoltSvg from "./logo.png";

/**
 * Account switcher UI
 */
// eslint-disable-next-line
const AccountSwitcher = styled(Column)`
  margin-top: 8px;
`;

/**
 * Logo Styles
 */

const LogoStyle = {
  width: "180px",
  margin: "0 auto",
};

/**
 * Flow for logging into an account
 */
export default function FlowHome() {
  const t = useTranslation();
  const navigate = useNavigate();

  /**
   * Log into account
   * @param data Form Data
   */
  async function login(data: FormData) {
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await clientController.login({
      email,
      password,
    });

    navigate("/app", { replace: true });
  }

  return (
    <>
      <Column gap="xl">
        {/*put logo here*/}
        <img src={RevoltSvg} style={LogoStyle} />

        <Column>
          <b
            style={{
              "font-weight": 800,
              "font-size": "1.4em",
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <span>Find your community,</span>
            <span>connect with the world.</span>
          </b>
          <span style={{ "text-align": "center", opacity: "0.5" }}>
            Revolt is one of the best ways to stay connected with your friends
            and community, anywhere, anytime.
          </span>
        </Column>

        <Column>
          <Link href="auth">
            <Column>
              <Button>Log In</Button>
            </Column>
          </Link>
          {/* <Link href="create"> */}
          <a href="https://app.revolt.chat/login/create" target="_blank">
            <Column>
              <Button palette="secondary">Sign Up</Button>
            </Column>
          </a>
          {/* </Link> */}
        </Column>
      </Column>

      {/*<FlowTitle subtitle={t("login.subtitle")} emoji="wave">
        {t("login.welcome")}
  </FlowTitle>*/}
      {/*<Form onSubmit={login}>
        <Fields fields={["email", "password"]} />
        <Button type="submit">{t("login.title")}</Button>
</Form>
      <Typography variant="legacy-settings-description">
        {t("login.new")} <Link href="create">{t("login.create")}</Link>
      </Typography>
      <Typography variant="legacy-settings-description">
        {t("login.forgot")} <Link href="reset">{t("login.reset")}</Link>
      </Typography>
      <Typography variant="legacy-settings-description">
        {t("login.missing_verification")}{" "}
        <Link href="resend">{t("login.resend")}</Link>
      </Typography>*/}

      {/*<Show when={clientController.getReadyClients().length > 0}>
        <Switch fallback={<Navigate href="/" />}>
          <Match when={state.experiments.isEnabled("account_switcher")}>
            <AccountSwitcher>
              <FlowTitle>Use existing account</FlowTitle>
              <For each={clientController.getReadyClients()}>
                {(client) => (
                  <CategoryButton
                    icon={<Avatar src={client.user!.avatarURL} size={32} />}
                    action="chevron"
                    onClick={() => {
                      clientController.switchAccount(client.user!._id);
                      navigate("/app");
                    }}
                  >
                    {client.user!.username}
                  </CategoryButton>
                )}
              </For>
            </AccountSwitcher>
          </Match>
        </Switch>
                  </Show>*/}
    </>
  );
}
