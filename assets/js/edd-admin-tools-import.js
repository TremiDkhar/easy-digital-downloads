!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=37)}({0:function(e,t){e.exports=jQuery},37:function(e,t,r){(function(e,t){var r={init:function(){this.submit()},submit:function(){e(".edd-import-form").ajaxForm({beforeSubmit:this.before_submit,success:this.success,complete:this.complete,dataType:"json",error:this.error})},before_submit:function(t,r,n){if(r.find(".notice-wrap").remove(),r.append('<div class="notice-wrap"><span class="spinner is-active"></span><div class="edd-progress"><div></div></div></div>'),!(window.File&&window.FileReader&&window.FileList&&window.Blob)){var o=e(".edd-import-form").find(".edd-progress").parent().parent(),i=o.find(".notice-wrap");return o.find(".button-disabled").removeClass("button-disabled"),i.html('<div class="update error"><p>'+edd_vars.unsupported_browser+"</p></div>"),!1}},success:function(e,t,r,n){},complete:function(n){var o=e(this),i=t.parseJSON(n.responseText);if(i.success){var a=e(".edd-import-form .notice-wrap").parent();a.find(".edd-import-file-wrap,.notice-wrap").remove(),a.find(".edd-import-options").slideDown();var d=a.find("select.edd-import-csv-column"),s=(d.parents("tr").first(),""),p=i.data.columns.sort((function(e,t){return e<t?-1:e>t?1:0}));e.each(p,(function(e,t){s+='<option value="'+t+'">'+t+"</option>"})),d.append(s),d.on("change",(function(){var t=e(this).val();t&&!1!==i.data.first_row[t]?e(this).parent().next().html(i.data.first_row[t]):e(this).parent().next().html("")})),e.each(d,(function(){e(this).val(e(this).attr("data-field")).change()})),e(document.body).on("click",".edd-import-proceed",(function(e){e.preventDefault(),a.append('<div class="notice-wrap"><span class="spinner is-active"></span><div class="edd-progress"><div></div></div></div>'),i.data.mapping=a.serialize(),r.process_step(1,i.data,o)}))}else r.error(n)},error:function(r){var n=t.parseJSON(r.responseText),o=e(".edd-import-form").find(".edd-progress").parent().parent(),i=o.find(".notice-wrap");o.find(".button-disabled").removeClass("button-disabled"),n.data.error?i.html('<div class="update error"><p>'+n.data.error+"</p></div>"):i.remove()},process_step:function(t,n,o){e.ajax({type:"POST",url:ajaxurl,data:{form:n.form,nonce:n.nonce,class:n.class,upload:n.upload,mapping:n.mapping,action:"edd_do_ajax_import",step:t},dataType:"json",success:function(t){if("done"===t.data.step||t.data.error){var i=e(".edd-import-form").find(".edd-progress").parent().parent(),a=i.find(".notice-wrap");i.find(".button-disabled").removeClass("button-disabled"),t.data.error?a.html('<div class="update error"><p>'+t.data.error+"</p></div>"):(i.find(".edd-import-options").hide(),e("html, body").animate({scrollTop:i.parent().offset().top},500),a.html('<div class="updated"><p>'+t.data.message+"</p></div>"))}else e(".edd-progress div").animate({width:t.data.percentage+"%"},50,(function(){})),r.process_step(parseInt(t.data.step),n,o)}}).fail((function(e){window.console&&window.console.log&&console.log(e)}))}};t(document).ready((function(e){r.init()}))}).call(this,r(0),r(0))}});
//# sourceMappingURL=edd-admin-tools-import.js.map