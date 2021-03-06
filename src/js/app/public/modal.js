/**
 * Created by liusuling on 2016/10/9.
 *  @param:弹窗公共类方法
 */

define(['tools'],function (tools) {
	var modal = {};

	//初始化
	modal.createModal = function(option) {
		if($('.modal').length>0) $('.modal').remove();
		$('body').append(GTPL.imgModal());
		tools.fnPagination({
			selector: 'img-pagination',
			pages: 800,
			curr: 2,
			groups: 4,
			skin: '#59c7f9',
			callback: function(obj, first) {

			}
		});

		$('#img-console').modal();
		$('#img-console').attr('handle',option.handle);//表示操作的是背景还是编辑图
	};

	return modal;
});