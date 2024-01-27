// JavaScript source code
$(function () {
    function sort_list_items(elements) {
        // 將元素按照其文字內容的數值大小進行排序
        elements.sort(function (a, b) {
            return parseInt($(a).text()) > parseInt($(b).text()) ? 1 : -1;
        });

        let sortedItems = [];
        $.each(elements, function (index, element) {
            let $element = $(element);
            if ($element.children('ul').length > 0) {
                // 如果元素有子元素，遞迴調用 sort_list_items 並處理子元素
                let children = sort_list_items($element.children('ul').children('li').toArray());
                // 清空原先的 ul，並將排序後的子元素插入其中
                $element.children('ul').empty().append(children);
                sortedItems.push($element);
            } else {
                // 如果元素沒有子元素，直接將元素加入到排序結果中
                sortedItems.push($element);
            }
        });

        return sortedItems;
    }

    // 當按鈕被點擊時執行排序操作
    $('.btn-sort').on('click', function () {
        let d = sort_list_items($('#ul_1>li').clone().toArray());
        $('#ul_2').html(d);
    });
});