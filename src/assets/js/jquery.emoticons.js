/**
 * jquery.emoticons.js 1.0
 * http://jquerywidget.com
 */
import weixiao from "../images/emo/weixiao.gif";
import xixi from "../images/emo/xixi.gif";
import haha from "../images/emo/haha.gif";
import keai from "../images/emo/keai.gif";
import kelian from "../images/emo/kelian.gif";
import wabi from "../images/emo/wabi.gif";
import chijing from "../images/emo/chijing.gif";
import haixiu from "../images/emo/haixiu.gif";
import jiyan from "../images/emo/jiyan.gif";
import bizui from "../images/emo/bizui.gif";
import bishi from "../images/emo/bishi.gif";
import aini from "../images/emo/aini.gif";
import lei from "../images/emo/lei.gif";
import touxiao from "../images/emo/touxiao.gif";
import qinqin from "../images/emo/qinqin.gif";
import shengbing from "../images/emo/shengbing.gif";
import taikaixin from "../images/emo/taikaixin.gif";
import baiyan from "../images/emo/baiyan.gif";
import youhengheng from "../images/emo/youhengheng.gif";
import zuohengheng from "../images/emo/zuohengheng.gif";
import xu from "../images/emo/xu.gif";
import shuai from "../images/emo/shuai.gif";
import tu from "../images/emo/tu.gif";
import haqian from "../images/emo/haqian.gif";
import baobao from "../images/emo/baobao.gif";
import nu from "../images/emo/nu.gif";
import yiwen from "../images/emo/yiwen.gif";
import chanzui from "../images/emo/chanzui.gif";
import baibai from "../images/emo/baibai.gif";
import sikao from "../images/emo/sikao.gif";
import han from "../images/emo/han.gif";
import kun from "../images/emo/kun.gif";
import shui from "../images/emo/shui.gif";
import qian from "../images/emo/qian.gif";
import shiwang from "../images/emo/shiwang.gif";
import ku from "../images/emo/ku.gif";
import se from "../images/emo/se.gif";
import heng from "../images/emo/heng.gif";
import guzhang from "../images/emo/guzhang.gif";
import yun from "../images/emo/yun.gif";
import beishang from "../images/emo/beishang.gif";
import zhuakuang from "../images/emo/zhuakuang.gif";
import heixian from "../images/emo/heixian.gif";
import yinxian from "../images/emo/yinxian.gif";
import numa from "../images/emo/numa.gif";
import hufen from "../images/emo/hufen.gif";
import shudaizi from "../images/emo/shudaizi.gif";
import fennu from "../images/emo/fennu.gif";
import ganmao from "../images/emo/ganmao.gif";
import xin from "../images/emo/xin.gif";
import shangxin from "../images/emo/shangxin.gif";
import zhu from "../images/emo/zhu.gif";
import xiongmao from "../images/emo/xiongmao.gif";
import tuzi from "../images/emo/tuzi.gif";
import ok from "../images/emo/ok.gif";
import ye from "../images/emo/ye.gif";
import good from "../images/emo/good.gif";
import no from "../images/emo/no.gif";
import zan from "../images/emo/zan.gif";
import lai from "../images/emo/lai.gif";
import ruo from "../images/emo/ruo.gif";
import caonima from "../images/emo/caonima.gif";
import shenma from "../images/emo/shenma.gif";
import jiong from "../images/emo/jiong.gif";
import fuyun from "../images/emo/fuyun.gif";
import geili from "../images/emo/geili.gif";
import weiguan from "../images/emo/weiguan.gif";
import weiwu from "../images/emo/weiwu.gif";
import huatong from "../images/emo/huatong.gif";
import lazhu from "../images/emo/lazhu.gif";
import dangao from "../images/emo/dangao.gif";
import fahongbao from "../images/emo/fahongbao.gif";


