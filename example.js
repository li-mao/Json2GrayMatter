const Json2GrayMatter = require("./Json2GrayMatter");

const test = {
    companyIntro : {
      title : '公司介绍',
      content : [
        "xxxxx，注册资本5000万。",
        "公司专注化、国际化新型品牌服务体系。"
      ]
    }
};

Json2GrayMatter(test);