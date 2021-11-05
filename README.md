# react-ts-0-1
不使用脚手架从0搭建react+TS+webpack+eslint+prettier项目框架

```
react-ts-0-1
├─ .eslintcache
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ husky.local.sh
│  │  ├─ husky.sh
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ d9df9749a03cd60fc02d8666e578b298e3ec48
│  │  ├─ 01
│  │  │  └─ 4844859e22e44732815b925320656ff9268fd6
│  │  ├─ 06
│  │  │  └─ 5290c86dceca6d841f54dad5b4d5a19384adad
│  │  ├─ 07
│  │  │  └─ d5f0fd80c22bcea8cc7bf9d6c9dae47339c510
│  │  ├─ 09
│  │  │  └─ 390b773a1e3afad4135e00c6c69427dabcb377
│  │  ├─ 0a
│  │  │  └─ a168279c36dad61f58b763d9835280749ce3fb
│  │  ├─ 0e
│  │  │  └─ 1c97408d247f4b7b703227cd5a8853ad2c0383
│  │  ├─ 12
│  │  │  └─ 75b3b90e900d9a60cb1b398510f362cee52680
│  │  ├─ 14
│  │  │  └─ 3bfdadf481f12e7c62f3dfc4083906bfa663d2
│  │  ├─ 15
│  │  │  └─ 8b5c69f8d65fa05222f4db4652fd7b00de9108
│  │  ├─ 16
│  │  │  ├─ 745c4575c01ab34e671d60d8846eb5278f6961
│  │  │  ├─ bb4d5aae0f193101f7148eafd3f824fc14c9d6
│  │  │  └─ e1959d26d0885aac4f67038b9157796707929f
│  │  ├─ 18
│  │  │  └─ 7bad4a6046486bda7b0d0b8bda9106bf698e7b
│  │  ├─ 19
│  │  │  ├─ 3b10166cad2f90af7048957ea21eec60be6154
│  │  │  └─ 53490b4e1ab042ffa3991a0eede9598e513765
│  │  ├─ 1c
│  │  │  ├─ 8783d17f9cd4b1b3a0432b964cd4169f8cc849
│  │  │  └─ e04cd1e91fad9d9af9849889da7fd4dc059fae
│  │  ├─ 1d
│  │  │  └─ 294ff4c7da3592b0b83f1634834f4e5c76d622
│  │  ├─ 1f
│  │  │  └─ 545cc140ccbfc6733f5b6c6bf41bf9261d9551
│  │  ├─ 20
│  │  │  └─ d0d06e583dda4c78c6e923cd00f2be6951994c
│  │  ├─ 21
│  │  │  └─ a770af6e8e13b672c3ab1efa492cc4d3de2268
│  │  ├─ 23
│  │  │  └─ 32af127c4aea00a97570b0bfb739aaaaaa6efb
│  │  ├─ 25
│  │  │  └─ 854932c813287200f0195c687afe6e69fd4072
│  │  ├─ 2a
│  │  │  └─ d2f3cb33ba3273ad1cc75eb1d8454f78cb253c
│  │  ├─ 2b
│  │  │  ├─ 336369074bed8f353b842be9532c6e9455ab93
│  │  │  ├─ 4d0909adde9d838e2d5ac7f9b822a41ba89d07
│  │  │  └─ e69d565d248148d9f46cd711639b1c4cce33a1
│  │  ├─ 2c
│  │  │  └─ d8f3ac5840d7cabe20c5b33017eb1df4902748
│  │  ├─ 30
│  │  │  ├─ 23b776d6838ad15068db0557d2f57941ed97b4
│  │  │  └─ 92f77e71cb90494fd9f1d7d0fc2fe902716b57
│  │  ├─ 32
│  │  │  └─ bf8e230df4a1ac265791c2e3bfcd47b323d80e
│  │  ├─ 33
│  │  │  └─ 51639ac4d3477e9e0c740bc5578a2a72d6267d
│  │  ├─ 35
│  │  │  └─ 4a746fcc5c7ae1a97f7d799f066f226cfbdb73
│  │  ├─ 37
│  │  │  └─ 50d839f58c7b9cbac4cf8b6696507cd6a276a9
│  │  ├─ 3d
│  │  │  └─ 60c8196091fc25ab87bcd2c767681643ff7bbb
│  │  ├─ 3e
│  │  │  └─ f56b7ae0f3cfcfaf6b8a93dd9fb8583c6328da
│  │  ├─ 3f
│  │  │  └─ cea8d2a8b538426fe973acaed1d11104ecc986
│  │  ├─ 41
│  │  │  └─ 3062de6eb45c8ea81377a668f99fca64f3217a
│  │  ├─ 46
│  │  │  └─ 8f6245d6f9c585936ba848efaafc4a302f2b7f
│  │  ├─ 4b
│  │  │  ├─ 2bb533acd07702ff5a6a61c1259c9ca9595bf8
│  │  │  └─ 8af75da12fe284ba1228452a02782f591cbaeb
│  │  ├─ 4e
│  │  │  └─ d383a3db28add152e62831e74f5e30f25027ee
│  │  ├─ 4f
│  │  │  └─ d00ffa2f76b3b6429eaf6b10436ed1c3d31240
│  │  ├─ 51
│  │  │  └─ 7856b2cac65907a8e30cf91160bcc2996b5251
│  │  ├─ 54
│  │  │  └─ 5f7bb5e8b7392eb899388330c004c4b00bff17
│  │  ├─ 56
│  │  │  └─ 36caebf4e53591d745f64207c1784133a794e0
│  │  ├─ 63
│  │  │  └─ 9e697fd56e0a40bec42f68716f8645ef7cd4ad
│  │  ├─ 67
│  │  │  └─ b2632649f5a47808afa6a49fc40fb2f8f8fcb9
│  │  ├─ 73
│  │  │  ├─ 2d02bf56930b015888666e251715ab74a7cde5
│  │  │  └─ 3e56a548db89b4fc7e746bd4e43c809ea514ce
│  │  ├─ 75
│  │  │  ├─ e1712ed41338b16424ea713749bb11c2e12ded
│  │  │  └─ e355e7738fd3426a20668a30f05536997de85f
│  │  ├─ 77
│  │  │  └─ 487f28af9037c2750fa7d8a4d2945e2682626d
│  │  ├─ 78
│  │  │  ├─ 75f12166b32d7582e2b56d36d1b4370016f341
│  │  │  └─ f2ff369ba67ae4daaf1ff85751d52197cb84b7
│  │  ├─ 79
│  │  │  ├─ 62eb8664bae3fb424f992cd38216d7df779054
│  │  │  └─ 749302afa1ba30cb373e60e45205f65bc1545a
│  │  ├─ 83
│  │  │  └─ a3f7ec4fcce27270cde7cbe47d04f2d4fc1a16
│  │  ├─ 84
│  │  │  └─ e90b498b3c9c4c278526d93a7e3f9b8b33b573
│  │  ├─ 87
│  │  │  └─ dabe9c2fec356dcac731a8ff89abcc7df814dd
│  │  ├─ 97
│  │  │  └─ 24b0903d7bee7e0d45113bf34b9171081e4841
│  │  ├─ 9f
│  │  │  └─ f937b1b3b52c579a167c37fc5a489e2d864887
│  │  ├─ a2
│  │  │  └─ fda85d77c5d82aa9dd57dff200d438cb39f888
│  │  ├─ a5
│  │  │  └─ bbd7173d7b2784573520213d04af50d22e20bf
│  │  ├─ a7
│  │  │  ├─ 18f3ba0f20858f99f1fd0b83e50894a6c41eca
│  │  │  └─ e08993bcd5926b57f2a808bcade8bc1932fd77
│  │  ├─ a8
│  │  │  └─ 306dc14617c79cfbff3083fb4ab6e86e2f737f
│  │  ├─ aa
│  │  │  └─ 1c4feec110307b36282225d3c296391d1677fe
│  │  ├─ b3
│  │  │  └─ 287a9703489d92a918f202f96783d8da56c2d0
│  │  ├─ b4
│  │  │  └─ a64d9a66b3069836b6229b06ea070277ae99d1
│  │  ├─ b6
│  │  │  └─ 4d92bd2638c139f9af25ba2c5236c56fe920c7
│  │  ├─ b9
│  │  │  └─ 32283a8d70d635b4bd39e142748e9701ac9028
│  │  ├─ ba
│  │  │  └─ 40173320b0f72d6c12f961231cc2291dee1e50
│  │  ├─ bc
│  │  │  └─ cb6aa46f7634430588a06a55cb34e4f0c87d26
│  │  ├─ c3
│  │  │  └─ 7c6ab6b3130e18d0cd1f32c69521af81ad981d
│  │  ├─ c4
│  │  │  └─ 10e7cc907558926ce32a4a35eb6b4b589b47dc
│  │  ├─ c9
│  │  │  └─ d0fe6f1f6c8f1b0ce127636a9d8342504ff45a
│  │  ├─ cd
│  │  │  └─ 04c11a5274e041a84840f86d42e71c1a90c8d5
│  │  ├─ e1
│  │  │  └─ c28465e1f0b7fdc5ba8f534120895ddb411f5a
│  │  ├─ e3
│  │  │  └─ 61f15983b70875d5139d91d0b45e2125b18fdf
│  │  ├─ e8
│  │  │  └─ 511eaeaf61dd7e09c3e9f35cdee6c636568f1c
│  │  ├─ ef
│  │  │  └─ 892111941118dc4383260a12aadf710bec4130
│  │  ├─ f1
│  │  │  └─ 17f8c1fa2b4f91a70e113e1fe98791c86ff551
│  │  ├─ f6
│  │  │  ├─ 9ce66607570b25ddce1db09842f816c74123c5
│  │  │  └─ cfca1969a964d02205f84aa15404023ba4a39f
│  │  ├─ fe
│  │  │  └─ 264bf8b8d97be19832dba95d21bc403156756c
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-5ee6fea0062ab8f8bc6412f425e1ba6b7e78dec3.idx
│  │     └─ pack-5ee6fea0062ab8f8bc6412f425e1ba6b7e78dec3.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .husky
│  ├─ commit-msg
│  ├─ pre-commit
│  └─ _
│     ├─ .gitignore
│     └─ husky.sh
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ babel.config.js
├─ commitlint.config.js
├─ env
│  ├─ dev.env
│  ├─ prod.env
│  └─ test.env
├─ eslintError.html
├─ package.json
├─ postcss.config.js
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.scss
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ css
│  │  │  └─ index.scss
│  │  ├─ fonts
│  │  ├─ images
│  │  │  └─ 01.png
│  │  └─ js
│  ├─ common
│  ├─ components
│  ├─ config
│  ├─ index.tsx
│  ├─ pages
│  ├─ routes
│  ├─ services
│  ├─ store
│  ├─ types
│  ├─ typings
│  ├─ uiLibrary
│  └─ utils
├─ tsconfig.json
├─ tsconfig.tsbuildinfo
├─ webpack
│  ├─ webpack.base.js
│  ├─ webpack.dev.js
│  ├─ webpack.prod.js
│  └─ webpackUtils
│     ├─ plugins.js
│     ├─ resolve.js
│     ├─ util.js
│     └─ variable.js
└─ yarn.lock

```