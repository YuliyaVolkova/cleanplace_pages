'use strict';
$(document).ready(function(){
	$("#gallery-photo").unitegallery({
		gallery_theme: "carousel",
		tile_height: 224,
		tile_width: 343,
		theme_gallery_padding: 0,				//the padding of the gallery wrapper
		theme_carousel_align: "center",			//the align of the carousel
		theme_carousel_offset: 0,				//the offset of the carousel from the align sides
		//gallery options:
		
		gallery_width:"100%",				//gallery width
		//gallery_min_width: 500,				//gallery minimal width when resizing
		gallery_background_color: "transparent",		//set custom background color. If not set it will be taken from css.
		//carousel options
		carousel_padding: 8,					//padding at the sides of the carousel
		carousel_space_between_tiles: 11,		//space between tiles
		carousel_navigation_numtiles:1,			//number of tiles to scroll when user clicks on next/prev button
		carousel_scroll_duration:370,			//duration of scrolling to tile
		carousel_scroll_easing:"easeOutCubic",	//easing of scrolling to tile animation
		carousel_autoplay: false,				//true,false - autoplay of the carousel on start
		//navigation options
		theme_enable_navigation: true,
		theme_navigation_position: "top",	//top,bottom: the vertical position of the navigation reative to the carousel
		theme_navigation_enable_play: false,		//enable / disable the play button of the navigation
		theme_navigation_align: "left",		//the align of the navigation
		theme_navigation_offset_hor: 0,			//horizontal offset of the navigation
		theme_navigation_margin: 0,			//the space between the carousel and the navigation
		theme_space_between_arrows: 0,		//the space between arrows in the navigation
		//tile design options:
		tile_enable_border:true,			//enable border of the tile
		tile_border_width:0,				//tile border width
		tile_border_radius:30,				//tile border radius (applied to border only, not to outline)
		tile_enable_outline: false,			//enable outline of the tile (works only together with the border)
		tile_enable_shadow:true,
		tile_shadow_h:0,					//position of horizontal shadow
		tile_shadow_v:4,					//position of vertical shadow
		tile_shadow_blur:6,					//shadow blur
		tile_shadow_spread:0,				//shadow spread
		tile_shadow_color:"#8B8B8B",		//shadow color			//enable shadow of the tile				tile_enable_action:	true,			//enable tile action on click like lightbox
		tile_as_link: false,				//act the tile as link, no lightbox will appear
		tile_enable_overlay: true,			//enable tile color overlay (on mouseover)
		tile_overlay_opacity: 0.05,			//tile overlay opacity
		tile_overlay_color: "#000000",		//tile overlay color
		tile_enable_icons: true,			//enable icons in mouseover mode
		tile_show_link_icon: false,			//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
		tile_space_between_icons: 26,		//initial space between icons, (on small tiles it may change)
		tile_enable_image_effect:true,		//enable tile image effect
		tile_image_effect_type: "",		//bw, blur, sepia - tile effect type
		tile_image_effect_reverse: true,	//reverce the image, set only on mouseover state
		tile_enable_textpanel: false,		 	//enable textpanel
		lightbox_type: "compact",							//compact / wide - lightbox type
		lightbox_hide_arrows_onvideoplay: true,			//hide the arrows when video start playing and show when stop
		lightbox_arrows_position: "sides",				//sides, inside: position of the arrows, used on compact type			
		lightbox_arrows_offset: 15,						//The horizontal offset of the arrows
		lightbox_arrows_inside_offset: 10,				//The offset from the image border if the arrows placed inside
		lightbox_arrows_inside_alwayson: true,			//Show the arrows on mouseover, or always on.
		lightbox_overlay_color: "#1b92a6",					//the color of the overlay. if null - will take from css
		lightbox_overlay_opacity: 1,						//the opacity of the overlay. for compact type - 0.6
		lightbox_top_panel_opacity: null,				//the opacity of the top panel
		lightbox_close_on_emptyspace:true,				//close the lightbox on empty space
		lightbox_show_numbers: true,					//show numbers on the right side
		lightbox_numbers_size: null,					//the size of the numbers string
		lightbox_numbers_color: null,					//the color of the numbers
		lightbox_numbers_padding_top:null,				//the top padding of the numbers (used in compact mode)
		lightbox_numbers_padding_right:null,			//the right padding of the numbers (used in compact mode)
		lightbox_slider_image_border: true,				//enable border around the image (for compact type only)
		lightbox_slider_image_border_width: 10,			//image border width
		lightbox_slider_image_border_color: "#ffffff",	//image border color
		lightbox_slider_image_border_radius: 2,			//image border radius
		lightbox_slider_image_shadow: true,				//enable border shadow the image
		lightbox_slider_control_swipe:true,				//true,false - enable swiping control
		lightbox_slider_control_zoom:true,				//true, false - enable zooming control
		lightbox_show_textpanel: true,						//show the text panel
		lightbox_textpanel_width: 550,						//the width of the text panel. wide type only
		lightbox_textpanel_enable_title: true,				//enable the title text
		lightbox_textpanel_enable_description: false,		//enable the description text
		lightbox_textpanel_padding_top:5,					//textpanel padding top 
		lightbox_textpanel_padding_bottom:5,				//textpanel padding bottom
		lightbox_textpanel_padding_right: 11,				//cut some space for text from right
		lightbox_textpanel_padding_left: 11,				//cut some space for text from left
		lightbox_textpanel_title_color: "#FFFFFF",				//textpanel title color. if null - take from css
		lightbox_textpanel_title_font_family:null,			//textpanel title font family. if null - take from css
		lightbox_textpanel_title_text_align:null,			//textpanel title text align. if null - take from css
		lightbox_textpanel_title_font_size:null,			//textpanel title font size. if null - take from css
		lightbox_textpanel_title_bold:null,					//textpanel title bold. if null - take from css
		lightbox_textpanel_css_title:{},					//textpanel additional css of the title				//textpanel additional css of the description			
	});
	$('.ug-tile-navigation-wrapper').css('position', 'static');
});