;(function (factory) {
    if (typeof define === "function" && (define.amd || define.cmd) && !jQuery) {
        // AMD或CMD
        define([ "jquery" ],factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        //Browser globals
        factory(jQuery);
    }
}(function ($) {
	

    $.emoticons = function(parameter,getApi) {
        if(typeof parameter == 'function'){ //重载
            getApi = parameter;
            parameter = {};
        }else{
            parameter = parameter || {};
            getApi = getApi||function(){};
        }
        var defaults = {
            'prefix':'widget',
            'publisherCls':'publisher',
            'triggerCls':'trigger',
            'activeCls':'active',
            'path':'',
//          'path':'../assets/images/emo/',
            'list':[
                {'title':'微笑','url':weixiao},
//              {'title':'微笑','url':'weixiao},
                {'title':'嘻嘻','url':xixi},
                {'title':'哈哈','url':haha},
                {'title':'可爱','url':keai},
                {'title':'可怜','url':kelian},
                {'title':'挖鼻','url':wabi},
                {'title':'吃惊','url':chijing},
                {'title':'害羞','url':haixiu},
                {'title':'挤眼','url':jiyan},
                {'title':'闭嘴','url':bizui},
                {'title':'鄙视','url':bishi},
                {'title':'爱你','url':aini},
                {'title':'泪','url':lei},
                {'title':'偷笑','url':touxiao},
                {'title':'亲亲','url':qinqin},
                {'title':'生病','url':shengbing},
                {'title':'太开心','url':taikaixin},
                {'title':'白眼','url':baiyan},
                {'title':'右哼哼','url':youhengheng},
                {'title':'左哼哼','url':zuohengheng},
                {'title':'嘘','url':xu},
                {'title':'衰','url':shuai},
                {'title':'吐','url':tu},
                {'title':'哈欠','url':haqian},
                {'title':'抱抱','url':baobao},
                {'title':'怒','url':nu},
                {'title':'疑问','url':yiwen},
                {'title':'馋嘴','url':chanzui},
                {'title':'拜拜','url':baibai},
                {'title':'思考','url':sikao},
                {'title':'汗','url':han},
                {'title':'困','url':kun},
                {'title':'睡','url':shui},
                {'title':'钱','url':qian},
                {'title':'失望','url':shiwang},
                {'title':'酷','url':ku},
                {'title':'色','url':se},
                {'title':'哼','url':heng},
                {'title':'鼓掌','url':guzhang},
                {'title':'晕','url':yun},
                {'title':'悲伤','url':beishang},
                {'title':'抓狂','url':zhuakuang},
                {'title':'黑线','url':heixian},
                {'title':'阴险','url':yinxian},
                {'title':'怒骂','url':numa},
                {'title':'互粉','url':hufen},
                {'title':'书呆子','url':shudaizi},
                {'title':'愤怒','url':fennu},
                {'title':'感冒','url':ganmao},
                {'title':'心','url':xin},
                {'title':'伤心','url':shangxin},
                {'title':'猪','url':zhu},
                {'title':'熊猫','url':xiongmao},
                {'title':'兔子','url':tuzi},
                {'title':'OK','url':ok},
                {'title':'耶','url':ye},
                {'title':'GOOD','url':good},
                {'title':'NO','url':no},
                {'title':'赞','url':zan},
                {'title':'来','url':lai},
                {'title':'弱','url':ruo},
                {'title':'草泥马','url':caonima},
                {'title':'神马','url':shenma},
                {'title':'囧','url':jiong},
                {'title':'浮云','url':fuyun},
                {'title':'给力','url':geili},
                {'title':'围观','url':weiguan},
                {'title':'威武','url':weiwu},
                {'title':'话筒','url':huatong},
                {'title':'蜡烛','url':lazhu},
                {'title':'蛋糕','url':dangao},
                {'title':'发红包','url':fahongbao}
            ],
            'top':0,
            'left':0,
            'onShow':function(){},
            'onHide':function(){},
            'onSelect':function(){}
        };
        var options = $.extend({}, defaults, parameter);

        var _api = {};
        var $document = $(document);
        var $body = $('body');
        var $layer = $('<div class="'+options.prefix+'-layer">').appendTo($body);
        var $tool = $('<div class="'+options.prefix+'-tool"></div>').appendTo($layer);
        var $close = $('<a class="'+options.prefix+'-close" href="javascript:;" title="关闭">X</a>').appendTo($tool);
        var $panel = $('<div class="'+options.prefix+'-panel"></div>').appendTo($layer);
        var $list = $('<ul></ul>').appendTo($panel);
        var $trigger = null;
        var $textarea = null;
        var _hash = {};
        //结构处理
        $layer.css({
            'position':'absolute',
            'display':'none'
        });
        $.each(options.list,function(index,item){
            _hash[item.title] = options.path+item.url;
            $list.append('<li title="'+item.title+'"><img data-src="'+_hash[item.title]+'"/></li>');
        });
        //接口处理
        _api.getTextarea = function(){
            return $textarea;
        },
        _api.format = function(str){
            var list = str.match(/\[[\u4e00-\u9fa5]*\w*\]/g);
            var filter = /[\[\]]/g;
            var title;
            if(list){
                for(var i=0;i<list.length;i++){
                    title = list[i].replace(filter,'');
                    if(_hash[title]){
                        str = str.replace(list[i],' <img src="'+_hash[title]+'"/> ');
                    }
                }                
            }
            return str;
        };
        //关闭弹框
        var closeLayer = function(){
            if($trigger){
                $trigger.removeClass(options.activeCls);
            }
            $layer.hide();
            $trigger = null;
            $textarea = null;
            options.onHide();
        };
        //事件绑定
        $document.on('click','.'+options.triggerCls,function(){
            $trigger = $(this);
            var $publisher = $trigger.parents('.'+options.publisherCls);
            $textarea = $publisher.find('textarea');
            var offset = $trigger.offset();
            var height = $trigger.outerHeight();
            $trigger.addClass(options.activeCls);
            $layer.find('img').each(function(){
                var $this = $(this);
                $this.attr('src',$this.data('src'));
            });
            $layer.css({
                left: offset.left+options.left,
                top: offset.top+height+options.top
            }).show();
            options.onShow();
        });
        $document.on('click',function(e){
            var $target = $(e.target);
            if(!$target.is('.'+options.triggerCls)&&!$target.closest('.'+options.prefix+'-layer').length){
                closeLayer();
            }
        });
        $layer.on('click','.'+options.prefix+'-close',closeLayer);
        $layer.on('click','li',function(){
            var $this = $(this);
            var title = $this.attr('title');
            if($textarea){
                insertText($textarea[0],'['+title+']');
            }
            options.onSelect(_api);
            
        });
        //为了兼容insertText
        $document.on('select click keyup','.'+options.publisherCls+' textarea',function(){
            if (this.createTextRange){
                this.caretPos = document.selection.createRange().duplicate();
            }
        });
        //初始化
        getApi(_api);
        return this;
    };

    //插入文字
    function insertText(obj,str) {
        if(document.all && obj.createTextRange && obj.caretPos){ 
            var caretPos=obj.caretPos; 
            caretPos.text = caretPos.text.charAt(caretPos.text.length-1) == '' ? 
            str+'' : str; 
        }else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
            var startPos = obj.selectionStart,
                endPos = obj.selectionEnd,
                cursorPos = startPos,
                tmpStr = obj.value;
            obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            cursorPos += str.length;
            obj.selectionStart = obj.selectionEnd = cursorPos;
        } else {
            obj.value += str;
        }
    }
}));
