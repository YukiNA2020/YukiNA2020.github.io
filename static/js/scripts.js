// 定义内容相关的常量
// 1. Markdown文件和配置文件所在的目录
const content_dir = 'contents/'
// 2. YAML配置文件的名称
const config_file = 'config.yml'
// 3. 需要加载的板块名称数组（决定了哪些.md文件会被加载）
// 注意：原来的'awards'是旧板块，若要显示campus内容，需修改此处
const section_names = ['home', 'campus', 'experience', 'project'];


// 当页面DOM结构加载完成后，执行以下逻辑
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element // 1. 初始化Bootstrap的ScrollSpy（页面滚动时高亮导航栏对应项）
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',// 要监听的导航栏元素
            offset: 74, // 滚动偏移量（距离顶部多少像素时触发高亮）
        });
    };

    // Collapse responsive navbar when toggler is visible 2. 点击导航链接后，自动折叠响应式导航栏（移动端优化）
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // 如果导航栏切换按钮（移动端的汉堡菜单）是显示的，就点击它折叠菜单
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml  3. 加载并解析YAML配置文件，动态填充页面内容
    fetch(content_dir + config_file)
        .then(response => response.text())// 获取配置文件的文本内容
        .then(text => {
            const yml = jsyaml.load(text);// 用js-yaml库解析YAML为JavaScript对象
                        // 遍历配置对象的所有键值对
            Object.keys(yml).forEach(key => {
                try {
                    // 将配置的值填充到页面中id与键匹配的元素里
                    // 例如：配置中有title: "我的主页"，则页面中id="title"的元素会被填充
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                                        // 若元素id不存在，在控制台打印错误信息
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));// 捕获并打印加载配置时的错误


    // Marked
        // —————— 4. 配置Markdown解析规则，并加载各板块的.md文件 ——————
    // 禁用marked的“自动混淆链接”和“自动生成标题id”功能
    marked.use({ mangle: false, headerIds: false })
        // 遍历需要加载的板块名称数组
    section_names.forEach((name, idx) => {
          // 步骤1：用fetch加载对应的Markdown文件（如contents/home.md）
        fetch(content_dir + name + '.md')
            .then(response => response.text())// 获取Markdown文件的文本内容
            .then(markdown => {
                    // 步骤2：用marked将Markdown转换为HTML
                const html = marked.parse(markdown);
                      // 步骤3：将转换后的HTML填充到页面中id为“[name]-md”的容器
                // 例如：name='home' → 填充到id="home-md"的元素
                document.getElementById(name + '-md').innerHTML = html;
                
            }).then(() => {
                // MathJax
                  // 步骤4：调用MathJax重新渲染数学公式（若Markdown中有公式）
                MathJax.typeset();
            })
            .catch(error => console.log(error));// 捕获并打印加载Markdown时的错误
    })

}); 
