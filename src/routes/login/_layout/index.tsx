import { appName } from "@/constants/appName";
import { useLoginStore } from "@/store/login";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Route = createFileRoute("/login/_layout/")({
  component: Login,
});

function Login() {
  const [instance, setInstance] = useState<string>();
  const [loginError, setLoginError] = useState<string>();

  return (
    <div>
      <p>ログインページです。</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          authApplication({
            instance: instance ?? "",
            setLoginError: setLoginError,
          });
        }}
      >
        <input
          type="text"
          name="instance"
          onChange={(e) => {
            setInstance(e.target.value);
          }}
        />
        <button type="submit">次へ</button>
        {loginError && <p>{loginError}</p>}
      </form>
    </div>
  );
}

const authApplication = async ({
  instance,
  setLoginError,
}: {
  instance: string;
  setLoginError: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const id = uuid();
  const appURL = `${document.location.href}/getToken`;
  const checkEndpointURL = `https://${instance}/api/endpoints`;
  const login = useLoginStore.getState();
  const setLogin = useLoginStore.setState;

  try {
    const res = await fetch(checkEndpointURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (!res.ok) {
      throw new Error();
    }
    const endpoints: ReadonlyArray<string> = await res.json();
    if (!endpoints.includes("miauth/gen-token")) {
      setLoginError("インスタンスがMiAuthに対応していないようです。");
      return;
    }
    setLogin({
      ...login,
      instance: instance,
    });
    const authURL = `https://${encodeURIComponent(instance)}/miauth/${id}?name=${encodeURIComponent(appName)}&callback=${appURL}&permission=read:account,write:account`;
    window.location.href = authURL;
  } catch (e) {
    setLoginError("それは正しいMisskeyインスタンスですか？");
  }
};
