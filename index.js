﻿
$(function() {
    $("#calendar").calendar({
        /*
         * 传入今天的时间
         * 默认：客户端时间
         * 可传入一个服务器的时间
         */
        date: new Date(),
        width: 800,
        height: 400,
        /* 左右框显示的比例 */
        rate: 0.69,
        /*
         * 休假和加班设置
         * JSON格式：Y加年-M加月-D加日
         * 0表示休假 1表示加吧
         */
        week: false, // 是否开启单双休
        rest: false,
        day : false,
        fest : false,
        bypass : false,
        week_walue: "2016/9/17", // 双休对应的周六
        isclick: true,
        // configDay: {
        //     "Y2018": {
        //         "M6": {
        //             "D1": "休",
        //             "D7": "班",
        //             "D5": "抢",
        //         }
        //     }
        // } // 系统配置
    });
});
