# misskey-react-template(mkrt)

- 自分向けMisskey Reactテンプレート
- MiAuthでログインするまでを行います。

## 使い方

- 以下のディレクトリにページを生やす
  - `src/login`以下は未ログイン時にアクセス可能
    - `src/login/_layout.tsx`でログイン時はリダイレクトしている
  - `src/_auth`以下はログイン時にアクセス可能
    - `src/_auth/_layout.tsx`で未ログイン時はリダイレクトしている

### 使っているもの

- react
- typescript
- vite
- vite-tsconfig-paths
  - tsconfigのpath aliasをviteにも適用
- tanstack router
  - file base routingをするため
- zod
  - tanstack routerのパラメータバリデーションに使用
  - フォームライブラリにも使える
- zustand
  - 状態管理ライブラリ
  - persist(LocalStorageに永続化)も利用
- misskey-js
  - 型を利用
- uuid
  - 認証時に利用
- biome
  - format/lintに利用

### テンプレートから変えるところ

- アプリ名をmkrtから変更
  - `package.json`
  - `index.html`
  - `src/constants/appName.ts`
- 権限をアプリで使うものに変更
  - `src\routes\login\_layout\index.tsx`の`authURL`
- faviconなどを変更

### 追加したほうがいいもの

- フォームライブラリ(react-hook-form, tanstack formなど)
- UIライブラリ(mantine, yamada-uiなど)
- データフェッチライブラリ(swr, tanstack queryなど)
