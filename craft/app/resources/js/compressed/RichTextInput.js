/*
 Copyright (c) 2014, Pixel & Tonic, Inc.
 @license   http://buildwithcraft.com/license Craft License Agreement
 @link      http://buildwithcraft.com
*/
(function(e){Craft.RichTextInput=Garnish.Base.extend({id:null,init:function(f,h,k,d){this.id=f;d.lang=h;"undefined"==typeof d.buttonsCustom&&(d.buttonsCustom={});d.buttonsCustom.image={title:Craft.t("Insert image"),dropdown:{from_web:{title:Craft.t("Insert URL"),callback:function(){this.imageShow()}},from_assets:{title:Craft.t("Choose image"),callback:function(){this.selectionSave();var c=this;"undefined"==typeof this.assetSelectionModal?this.assetSelectionModal=Craft.createElementSelectorModal("Asset",
{storageKey:"RichTextFieldType.ChooseImage",multiSelect:!0,criteria:{kind:"image"},onSelect:e.proxy(function(a,d){if(a.length){c.selectionRestore();for(var g=0;g<a.length;g++){var b=a[g],b=b.url+"#asset:"+b.id;d&&(b+=":"+d);c.insertNode(e('<img src="'+b+'" />')[0]);c.sync()}this.observeImages();c.dropdownHideAll()}},this),closeOtherModals:!1,canSelectImageTransforms:!0}):(this.assetSelectionModal.shiftModalToEnd(),this.assetSelectionModal.show())}}}};d.buttonsCustom.link={title:Craft.t("Link"),dropdown:{link_entry:{title:Craft.t("Link to an entry"),
callback:function(){this.selectionSave();var c=this;"undefined"==typeof this.entrySelectionModal?this.entrySelectionModal=Craft.createElementSelectorModal("Entry",{storageKey:"RichTextFieldType.LinkToEntry",sources:k,onSelect:function(a){if(a.length){c.selectionRestore();a=a[0];var b=a.url+"#entry:"+a.id,d=c.getSelectionText();c.insertNode(e('<a href="'+b+'">'+(0<d.length?d:a.label)+"</a>")[0]);c.sync()}c.dropdownHideAll()},closeOtherModals:!1}):(this.entrySelectionModal.shiftModalToEnd(),this.entrySelectionModal.show())}},
link_asset:{title:Craft.t("Link to an asset"),callback:function(){this.selectionSave();var c=this;"undefined"==typeof this.assetLinkSelectionModal?this.assetLinkSelectionModal=Craft.createElementSelectorModal("Asset",{storageKey:"RichTextFieldType.LinkToAsset",onSelect:function(a){if(a.length){c.selectionRestore();a=a[0];var b=a.url+"#asset:"+a.id,d=c.getSelectionText();c.insertNode(e('<a href="'+b+'">'+(0<d.length?d:a.label)+"</a>")[0]);c.sync()}c.dropdownHideAll()},closeOtherModals:!1,canSelectImageTransforms:!0}):
(this.assetLinkSelectionModal.shiftModalToEnd(),this.assetLinkSelectionModal.show())}},link:{title:Craft.t("Insert link"),func:"linkShow"},unlink:{title:Craft.t("Unlink"),exec:"unlink"}}};f=e("#"+this.id);f.redactor(d);var b=f.data("redactor");if("undefined"!=typeof b.fullscreen&&"function"==typeof b.toggleFullscreen)Craft.cp.on("beforeSaveShortcut",function(){b.fullscreen&&b.toggleFullscreen()});if("undefined"!=typeof Craft.entryPreviewMode)Craft.entryPreviewMode.on("beforeShowPreviewMode beforeHidePreviewMode",
function(){b.opts.visual||b.toggleVisual()})}})})(jQuery);

//# sourceMappingURL=RichTextInput.min.map
