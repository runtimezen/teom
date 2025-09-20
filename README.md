<div align=center>
  <img width="160" src="resources/teom.png">
  <h1>
    Teom
  </h1>
  Minimalist design system for perfectionists.
</div>

---

## 📚 Documentation
You can see the documentation [here](https://teom.runtimezen.ru).

---

## ✨ Philosophy
At the center of Teom lies *minimalism* — just the essentials needed to build consistent, elegant interfaces. Respectively, all the project's code is clean, readable, and hand-written. To know more, please see the [following page](https://teom.runtimezen.ru/philosophy).

---

## ⚙️ Architecture
To provide flexibility, the Teom source code is divided into the following parts:
- The base layer is **@runtimezen/teom-shared**, which contains reusable styles, types, and variants. If you want to use it independently, see the [integration guide](https://teom.runtimezen.ru/integration).
- The second layer provides *framework-dependent component implementations*, such as **@runtimezen/teom-vue**, built on top of the headless libraries.

---

## 📦 Supported Frameworks
| Framework | Status | Base                           | Package                     |
| --------- | :----: | :----------------------------: | --------------------------- |
| Vue       | ✅     | [Reka UI](https://reka-ui.com) | **@runtimezen/teom-vue**    |
| Svelte    | ⏩     | [Bits UI](https://bits-ui.com) | **@runtimezen/teom-svelte** |
| React     | ❌     | —                              | —                           |

- ✅ — Official support
- ⚠️ — Work in progress
- ⏩ — Planned
- ❌ — Unavailable

---

## 📂 Project Structure
The monorepo is powered by [Turborepo](https://turborepo.com) and follows the folder structure below:
- *apps* — *Deployable projects*, including:
  - *docs* — Source code of the documentation website, powered by [Vitepress](https://vitepress.dev).
  - *playground* — Framework-specific playgrounds, e.g. *playground/vue*.
- *packages* — *Shared packages*, including:
  - [*teom-shared*](packages/teom-shared/README.md) — **@runtimezen/teom-shared**, reusable code and styles.
  - [*teom-vue*](packages/teom-vue/README.md) — **@runtimezen/teom-vue**, components implementation for [Vue](https://vuejs.org).
  - [*eslint-config*](packages/eslint-config/README.md) — **@repo/eslint-config**, [ESLint](https://eslint.org) configuration of the monorepo.
  - [*stylelint-config*](packages/stylelint-config/README.md) — **@repo/stylelint-config**, [Stylelint](https://stylelint.io) configuration of the monorepo.
  - [*typescript-config*](packages/typescript-config/README.md) — **@repo/typescript-config**, [TypeScript](https://typescriptlang.org) configuration of the monorepo.

---

## 📜 Contribution
Please refer to the [contribution guide](https://teom.runtimezen.ru/docs/contribute) in the documentation.