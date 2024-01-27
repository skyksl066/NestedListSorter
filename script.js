// JavaScript source code
$(function () {
    function sort_list_items(elements) {
        // �N�������Ө��r���e���ƭȤj�p�i��Ƨ�
        elements.sort(function (a, b) {
            return parseInt($(a).text()) > parseInt($(b).text()) ? 1 : -1;
        });

        let sortedItems = [];
        $.each(elements, function (index, element) {
            let $element = $(element);
            if ($element.children('ul').length > 0) {
                // �p�G�������l�����A���j�ե� sort_list_items �óB�z�l����
                let children = sort_list_items($element.children('ul').children('li').toArray());
                // �M�ŭ���� ul�A�ñN�Ƨǫ᪺�l�������J�䤤
                $element.children('ul').empty().append(children);
                sortedItems.push($element);
            } else {
                // �p�G�����S���l�����A�����N�����[�J��Ƨǵ��G��
                sortedItems.push($element);
            }
        });

        return sortedItems;
    }

    // ����s�Q�I���ɰ���ƧǾާ@
    $('.btn-sort').on('click', function () {
        let d = sort_list_items($('#ul_1>li').clone().toArray());
        $('#ul_2').html(d);
    });
});