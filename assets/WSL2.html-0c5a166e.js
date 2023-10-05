import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as i,a as s,b as e,d as n,f as o}from"./app-bbac70cf.js";const p={},d=o(`<h1 id="wsl2-安装" tabindex="-1"><a class="header-anchor" href="#wsl2-安装" aria-hidden="true">#</a> WSL2 安装</h1><h2 id="启用-wsl-2-环境" tabindex="-1"><a class="header-anchor" href="#启用-wsl-2-环境" aria-hidden="true">#</a> 启用 WSL 2 环境</h2><h2 id="快捷启用" tabindex="-1"><a class="header-anchor" href="#快捷启用" aria-hidden="true">#</a> 快捷启用</h2><p>对于新系统（Windows 11，Windows 10 的 2004 版本或更新的系统），使用<mark>管理员权限</mark>下的 CMD 或 Powershell 执行下面的命令即可：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wsl <span class="token operator">--</span>install <span class="token operator">--</span>no-distribution
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会帮助你安装 WSL2 环境的依赖，相比逐个去启用组件是更简单快捷。</p><h2 id="手动启用" tabindex="-1"><a class="header-anchor" href="#手动启用" aria-hidden="true">#</a> 手动启用</h2><p>与上面不同的是，这种方法可能适合稍旧一些系统。</p><p>我们需要启用两个可选功能，他们分别是 “适用于 Linux 的 Windows 子系统” 和 “虚拟机平台”：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>dism<span class="token punctuation">.</span>exe <span class="token operator">/</span>online <span class="token operator">/</span><span class="token function">enable-feature</span> <span class="token operator">/</span>featurename:Microsoft-Windows-Subsystem-Linux <span class="token operator">/</span>all <span class="token operator">/</span>norestart
dism<span class="token punctuation">.</span>exe <span class="token operator">/</span>online <span class="token operator">/</span><span class="token function">enable-feature</span> <span class="token operator">/</span>featurename:VirtualMachinePlatform <span class="token operator">/</span>all <span class="token operator">/</span>norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重新启动计算机。</p>`,11),c={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},h=o(`<p>记得设置默认版本为 2：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wsl <span class="token operator">--</span><span class="token function">set-default</span><span class="token operator">-</span>version 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">尽力支持</p><p>NixOS-WSL 对 inbox 版本的 WSL（即通过 Window 可选功能启用的 WSL）是尽力支持的，如果有条件，请更新到最新 Windows 使用 Windows 商店分发（使用第一种方法安装方式）的最新 WSL 支持。</p></div><h2 id="下载根文件系统" tabindex="-1"><a class="header-anchor" href="#下载根文件系统" aria-hidden="true">#</a> 下载根文件系统</h2>`,4),u={href:"https://github.com/nix-community/NixOS-WSL/releases",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"nixos-wsl.tar.gz",-1),w=o(`<p>然后决定好你要将这个文件系统导入至哪里，这里以 <code>E:\\wslDistroStorage\\NixOS</code> 举例，并且确认当前的工作文件夹就是你刚刚下载的根文件系统档案所在的文件夹。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wsl <span class="token operator">--</span>import NixOS E:\\wslDistroStorage\\NixOS nixos-wsl<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz <span class="token operator">--</span>version 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后引导到 NixOS：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wsl <span class="token operator">-</span>d NixOS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">默认发行版</p><p>可以通过 <code>wsl -s NixOS</code> 将 NixOS 设置为默认启动的发行版。</p></div>`,5),v={href:"https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting",target:"_blank",rel:"noopener noreferrer"};function x(b,k){const a=l("ExternalLinkIcon");return t(),i("div",null,[d,s("p",null,[e("我们还需要一个完整的 Linux 内核："),s("a",c,[e("WSL 2 Linux 内核更新包"),n(a)]),e("，安装它。")]),h,s("p",null,[e("在 "),s("a",u,[e("NixOS-WSL 项目的最新 Release 页"),n(a)]),e(" 中下载 "),m,e("。")]),w,s("p",null,[e("第一次启用会稍久，但是你不够幸运的话，可能终端上会出现令人厌烦的错误码，你可以在 "),s("a",v,[e("疑难解答"),n(a)]),e(" 页面找到找到你可能期待的答案。")])])}const g=r(p,[["render",x],["__file","WSL2.html.vue"]]);export{g as default};
