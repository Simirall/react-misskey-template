import { useRouter } from "@tanstack/react-router";

import { useLoginStore } from "@/store/login";

export const HeaderMenu = () => {
  const router = useRouter();
  const { logout, isLogin } = useLoginStore();

  return (
    <div>
      {isLogin && (
        <button
          type="button"
          onClick={() => {
            logout();
            router.invalidate(); //router contextを初期化　https://tanstack.com/router/latest/docs/framework/react/guide/router-context#invalidating-the-router-context
          }}
        >
          ログアウト
        </button>
      )}
    </div>
  );
};
