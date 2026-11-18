# routecheck-demo

[miniapp-routecheck](https://github.com/jiabin777on-hue/miniapp-routecheck) 的演示仓库：一个用 [GitHub Marketplace 上的 Action](https://github.com/marketplace/actions/miniapp-routecheck) 做 CI 检查的原生微信小程序。

- `miniprogram/` 是一个商城小程序：3 个 tab 页、普通分包 `packageGoods` / `packageOrder`、独立分包 `packageActivity`、全局组件、WXS 和模板。`project.config.json` 用 `miniprogramRoot` 指向它。
- `.github/workflows/routecheck.yml` 在每次推送到 `main` 和每个 Pull Request 上运行检查，结果写入任务摘要，并以 SARIF 上传到 Code Scanning。

## 看什么

- **`main` 分支**：检查通过，0 个诊断。
- **Pull Request（分支 `feature/cart-and-profile`）**：一个看起来正常的改动——购物车显示 SKU、“我的”页面加两个跳转、商品详情加图表、活动页加请求——但其中带了 5 个只有在真机或上传时才会暴露的错误：
  - `pages/cart/index.js`：主包 `require` 了分包 `packageGoods` 的文件（主包启动时分包尚未下载）。
  - `pages/me/index.js`：`wx.navigateTo` 打开了 tabBar 页面；`wx.switchTab` 打开了非 tabBar 页面。
  - `pages/index/index.wxml`：模板名拼错（`bannr`）。
  - `packageActivity/landing/index.js`：独立分包依赖了主包的 `utils/request.js`。

  检查失败，诊断直接标注在 PR 的改动行上（Files changed 页），也出现在仓库的 Security → Code scanning 中。新加的 `utils/chart.js` 只被 `packageGoods` 使用，任务摘要的迁移清单会给出把它移进分包的新路径和需要改写的引用。

本地运行：

```sh
git clone https://github.com/jiabin777on-hue/miniapp-routecheck
cd miniapp-routecheck
moon run cmd --target js -- --format text ../routecheck-demo
```
