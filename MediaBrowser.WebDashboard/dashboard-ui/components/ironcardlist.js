﻿define(['layoutManager', 'iron-list', 'lazyload-image'], function (layoutManager) {

    function getTemplate(scrollTarget) {

        var html = '';

        var maxPhysical = 80;

        html += '<template is="dom-bind">\
	<iron-list as="item" id="ironList" scroll-target="' + scrollTarget + '" max-physical-count="' + maxPhysical + '" style="width:96%;" grid>\
		<template>\
			<div class$="{{item.elemClass}}" data-action$="{{item.defaultAction}}" data-itemid$="{{item.data-itemid}}" data-commands$="{{item.data-commands}}" data-context$="{{item.data-context}}" data-isfolder$="{{item.data-isfolder}}" data-itemtype$="{{item.data-itemtype}}" data-mediatype$="{{item.data-mediatype}}" data-positionticks$="{{item.data-positionticks}}" data-playaccess$="{{item.data-playaccess}}" data-locationtype$="{{item.data-locationtype}}" data-index$="{{item.data-index}}" data-albumid$="{{item.data-albumid}}" data-channelid$="{{item.data-channelid}}" data-artistid$="{{item.data-artistid}}">\
				<div class$="{{item.cardBoxClass}}">\
					<div class="cardScalable">\
						<div class="cardPadder"></div>\
						<a onclick$="{{item.onclick}}" data-action$="{{item.defaultAction}}" class$="{{item.anchorClass}}" href$="{{item.href}}">\
							<img class$="{{item.imageClass}}" is="lazyload-image" src$="{{item.imgUrl}}" />\
                            <div inner-h-t-m-l="{{item.overlayHtml}}"></div>\
						</a>\
					</div>\
                    <div inner-h-t-m-l="{{item.footerHtml}}"></div>\
				</div>\
			</div>\
		</template>\
	</iron-list>\
</template>';

        return Promise.resolve(html);
    }

    return {
        getTemplate: getTemplate
    };

});