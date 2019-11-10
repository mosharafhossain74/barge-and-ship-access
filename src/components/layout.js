import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import AdHelper from "./adHelper"

import Header from "./header"
import OverlayMenu from "./OverlayMenu"
import Hamburger from "./Hamburger"
import Footer from "./Footer"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto:300,500,700&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    padding:0;
    margin:0;
  }
.gform_wrapper .gf_progressbar:after, .gform_wrapper ol.validation_list:after {
\tcontent: ""
}

.gform_wrapper h1, .gform_wrapper h2, .gform_wrapper h3 {
\tfont-weight: 400;
\tborder: none;
\tbackground: 0 0
}

.gform_wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]) {
\tfont-size: inherit;
\tfont-family: inherit;
\tpadding: 5px 4px;
\tletter-spacing: normal
}

.gform_wrapper input[type=image] {
\tborder: none !important;
\tpadding: 0 !important;
\twidth: auto !important
}

.gform_wrapper textarea {
\tpadding: 6px 8px;
\tline-height: 1.5;
\tresize: none
}

.gform_wrapper select {
\tline-height: 1.5
}

.gform_wrapper .ginput_container_multiselect select {
\tbackground-image: none !important;
\t-webkit-appearance: none;
\t-moz-appearance: none;
\toutline: 0
}

.gform_wrapper ul.gform_fields {
\tmargin: 0 !important;
\tlist-style-type: none;
\tdisplay: block
}

.gform_wrapper ul, html > body .entry ul {
\ttext-indent: 0
}

.gform_wrapper form li, .gform_wrapper li {
\tmargin-left: 0 !important;
\tlist-style: none !important;
\toverflow: visible
}

.gform_wrapper ul li.gfield {
\tclear: both
}

.gform_wrapper ul.gfield_checkbox li, .gform_wrapper ul.gfield_radio li {
\toverflow: hidden
}

.gform_wrapper form ul.gform_fields.left_label li.gfield, .gform_wrapper form ul.gform_fields.right_label li.gfield, .gform_wrapper ul.gform_fields.left_label li.gfield, .gform_wrapper ul.gform_fields.right_label li.gfield {
\tmargin-bottom: 14px
}

.gform_wrapper form ul.left_label li ul.gfield_checkbox li, .gform_wrapper form ul.left_label li ul.gfield_radio li, .gform_wrapper form ul.right_label li ul.gfield_checkbox li, .gform_wrapper form ul.right_label li ul.gfield_radio li, .gform_wrapper ul.left_label li ul.gfield_checkbox li, .gform_wrapper ul.left_label li ul.gfield_radio li, .gform_wrapper ul.right_label li ul.gfield_checkbox li, .gform_wrapper ul.right_label li ul.gfield_radio li {
\tmargin-bottom: 10px
}

.gform_wrapper ul li:after, .gform_wrapper ul li:before, .gform_wrapper ul.gform_fields {
\tpadding: 0;
\tmargin: 0;
\toverflow: visible
}


.gform_wrapper .gfield_date_dropdown_day, .gform_wrapper .gfield_date_dropdown_month, .gform_wrapper .gfield_date_dropdown_year {
\tvertical-align: top;
\tflex-direction: row;
\tmargin-right: .5rem
}

.gform_wrapper .gfield_date_year input[type=number] {
\twidth: calc(4rem + 8px) !important
}

.gform_wrapper .gfield_date_day input, .gform_wrapper .gfield_date_month input {
\twidth: calc(3rem + 8px)
}

.gform_wrapper .gfield_date_year input {
\twidth: 4rem
}

.gform_wrapper .field_sublabel_above div[class*=gfield_date_].ginput_container label, .gform_wrapper .field_sublabel_below div[class*=gfield_date_].ginput_container label {
\twidth: 3rem;
\ttext-align: center
}

.gform_wrapper .field_sublabel_above div.gfield_date_year.ginput_container label, .gform_wrapper .field_sublabel_below div.gfield_date_year.ginput_container label {
\twidth: 4rem
}

.gform_wrapper .gfield_time_ampm, .gform_wrapper .gfield_time_hour, .gform_wrapper .gfield_time_minute {
\twidth: 33.333%;
\tflex-direction: row
}

@media only screen and (min-width: 321px) {
\t.gform_wrapper .gfield_date_year, .gform_wrapper .gfield_time_ampm {
\t\tmax-width: calc(4rem + .5rem)
\t}

\t.gform_wrapper .gfield_time_hour, .gform_wrapper .gfield_time_minute {
\t\tmax-width: 4rem
\t}

\t.gform_wrapper .gfield_time_ampm, .gform_wrapper .gfield_time_hour {
\t\tmax-width: calc(4rem + .5rem)
\t}
}

.gform_wrapper ul.gform_fields:not(.top_label) .ginput_container_time span {
\tfloat: left
}

.gform_wrapper .gfield_time_hour i {
\tfont-style: normal !important;
\tfont-family: sans-serif !important;
\twidth: 10px;
\ttext-align: center;
\tfloat: right;
\tmargin-top: 9%
}

.gform_wrapper .gfield_time_minute {
\tmargin-right: .5rem
}

.gform_wrapper .gfield_time_hour {
\tmargin-right: .25rem
}

.gform_wrapper .gfield_time_ampm {
\tvertical-align: top;
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

.gform_wrapper .gfield_time_ampm select {
\tmin-width: calc(2rem + 25px);
\twidth: calc(3rem + 25px)
}

.gform_wrapper .gfield_time_ampm_shim {
\tdisplay: block;
\tfont-size: .813em;
\tmargin: 9px 0 1px 1px
}

.gform_wrapper .gfield_time_hour input, .gform_wrapper .gfield_time_minute input {
\twidth: calc(3rem + 8px)
}

.gform_wrapper .gfield_time_hour input[type=number], .gform_wrapper .gfield_time_minute input[type=number] {
\twidth: calc(3rem + 8px) !important
}

.gform_wrapper .field_sublabel_above div[class*=gfield_time_].ginput_container label, .gform_wrapper .field_sublabel_below div[class*=gfield_time_].ginput_container label {
\twidth: 3rem;
\ttext-align: center
}

.gform_wrapper .field_hover {
\tborder: 1px dashed #2175A9;
\tcursor: pointer
}

.gform_wrapper .field_selected {
\tbackground-color: #DFEFFF;
\tborder: 1px solid #C2D7EF
}

.gform_wrapper .top_label .gfield_hide_label {
\tdisplay: none
}

.gform_wrapper .ginput_complex .ginput_left input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=image]):not([type=file]), .gform_wrapper .ginput_complex .ginput_right input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=image]):not([type=file]), .gform_wrapper .ginput_complex .ginput_right select, .gform_wrapper .ginput_complex input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=image]):not([type=file]), .gform_wrapper .ginput_complex select {
\twidth: 100%
}

.gform_wrapper .field_sublabel_above .ginput_complex.ginput_container label, .gform_wrapper .field_sublabel_above div[class*=gfield_date_].ginput_container label, .gform_wrapper .field_sublabel_above div[class*=gfield_time_].ginput_container label, .gform_wrapper .field_sublabel_below .ginput_complex.ginput_container label, .gform_wrapper .field_sublabel_below div[class*=gfield_date_].ginput_container label, .gform_wrapper .field_sublabel_below div[class*=gfield_time_].ginput_container label {
\tdisplay: block;
\tfont-size: .813em;
\tletter-spacing: .5pt;
\twhite-space: nowrap
}

.gform_wrapper ul.gfield_checkbox li label, .gform_wrapper ul.gfield_radio li label {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tletter-spacing: inherit;
\tvertical-align: middle;
\tcursor: pointer
}

.gform_wrapper .field_sublabel_above .ginput_complex.ginput_container label, .gform_wrapper .field_sublabel_above div[class*=gfield_time_].ginput_container label {
\tmargin: 9px 0 1px 1px
}

.gform_wrapper ul.gform_fields:not(.top_label) .field_sublabel_above .ginput_container.ginput_container_email label, .gform_wrapper ul.gform_fields:not(.top_label) .field_sublabel_above .ginput_container.ginput_container_name label, .gform_wrapper ul.gform_fields:not(.top_label) .field_sublabel_above .ginput_container.ginput_container_password label, .gform_wrapper ul.gform_fields:not(.top_label) .field_sublabel_above .ginput_container.ginput_container_time label {
\tmargin-top: 0
}

.gform_wrapper .field_sublabel_below .ginput_complex.ginput_container label, .gform_wrapper .field_sublabel_below div[class*=gfield_time_].ginput_container label {
\tmargin: 1px 0 9px 1px
}

.gform_wrapper .top_label .field_sublabel_above label.gfield_label + .ginput_complex.ginput_container, .gform_wrapper .top_label .field_sublabel_above label.gfield_label + div[class*=gfield_time_].ginput_container {
\tmargin-top: 0
}

body .gform_wrapper .top_label div.ginput_container {
\tmargin-top: 8px
}

body.gform_wrapper div.clear-multi {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

body .gform_wrapper ul li.field_description_below div.ginput_container_checkbox, body .gform_wrapper ul li.field_description_below div.ginput_container_radio {
\tmargin-top: 16px;
\tmargin-bottom: 0
}

.gform_wrapper .hidden_label .gfield_label {
\tclip: rect(1px, 1px, 1px, 1px);
\tposition: absolute !important;
\theight: 1px;
\twidth: 1px;
\toverflow: hidden
}

.gfield.left_label, .gfield.right_label {
\tpadding-top: 10px
}

.gform_wrapper li.hidden_label input {
\tmargin-top: 12px
}

.gform_wrapper .field_sublabel_hidden_label .ginput_complex.ginput_container input[type=text], .gform_wrapper .field_sublabel_hidden_label .ginput_complex.ginput_container select {
\tmargin-bottom: 12px
}

.gform_wrapper .screen-reader-text, .gform_wrapper label.hidden_sub_label {
\tborder: 0;
\tclip: rect(1px, 1px, 1px, 1px);
\tclip-path: inset(50%);
\theight: 1px;
\tmargin: -1px;
\toverflow: hidden;
\tpadding: 0;
\tposition: absolute;
\twidth: 1px;
\tword-wrap: normal !important
}

.gform_wrapper input.large, .gform_wrapper input.medium, .gform_wrapper input.small, .gform_wrapper select.large, .gform_wrapper select.medium, .gform_wrapper select.small {
\twidth: 100%
}

.gform_wrapper input.datepicker_with_icon.large, .gform_wrapper input.datepicker_with_icon.medium, .gform_wrapper input.datepicker_with_icon.small {
\twidth: calc(100% - 24px)
}



.gform_wrapper textarea.small {
\theight: 80px;
\twidth: 100%
}

.gform_wrapper textarea.medium {
\theight: 120px;
\twidth: 100%
}

.gform_wrapper textarea.large {
\theight: 160px;
\twidth: 100%
}

.gform_wrapper h2.gsection_title {
\tmargin: 0 !important;
\tpadding: 0 !important;
\tletter-spacing: normal !important
}

.gform_wrapper .gsection .gfield_label, .gform_wrapper h2.gsection_title, .gform_wrapper h3.gform_title {
\tfont-weight: 700;
\tfont-size: 1.25em
}

.gform_wrapper h3.gform_title {
\tletter-spacing: normal !important;
\tmargin: 10px 0 6px
}

.gform_wrapper li.gfield.field_description_below + li.gsection {
\tmargin-top: 24px !important
}

.gform_wrapper span.gform_description {
\tfont-weight: 400;
\tdisplay: block;
\twidth: calc(100% - 16px);
\tmargin-bottom: 16px
}

.gform_wrapper .gsection {
\tborder-bottom: 1px solid #CCC;
\tpadding: 0 16px 8px 0;
\tmargin: 28px 0;
\tclear: both
}

.gform_wrapper ul.gfield_checkbox li input[type=checkbox], .gform_wrapper ul.gfield_radio li input[type=radio] {
\twidth: auto !important
}

.gform_wrapper ul.gfield_checkbox, .gform_wrapper ul.gfield_radio {
\tmargin: 6px 0;
\tpadding: 0
}

.gform_wrapper .gfield_checkbox li label, .gform_wrapper .gfield_radio li label {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tpadding: 0;
\twidth: auto;
\tline-height: 1.5;
\tfont-size: .875em;
\tvertical-align: middle;
\tmax-width: 85%;
\twhite-space: normal
}

.gform_wrapper .ginput_complex .ginput_cardinfo_left label, .gform_wrapper .ginput_complex .ginput_cardinfo_right label, .gform_wrapper div.charleft {
\twhite-space: nowrap !important
}

.gform_wrapper .gfield_checkbox li label {
\tmargin: 0
}

.gform_wrapper .gfield_radio li label {
\tmargin: 2px 0 0 4px
}

.gform_wrapper .gfield_checkbox li input, .gform_wrapper .gfield_checkbox li input[type=checkbox], .gform_wrapper .gfield_radio li input[type=radio] {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tvertical-align: middle;
\tmargin-left: 1px
}

.gform_wrapper .description, .gform_wrapper .gfield_description, .gform_wrapper .gsection_description, .gform_wrapper .instruction {
\tfont-size: .813em;
\tline-height: inherit;
\tclear: both;
\tfont-family: inherit;
\tletter-spacing: normal
}

.gform_wrapper .description, .gform_wrapper .gfield_description, .gform_wrapper .gsection_description {
\tpadding: 0 16px 0 0
}

.gform_wrapper .field_description_below .gfield_description {
\tpadding-top: 16px
}

.gform_wrapper .field_sublabel_above .description, .gform_wrapper .field_sublabel_above .gfield_description, .gform_wrapper .field_sublabel_above .gsection_description {
\tmargin-top: 9px
}

.gform_wrapper .top_label .gsection_description {
\twidth: 100%;
\tmargin-bottom: 9px
}

.gform_wrapper .gfield_description {
\twidth: 100%
}

.gform_wrapper .description_above .gfield_description {
\tpadding: 0 0 10px
}

.gfield_date_year + .gfield_description {
\tpadding: 0
}


.gform_wrapper .ginput_complex .ginput_full, .gform_wrapper .ginput_complex .ginput_left, .gform_wrapper .ginput_complex .ginput_right {
\tmin-height: 45px
}

.gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=email], .gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=number], .gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=password], .gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=tel], .gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=text], .gform_wrapper .gfield_error .ginput_complex .ginput_full input[type=url], .gform_wrapper .gfield_error .ginput_complex .ginput_full select, .gform_wrapper .ginput_complex .ginput_full input[type=email], .gform_wrapper .ginput_complex .ginput_full input[type=number], .gform_wrapper .ginput_complex .ginput_full input[type=password], .gform_wrapper .ginput_complex .ginput_full input[type=tel], .gform_wrapper .ginput_complex .ginput_full input[type=text], .gform_wrapper .ginput_complex .ginput_full input[type=url] {
\twidth: 100%
}

.gform_wrapper .gfield_checkbox li, .gform_wrapper .gfield_radio li {
\tposition: relative;
\tmargin: 0 0 16px;
\tline-height: 1.2
}

.gchoice_select_all, .gform_wrapper ul.gfield_checkbox li input[type=checkbox]:checked + label, .gform_wrapper ul.gfield_radio li input[type=radio]:checked + label {
\tfont-weight: 700
}

.gform_wrapper input.datepicker.datepicker_with_icon {
\tmargin-right: 4px !important;
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

.gform_wrapper .gf_hidden, .gform_wrapper .gform_hidden, .gform_wrapper input.gform_hidden, .gform_wrapper input[type=hidden] {
\tdisplay: none !important;
\tmax-height: 1px !important;
\toverflow: hidden
}

.gform_wrapper .gf_invisible, .gform_wrapper .gfield_visibility_hidden {
\tvisibility: hidden;
\tposition: absolute;
\tleft: -9999px
}

.gform_wrapper .ginput_full br, .gform_wrapper .ginput_left br, .gform_wrapper .ginput_right br {
\tdisplay: none !important
}

.gform_wrapper ul.gfield_checkbox li, .gform_wrapper ul.gfield_radio li {
\tpadding: 0 !important
}

.gform_wrapper ul.gfield_radio li input + input {
\tmargin-left: 4px
}

.gform_wrapper ul.gfield_radio li input[value=gf_other_choice] {
\tmargin-right: 6px;
\tmargin-top: 4px
}

.gform_wrapper .gfield_description + .gform_wrapper .gfield_description.validation_message {
\tmargin-top: 6px
}

.gform_wrapper .ginput_container.ginput_list + .gfield_description.validation_message {
\tmargin-top: 0
}

.gform_wrapper li.gfield_html {
\tmax-width: 100%
}

.gform_wrapper .gfield_html.gfield_no_follows_desc {
\tmargin-top: 10px
}

body .gform_wrapper ul li.gfield.gfield_html img {
\tmax-width: 100% !important
}

.gform_wrapper .gform_ajax_spinner {
\tpadding-left: 10px
}

.gform_validation_container, .gform_wrapper .gform_validation_container, body .gform_wrapper .gform_body ul.gform_fields li.gfield.gform_validation_container, body .gform_wrapper li.gform_validation_container, body .gform_wrapper ul.gform_fields li.gfield.gform_validation_container {
\tdisplay: none !important;
\tposition: absolute !important;
\tleft: -9000px
}

.gform_wrapper .gfield_captcha_input_container {
\tpadding-top: 3px
}

.gform_wrapper .simple_captcha_small input {
\twidth: 64px
}

.gform_wrapper .simple_captcha_medium input {
\twidth: 96px
}

.gform_wrapper .simple_captcha_large input {
\twidth: 128px
}

.gform_wrapper .gform_wrapper .left_label .simple_captcha_small, .gform_wrapper .left_label .simple_captcha_large, .gform_wrapper .left_label .simple_captcha_medium, .gform_wrapper .right_label .simple_captcha_large, .gform_wrapper .right_label .simple_captcha_medium, .gform_wrapper .right_label .simple_captcha_small {
\tmargin-left: 32%
}

.gform_wrapper .gfield_captcha_container img.gfield_captcha {
\tborder: none !important;
\tbackground: 0 0 !important;
\tfloat: none !important;
\tmargin: 0 !important;
\tpadding: 0 !important
}

.gform_wrapper .left_label .math_large, .gform_wrapper .left_label .math_medium, .gform_wrapper .left_label .math_small, .gform_wrapper .left_label div.charleft, .gform_wrapper .right_label .math_large, .gform_wrapper .right_label .math_medium, .gform_wrapper .right_label .math_small, .gform_wrapper .right_label div.charleft {
\tmargin-left: 32%
}

.gform_wrapper .math_small input {
\twidth: 70px
}

.gform_wrapper .math_medium input {
\twidth: 510px
}

.gform_wrapper .math_large input {
\twidth: 612px
}

.gform_wrapper div.charleft {
\tfont-size: .688em;
\tmargin-top: 4px;
\tcolor: #767676;
\twidth: 92% !important
}

.gform_wrapper div.charleft[style] {
\twidth: 92% !important
}

.gform_wrapper div.charleft.ginput_counter_tinymce {
\tborder: 1px solid #eee;
\tborder-width: 1px 0 0;
\tpadding: 4px 9px;
\twidth: 100% !important
}

.gform_wrapper div.charleft.warningTextareaInfo {
\tcolor: #767676
}

.gform_wrapper div.charleft.ginput_counter_error {
\tcolor: red
}

.gform_wrapper li.gf_hide_charleft div.charleft {
\tdisplay: none !important
}

.gf_submission_limit_message {
\tcolor: #790000;
\tfont-size: 1.375em
}

.gform_wrapper .ginput_price {
\tfilter: alpha(opacity=70);
\t-moz-opacity: .7;
\t-khtml-opacity: .7;
\topacity: .7
}

.gform_wrapper span.ginput_total {
\tcolor: #060;
\tfont-size: inherit
}

.gform_wrapper .top_label span.ginput_total {
\tmargin: 8px 0
}

.gform_wrapper span.ginput_product_price_label {
\tmargin-right: 2px
}

.gform_wrapper span.ginput_product_price {
\tcolor: #900
}

.gform_wrapper span.ginput_quantity_label {
\tmargin-left: 10px;
\tmargin-right: 2px
}

.gform_wrapper input.ginput_quantity[type=text] {
\twidth: 3rem
}

.gform_wrapper input.ginput_quantity[type=number] {
\twidth: 4rem
}

.gform_wrapper .gform_page_footer {
\tmargin: 14px 0;
\twidth: 100%;
\tborder-top: 1px dotted #CCC;
\tpadding: 16px 0 0;
\tclear: both
}

.gform_wrapper .gform_page_footer.left_label, .gform_wrapper .gform_page_footer.right_label {
\tpadding: 16px 0 0 29%
}

.gform_wrapper .gform_page_footer .button.gform_next_button, .gform_wrapper .gform_page_footer .button.gform_previous_button {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

.gform_wrapper .gform_page_footer .button.gform_previous_button {
\tmargin-bottom: 8px
}

.gform_wrapper .gf_progressbar_wrapper {
\tclear: both;
\twidth: 100%;
\tmargin: 0 0 16px;
\tpadding: 0 0 16px
}

.gform_wrapper .gf_progressbar_wrapper h3.gf_progressbar_title {
\tfont-size: .813em;
\tline-height: 1 !important;
\tmargin: 0 0 8px 12px !important;
\tpadding: 0 !important;
\tclear: both;
\tfilter: alpha(opacity=60);
\t-moz-opacity: .6;
\t-khtml-opacity: .6;
\topacity: .6
}

.gform_wrapper .gf_progressbar {
\tpadding: 10px;
\tposition: relative;
\tbackground-color: rgba(0, 0, 0, .1);
\t-moz-border-radius: 25px;
\t-webkit-border-radius: 25px;
\tborder-radius: 25px;
\t-webkit-box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .05);
\t-moz-box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .05);
\tbox-shadow: inset 0 0 1px 1px rgba(0, 0, 0, .05);
\twidth: 100%
}

.gform_wrapper .gf_progressbar_percentage {
\theight: 24px;
\ttext-align: right;
\tfont-family: helvetica, arial, sans-serif;
\tfont-size: .813em !important;
\ttext-shadow: 0 1px 1px rgba(0, 0, 0, .5);
\tz-index: 999;
\tvertical-align: middle;
\tbackground: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, .1) 10px, rgba(0, 0, 0, .1) 20px), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .3));
\tborder-radius: 20px 4px 4px 20px
}

.gform_wrapper .gf_progressbar:after {
\tdisplay: block;
\twidth: 100%;
\tz-index: 990;
\theight: 24px;
\tmargin-top: -24px;
\tbackground-color: rgba(0, 0, 0, .1);
\t-webkit-box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .05);
\t-moz-box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .05);
\tbox-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .05);
\tborder-radius: 20px
}

.gform_wrapper .gf_progressbar_percentage.percentbar_100 {
\tborder-top-right-radius: 20px;
\tborder-bottom-right-radius: 20px
}

.gform_wrapper .gf_progressbar_percentage span {
\tdisplay: block;
\twidth: auto;
\tfloat: right;
\tmargin-right: 5px;
\tmargin-left: 5px;
\tline-height: 1.8
}

.gform_wrapper .gf_progressbar_percentage.percentbar_0 span {
\tcolor: #959595;
\ttext-shadow: none;
\tfloat: none !important;
\tmargin-left: 12px;
\tword-wrap: normal
}

.gform_wrapper .percentbar_blue {
\tbackground-color: #036493;
\tcolor: #FFF
}

.gform_wrapper .percentbar_gray {
\tbackground-color: #7C7C7C;
\tcolor: #FFF
}

.gform_wrapper .percentbar_green {
\tbackground-color: #88B831;
\tcolor: #FFF
}

.gform_wrapper .percentbar_orange {
\tbackground-color: #FF7120;
\tcolor: #FFF
}

.gform_wrapper .percentbar_red {
\tbackground-color: #FF2A1A;
\tcolor: #FFF
}

.gform_wrapper .gf_page_steps {
\twidth: 100%;
\tmargin: 0 0 8px;
\tpadding: 0 0 4px;
\tborder-bottom: 1px dotted #CCC
}

.gform_wrapper .gf_step {
\twidth: 100%;
\tmargin: 24px 24px 24px 0;
\tfont-size: .875em;
\theight: 14px;
\tline-height: 1.25 !important;
\tfilter: alpha(opacity=20);
\t-moz-opacity: .2;
\t-khtml-opacity: .2;
\topacity: .2;
\tfont-family: inherit
}

.gform_wrapper .gf_step span.gf_step_number {
\tfont-size: 1.25em;
\tfont-family: arial, sans-serif;
\tmargin-right: 4px
}

.gform_wrapper .gf_step span.gf_step_label, .gform_wrapper .gf_step span.gf_step_number {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tvertical-align: middle
}

.gform_wrapper .gf_step.gf_step_active {
\tfilter: alpha(opacity=100);
\t-moz-opacity: 1;
\t-khtml-opacity: 1;
\topacity: 1
}

.gform_wrapper .gf_step_clear {
\tdisplay: block;
\tclear: both;
\theight: 1px;
\toverflow: hidden
}

.gform_wrapper .gfield_password_strength {
\tborder: 1px solid #DDD;
\tmargin-top: 18px;
\tmargin-bottom: 18px;
\tline-height: 1.8;
\tpadding: 10px 5px;
\ttext-align: center;
\tbackground-color: #EEE;
\tborder-bottom: 3px solid #DDD
}

.gform_wrapper ul.top_label li.gfield.gfield_error.gfield_contains_required .gfield_password_strength {
\tmargin-right: 16px
}

.gform_wrapper ul.left_label li.gfield .gfield_password_strength, .gform_wrapper ul.right_label li.gfield .gfield_password_strength {
\tmargin-top: 18px;
\tmargin-bottom: 18px;
\twidth: 100%
}

.gform_wrapper .gfield_password_strength.bad {
\tbackground-color: #FFB78C;
\tborder-color: #FF853C;
\tborder-bottom: 3px solid #FF853C
}

.gform_wrapper .gfield_password_strength.good {
\tbackground-color: #FFEC8b;
\tborder-color: #FC0;
\tborder-bottom: 3px solid #FC0
}

.gform_wrapper .gfield_password_strength.mismatch, .gform_wrapper .gfield_password_strength.short {
\tbackground-color: #FFA0A0;
\tborder-color: #f04040;
\tborder-bottom: 3px solid #f04040
}

.gform_wrapper .gfield_password_strength.strong {
\tbackground-color: #C3FF88;
\tborder-color: #8DFF1C;
\tborder-bottom: 3px solid #8DFF1C
}

.gform_wrapper table.gfield_list, .gform_wrapper table.gfield_list caption, .gform_wrapper table.gfield_list tbody, .gform_wrapper table.gfield_list td, .gform_wrapper table.gfield_list tfoot, .gform_wrapper table.gfield_list th, .gform_wrapper table.gfield_list thead, .gform_wrapper table.gfield_list tr {
\tmargin: 0;
\tpadding: 0;
\tborder: 0;
\tfont: inherit;
\tvertical-align: baseline
}

.gform_wrapper table.gfield_list {
\tborder-spacing: 0;
\tborder-collapse: collapse;
\ttable-layout: auto !important
}

.gfield_repeater_buttons {
\tpadding-top: 15px
}

.gform_wrapper table.gfield_list thead th {
\tfont-weight: 700;
\ttext-align: left
}

.gform_wrapper table.gfield_list colgroup {
\twidth: 100%;
\tdisplay: block
}

.gform_wrapper li.gfield.gfield_error table.gfield_list thead th {
\tcolor: #790000
}

.gform_wrapper table.gfield_list thead, .gform_wrapper table.gfield_list tr {
\tpadding: 0;
\tmargin: 0
}

.gform_wrapper table.gfield_list td, .gform_wrapper table.gfield_list th {
\tpadding: 4px 0
}

.gform_wrapper ul.gform_fields:not(.top_label) table.gfield_list th {
\tpadding: 0 0 4px
}

.gform_wrapper table.gfield_list td + td, .gform_wrapper table.gfield_list th + th {
\tpadding: 0 0 0 16px
}

.gform_wrapper .gfield_list, .gform_wrapper .gfield_list td.gfield_list_cell input {
\twidth: 100%
}

.gfield_icon_disabled {
\tcursor: default !important;
\tfilter: alpha(opacity=60);
\t-moz-opacity: .6;
\t-khtml-opacity: .6;
\topacity: .6
}

.gform_wrapper table.gfield_list tr td.gfield_list_icons {
\twidth: 48px !important;
\tpadding: 0 0 0 4px !important;
\tbox-sizing: border-box
}

.gform_wrapper table.gfield_list td.gfield_list_icons img {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tvertical-align: middle
}

.gform_wrapper .gform_card_icon_container {
\tmargin: 8px 0 6px;
\theight: 32px
}

.gform_wrapper div.gform_card_icon {
\tmargin-right: 4px;
\ttext-indent: -9000px;
\tbackground-repeat: no-repeat;
\twidth: 36px;
\theight: 32px;
\tfloat: left
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_visa {
\tbackground-position: 0 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_visa {
\tbackground-position: 0 -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_visa {
\tbackground-position: 0 -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_mastercard {
\tbackground-position: -36px 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_mastercard {
\tbackground-position: -36px -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_mastercard {
\tbackground-position: -36px -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_amex {
\tbackground-position: -72px 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_amex {
\tbackground-position: -72px -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_amex {
\tbackground-position: -72px -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_discover {
\tbackground-position: -108px 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_discover {
\tbackground-position: -108px -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_discover {
\tbackground-position: -108px -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_maestro {
\tbackground-position: -144px 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_maestro {
\tbackground-position: -144px -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_maestro {
\tbackground-position: -144px -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_jcb {
\tbackground-position: -180px 0
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_jcb {
\tbackground-position: -180px -32px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style1 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_jcb {
\tbackground-position: -180px -64px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_visa {
\tbackground-position: 0 -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_visa {
\tbackground-position: 0 -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_visa {
\tbackground-position: 0 -256px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_mastercard {
\tbackground-position: -36px -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_mastercard {
\tbackground-position: -36px -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_mastercard {
\tbackground-position: -36px -256px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_amex {
\tbackground-position: -72px -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_amex {
\tbackground-position: -72px -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_amex {
\tbackground-position: -72px -256px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_discover {
\tbackground-position: -108px -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_discover {
\tbackground-position: -108px -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_discover {
\tbackground-position: -108px -256px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_maestro {
\tbackground-position: -144px -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_maestro {
\tbackground-position: -144px -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_maestro {
\tbackground-position: -144px -256px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_jcb {
\tbackground-position: -180px -192px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_selected.gform_card_icon_jcb {
\tbackground-position: -180px -224px
}

.gform_wrapper .gform_card_icon_container.gform_card_icon_style2 div.gform_card_icon.gform_card_icon_inactive.gform_card_icon_jcb {
\tbackground-position: -180px -256px
}

.gform_card_icon_container input[type=radio]#gform_payment_method_creditcard {
\tfloat: left;
\tposition: relative;
\ttop: 4px !important
}

.gform_wrapper .ginput_complex .ginput_cardinfo_right {
\tmin-width: 85px !important
}

.gform_wrapper .ginput_complex span.ginput_cardextras {
\tdisplay: block;
\toverflow: hidden
}

.gform_wrapper .ginput_complex .ginput_cardinfo_left span.ginput_card_expiration_container {
\tposition: relative;
\tdisplay: block;
\tmin-width: 160px !important
}

.gform_wrapper .ginput_complex .ginput_cardinfo_left span.ginput_card_expiration_container select {
\tmargin-bottom: 8px
}

.gform_wrapper .ginput_complex .ginput_cardinfo_right input.ginput_card_security_code {
\tmax-width: 50% !important
}

.gform_wrapper .ginput_complex .ginput_cardinfo_right span.ginput_card_security_code_icon {
\twidth: 32px;
\theight: 23px;
\tbackground-repeat: no-repeat;
\tbackground-position: 0 -128px;
\tposition: relative;
\ttop: -1px;
\tleft: 6px;
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

.gform_wrapper .gform_fileupload_multifile .gform_drop_area {
\tpadding: 24px;
\tborder: 1px dashed #CCC;
\ttext-align: center;
\tcolor: #AAA;
\tmargin-bottom: 16px;
\tbackground: rgba(0, 0, 0, .02);
\t-webkit-border-radius: 4px;
\t-moz-border-radius: 4px;
\tborder-radius: 4px
}

.gform_wrapper span.gform_drop_instructions {
\tdisplay: block;
\tmargin-bottom: 8px
}

.gform_delete {
\tvertical-align: middle;
\tcursor: pointer
}

.gform_wrapper .copy_values_option_container .copy_values_enabled {
\twidth: auto
}

.gform_wrapper li.field_sublabel_above .ginput_complex input[type=text] {
\tmargin-bottom: 1px
}

.gform_wrapper .form_saved_message {
\tmargin: 1em auto;
\tpadding: 3em 2em;
\twidth: 99%;
\tfont-size: 1em;
\tline-height: 1.8;
\tcolor: rgba(49, 112, 143, 1);
\tbackground-color: rgba(227, 243, 243, 1);
\ttext-align: center;
\t-webkit-border-radius: 2px;
\t-moz-border-radius: 2px;
\tborder-radius: 2px
}

.gform_wrapper .form_saved_message form {
\ttext-align: center
}

.form_saved_message p.resume_form_link_wrapper {
\tbackground-color: rgba(255, 255, 255, 1);
\tdisplay: inline-block;
\tpadding: 1em;
\t-webkit-border-radius: 2px;
\t-moz-border-radius: 2px;
\tborder-radius: 2px;
\tmax-width: 98% !important;
\toverflow: hidden;
\t-webkit-box-shadow: 0 3px 2px 0 rgba(66, 103, 126, .2);
\t-moz-box-shadow: 0 3px 2px 0 rgba(66, 103, 126, .2);
\tbox-shadow: 0 3px 2px 0 rgba(66, 103, 126, .2)
}

.form_saved_message a.resume_form_link {
\tword-wrap: break-word;
\ttext-decoration: none;
\tcolor: rgba(47, 99, 126, 1)
}

.form_saved_message .form_saved_message_emailform {
\tmargin: 1em 0 0
}

.form_saved_message label.form_saved_label {
\tposition: absolute;
\tleft: -9000px
}

div.form_saved_message div.form_saved_message_emailform form input[type=text] {
\tmargin-bottom: .25em
}

div.form_saved_message div.form_saved_message_emailform form input {
\tmargin: .75em auto 0;
\tdisplay: inline-block
}

div.form_saved_message div.form_saved_message_emailform form input[type=email] {
\tpadding: calc(.75em - 1px) !important;
\twidth: 24em;
\tmax-width: 98% !important;
\tfont-size: 1em;
\tbackground-color: rgba(255, 255, 255, 1);
\tborder: 1px solid rgba(145, 175, 199, 1);
\tcolor: rgba(66, 66, 66, 1);
\t-webkit-border-radius: 2px;
\t-moz-border-radius: 2px;
\tborder-radius: 2px;
\t-webkit-appearance: none;
\t-moz-appearance: none;
\t-webkit-box-shadow: inset 0 0 5px 0 rgba(238, 238, 238, 1);
\t-moz-box-shadow: inset 0 0 5px 0 rgba(238, 238, 238, 1);
\tbox-shadow: inset 0 0 5px 0 rgba(238, 238, 238, 1)
}

div.form_saved_message div.form_saved_message_emailform form input[type=submit] {
\tpadding: .75em 1em;
\tfont-size: 1em;
\tline-height: 1;
\tbackground-color: rgba(145, 175, 199, 1);
\tborder: 1px solid rgba(145, 175, 199, 1);
\tcolor: rgba(255, 255, 25566, 1);
\ttext-transform: uppercase;
\t-webkit-border-radius: 2px;
\t-moz-border-radius: 2px;
\tborder-radius: 2px;
\t-webkit-appearance: none;
\t-moz-appearance: none
}

@media only screen and (max-width: 640px) {
\tdiv.form_saved_message div.form_saved_message_emailform form input[type=email], div.form_saved_message div.form_saved_message_emailform form input[type=submit] {
\t\tdisplay: block;
\t\twidth: 98%
\t}
}

.form_saved_message .form_saved_message_emailform .validation_message {
\tcolor: #790000;
\tfont-weight: 700;
\tpadding: 2em
}

.form_saved_message_sent {
\tmargin: 1em auto;
\tpadding: 3em 2em;
\twidth: 99%;
\tfont-size: 1em;
\tbackground-color: rgba(233, 255, 217, 1);
\tcolor: rgba(60, 118, 61, 1);
\ttext-align: center;
\t-webkit-border-radius: 2px;
\t-moz-border-radius: 2px;
\tborder-radius: 2px;
\tbox-sizing: border-box
}

.form_saved_message_sent .saved_message_email, .form_saved_message_sent .saved_message_success {
\tfont-weight: 700;
\tdisplay: block;
\tline-height: 2
}

.form_saved_message_sent .saved_message_email {
\tword-wrap: break-word;
\ttext-decoration: underline
}

body #content .entry-content .gform_wrapper form .gform_body .gform_fields .gfield .ginput_container #recaptcha_widget_div #recaptcha_area .recaptchatable tbody tr td .recaptcha_input_area, body .gform_wrapper form .gform_body .gform_fields .gfield .ginput_container #recaptcha_widget_div #recaptcha_area .recaptchatable tbody tr td .recaptcha_input_area {
\tline-height: 1 !important
}

body .gform_wrapper img.ui-datepicker-trigger {
\twidth: 17px !important;
\theight: 16px !important;
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block
}

body .gform_wrapper img.add_list_item, body .gform_wrapper img.delete_list_item {
\tdisplay: -moz-inline-stack;
\tdisplay: inline-block;
\tmargin-top: -2px
}

.gform_wrapper ul li.gfield.field_sublabel_above.field_description_below + li.gfield {
\tmargin-top: 16px
}

.gform_wrapper li.gfield ul.gfield_radio li input[type=radio] + input[type=text] {
\twidth: 45.25%
}

.gform_wrapper table.recaptchatable {
\ttable-layout: auto
}

.gform_wrapper ul.gform_fields:not(.top_label) div.ginput_container_captcha {
\tmargin-left: 29%
}

.gfield .wp-editor-container {
\tborder: 1px solid #ddd
}

.gfield .wp-switch-editor {
\tborder-color: #ddd
}

.gfield .html-active .switch-html, .gfield .tmce-active .switch-tmce {
\tborder-bottom-color: #f5f5f5
}

.gfield .mce-edit-area iframe {
\twidth: 99.9% !important;
\tmargin: 0 !important
}

body .gform_wrapper ul li.gfield {
\tmargin-top: 16px;
\tpadding-top: 0
}

body .gform_wrapper ul.gfields li.gfield label.gfield_label {
\tmargin-bottom: 0 !important;
\tpadding-bottom: 0 !important
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html {
\tline-height: inherit
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ul li, body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ul li {
\tlist-style-type: disc !important;
\tmargin: 0 0 8px;
\toverflow: visible;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ul, body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ul {
\tlist-style-type: disc !important;
\tmargin: 16px 0 16px 28px !important;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ol li, body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ol li {
\tlist-style-type: decimal !important;
\toverflow: visible;
\tmargin: 0 0 8px;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ol, body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ol {
\tlist-style-type: decimal !important;
\tmargin: 16px 0 18px 32px;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ol li ul, body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ol li ul li {
\tlist-style-type: disc !important;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html ol li ul {
\tmargin: 16px 0 16px 16px
}

body .gform_wrapper form div.gform_body ul.gform_fields li.gfield.gfield_html ol li ul li {
\tmargin: 0 0 8px
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html dl {
\tmargin: 0 0 18px;
\tpadding-left: 0
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html dl dt {
\tfont-weight: 700
}

body .gform_wrapper div.gform_body ul.gform_fields li.gfield.gfield_html dl dd {
\tmargin: 0 0 16px 18px
}

.gform_wrapper span.gf_clear_span {
\tdisplay: block;
\theight: 1px;
\toverflow: hidden;
\twidth: 100%;
\tfloat: none;
\tclear: both;
\tmargin-top: -1px
}

.gform_wrapper .chosen-container {
\tposition: relative;
\tdisplay: inline-block;
\tvertical-align: middle;
\tfont-size: 13px;
\t-webkit-user-select: none;
\t-moz-user-select: none;
\t-ms-user-select: none;
\tuser-select: none
}

.gform_wrapper .chosen-container * {
\t-webkit-box-sizing: border-box;
\tbox-sizing: border-box
}

.gform_wrapper .chosen-container .chosen-drop {
\tposition: absolute;
\ttop: 100%;
\tz-index: 1010;
\twidth: 100%;
\tborder: 1px solid #aaa;
\tborder-top: 0;
\tbackground: #fff;
\t-webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
\tbox-shadow: 0 4px 5px rgba(0, 0, 0, .15);
\tdisplay: none
}

.gform_wrapper .chosen-container.chosen-with-drop .chosen-drop {
\tdisplay: block
}

.gform_wrapper .chosen-container a {
\tcursor: pointer
}

.gform_wrapper .chosen-container .chosen-single .group-name, .gform_wrapper .chosen-container .search-choice .group-name {
\tmargin-right: 4px;
\toverflow: hidden;
\twhite-space: nowrap;
\ttext-overflow: ellipsis;
\tfont-weight: 400;
\tcolor: #999
}

.gform_wrapper .chosen-container .chosen-single .group-name:after, .gform_wrapper .chosen-container .search-choice .group-name:after {
\tcontent: ":";
\tpadding-left: 2px;
\tvertical-align: top
}

.gform_wrapper .chosen-container-single .chosen-single {
\tposition: relative;
\tdisplay: block;
\toverflow: hidden;
\tpadding: 0 0 0 8px;
\theight: 25px;
\tborder: 1px solid #aaa;
\tborder-radius: 5px;
\tbackground-color: #fff;
\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #fff), color-stop(50%, #f6f6f6), color-stop(52%, #eee), to(#f4f4f4));
\tbackground: linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%);
\tbackground-clip: padding-box;
\t-webkit-box-shadow: 0 0 3px #fff inset, 0 1px 1px rgba(0, 0, 0, .1);
\tbox-shadow: 0 0 3px #fff inset, 0 1px 1px rgba(0, 0, 0, .1);
\tcolor: #444;
\ttext-decoration: none;
\twhite-space: nowrap;
\tline-height: 24px
}

.gform_wrapper .chosen-container-single .chosen-single input[type=text] {
\tcursor: pointer;
\topacity: 0;
\tposition: absolute;
\twidth: 0
}

.gform_wrapper .chosen-container-single .chosen-default {
\tcolor: #999
}

.gform_wrapper .chosen-container-single .chosen-single span {
\tdisplay: block;
\toverflow: hidden;
\tmargin-right: 26px;
\ttext-overflow: ellipsis;
\twhite-space: nowrap
}

.gform_wrapper .chosen-container-single .chosen-single-with-deselect span {
\tmargin-right: 38px
}

.gform_wrapper .chosen-container-single .chosen-single abbr {
\tposition: absolute;
\ttop: 6px;
\tright: 26px;
\tdisplay: block;
\twidth: 12px;
\theight: 12px;
\tfont-size: 1px
}

.gform_wrapper .chosen-container-single .chosen-single abbr:hover, .gform_wrapper .chosen-container-single.chosen-disabled .chosen-single abbr:hover {
\tbackground-position: -42px -10px
}

.gform_wrapper .chosen-container-single .chosen-single div {
\tposition: absolute;
\ttop: 0;
\tright: 0;
\tdisplay: block;
\twidth: 18px;
\theight: 100%
}

.gform_wrapper .chosen-container-single .chosen-single div b {
\tdisplay: block;
\twidth: 100%;
\theight: 100%;
}

.gform_wrapper .chosen-container-single .chosen-search {
\tposition: relative;
\tz-index: 1010;
\tmargin: 0;
\tpadding: 3px 4px;
\twhite-space: nowrap
}

.gform_wrapper .chosen-container-single .chosen-search input[type=text] {
\tmargin: 1px 0;
\tpadding: 4px 20px 4px 5px;
\twidth: 100%;
\theight: auto;
\toutline: 0;
\tborder: 1px solid #aaa;
\tfont-size: 1em;
\tfont-family: sans-serif;
\tline-height: normal;
\tborder-radius: 0
}

.gform_wrapper .chosen-container-single .chosen-drop {
\tmargin-top: -1px;
\tborder-radius: 0 0 4px 4px;
\tbackground-clip: padding-box
}

.gform_wrapper .chosen-container-single.chosen-container-single-nosearch .chosen-search {
\tposition: absolute;
\topacity: 0;
\tpointer-events: none
}

.gform_wrapper .chosen-container .chosen-results {
\tcolor: #444;
\tposition: relative;
\toverflow-x: hidden;
\toverflow-y: auto;
\tmargin: 0 4px 4px 0;
\tpadding: 0 0 0 4px;
\tmax-height: 240px;
\t-webkit-overflow-scrolling: touch
}

.gform_wrapper .chosen-container .chosen-results li {
\tdisplay: none;
\tmargin: 0;
\tpadding: 5px 6px;
\tlist-style: none;
\tline-height: 15px;
\tword-wrap: break-word;
\t-webkit-touch-callout: none
}

.gform_wrapper .chosen-container .chosen-results li.active-result {
\tdisplay: list-item;
\tcursor: pointer
}

.gform_wrapper .chosen-container .chosen-results li.disabled-result {
\tdisplay: list-item;
\tcolor: #ccc;
\tcursor: default
}

.gform_wrapper .chosen-container .chosen-results li.highlighted {
\tbackground-color: #3875d7;
\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #3875d7), color-stop(90%, #2a62bc));
\tbackground-image: linear-gradient(#3875d7 20%, #2a62bc 90%);
\tcolor: #fff
}

.gform_wrapper .chosen-container .chosen-results li.no-results {
\tcolor: #777;
\tdisplay: list-item;
\tbackground: #f4f4f4
}

.gform_wrapper .chosen-container .chosen-results li.group-result {
\tdisplay: list-item;
\tfont-weight: 700;
\tcursor: default
}

.gform_wrapper .chosen-container .chosen-results li.group-option {
\tpadding-left: 15px
}

.gform_wrapper .chosen-container .chosen-results li em {
\tfont-style: normal;
\ttext-decoration: underline
}

.gform_wrapper .chosen-container-multi .chosen-choices {
\tposition: relative;
\toverflow: hidden;
\tmargin: 0;
\tpadding: 0 5px;
\twidth: 100%;
\theight: auto;
\tborder: 1px solid #aaa;
\tbackground-color: #fff;
\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #eee), color-stop(15%, #fff));
\tbackground-image: linear-gradient(#eee 1%, #fff 15%);
\tcursor: text
}

.gform_wrapper .chosen-container-multi .chosen-choices li {
\tfloat: left;
\tlist-style: none
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-field {
\tmargin: 0;
\tpadding: 0;
\twhite-space: nowrap
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-field input[type=text] {
\tmargin: 1px 0;
\tpadding: 0;
\theight: 25px;
\toutline: 0;
\tborder: 0 !important;
\tbackground: 0 0 !important;
\t-webkit-box-shadow: none;
\tbox-shadow: none;
\tcolor: #999;
\tfont-size: 100%;
\tfont-family: sans-serif;
\tline-height: normal;
\tborder-radius: 0;
\twidth: 25px
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice {
\tposition: relative;
\tmargin: 3px 5px 3px 0;
\tpadding: 3px 20px 3px 5px;
\tborder: 1px solid #aaa;
\tmax-width: 100%;
\tborder-radius: 3px;
\tbackground-color: #eee;
\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), to(#eee));
\tbackground-image: linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
\tbackground-size: 100% 19px;
\tbackground-repeat: repeat-x;
\tbackground-clip: padding-box;
\t-webkit-box-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, .05);
\tbox-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, .05);
\tcolor: #333;
\tline-height: 13px;
\tcursor: default
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice span {
\tword-wrap: break-word
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice .search-choice-close {
\tposition: absolute;
\ttop: 4px;
\tright: 3px;
\tdisplay: block;
\twidth: 12px;
\theight: 12px;
\tfont-size: 1px
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice .search-choice-close:hover {
\tbackground-position: -42px -10px
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice-disabled {
\tpadding-right: 5px;
\tborder: 1px solid #ccc;
\tbackground-color: #e4e4e4;
\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), to(#eee));
\tbackground-image: linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
\tcolor: #666
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice-focus {
\tbackground: #d4d4d4
}

.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice-focus .search-choice-close {
\tbackground-position: -42px -10px
}

.gform_wrapper .chosen-container-multi .chosen-results {
\tmargin: 0;
\tpadding: 0
}

.gform_wrapper .chosen-container-multi .chosen-drop .result-selected {
\tdisplay: list-item;
\tcolor: #ccc;
\tcursor: default
}

.gform_wrapper .chosen-container-active .chosen-single {
\tborder: 1px solid #5897fb;
\t-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
\tbox-shadow: 0 0 5px rgba(0, 0, 0, .3)
}

.gform_wrapper .chosen-container-active.chosen-with-drop .chosen-single {
\tborder: 1px solid #aaa;
\tborder-bottom-right-radius: 0;
\tborder-bottom-left-radius: 0;
\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #eee), color-stop(80%, #fff));
\tbackground-image: linear-gradient(#eee 20%, #fff 80%);
\t-webkit-box-shadow: 0 1px 0 #fff inset;
\tbox-shadow: 0 1px 0 #fff inset
}

.gform_wrapper .chosen-container-active.chosen-with-drop .chosen-single div {
\tborder-left: none;
\tbackground: 0 0
}

.gform_wrapper .chosen-container-active.chosen-with-drop .chosen-single div b {
\tbackground-position: -18px 2px
}

.gform_wrapper .chosen-container-active .chosen-choices {
\tborder: 1px solid #5897fb;
\t-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
\tbox-shadow: 0 0 5px rgba(0, 0, 0, .3)
}

.gform_wrapper .chosen-container-active .chosen-choices li.search-field input[type=text] {
\tcolor: #222 !important
}

.gform_wrapper .chosen-disabled {
\topacity: .5 !important;
\tcursor: default
}

.gform_wrapper .chosen-disabled .chosen-choices .search-choice .search-choice-close, .gform_wrapper .chosen-disabled .chosen-single {
\tcursor: default
}

.gform_wrapper .chosen-rtl {
\ttext-align: right
}

.gform_wrapper .chosen-rtl .chosen-single {
\toverflow: visible;
\tpadding: 0 8px 0 0
}

.gform_wrapper .chosen-rtl .chosen-single span {
\tmargin-right: 0;
\tmargin-left: 26px;
\tdirection: rtl
}

.gform_wrapper .chosen-rtl .chosen-single-with-deselect span {
\tmargin-left: 38px
}

.gform_wrapper .chosen-rtl .chosen-single div {
\tright: auto;
\tleft: 3px
}

.gform_wrapper .chosen-rtl .chosen-single abbr {
\tright: auto;
\tleft: 26px
}

.gform_wrapper .chosen-rtl .chosen-choices li {
\tfloat: right
}

.gform_wrapper .chosen-rtl .chosen-choices li.search-field input[type=text] {
\tdirection: rtl
}

.gform_wrapper .chosen-rtl .chosen-choices li.search-choice {
\tmargin: 3px 5px 3px 0;
\tpadding: 3px 5px 3px 19px
}

.gform_wrapper .chosen-rtl .chosen-choices li.search-choice .search-choice-close {
\tright: auto;
\tleft: 4px
}

.gform_wrapper .chosen-rtl.chosen-container-single .chosen-results {
\tmargin: 0 0 4px 4px;
\tpadding: 0 4px 0 0
}

.gform_wrapper .chosen-rtl .chosen-results li.group-option {
\tpadding-right: 15px;
\tpadding-left: 0
}

.gform_wrapper .chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div {
\tborder-right: none
}

.gform_wrapper .chosen-rtl .chosen-search input[type=text] {
\tpadding: 4px 5px 4px 20px;
\tdirection: rtl
}

.gform_wrapper .chosen-rtl.chosen-container-single .chosen-single div b {
\tbackground-position: 6px 2px
}

.gform_wrapper .chosen-rtl.chosen-container-single.chosen-with-drop .chosen-single div b {
\tbackground-position: -12px 2px
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 144dpi), only screen and (min-resolution: 1.5dppx) {
\t.gform_wrapper .chosen-container .chosen-results-scroll-down span, .gform_wrapper .chosen-container .chosen-results-scroll-up span, .gform_wrapper .chosen-container-multi .chosen-choices .search-choice .search-choice-close, .gform_wrapper .chosen-container-single .chosen-search input[type=text], .gform_wrapper .chosen-container-single .chosen-single abbr, .gform_wrapper .chosen-container-single .chosen-single div b, .gform_wrapper .chosen-rtl .chosen-search input[type=text] {
\t\tbackground-size: 52px 37px !important;
\t\tbackground-repeat: no-repeat !important
\t}
}

body .gform_wrapper .chosen-container a.chosen-single {
\tborder-radius: inherit
}

body .gform_wrapper ul.chosen-results li {
\tline-height: inherit
}

@media only screen and (max-width: 641px) {
\t.gform_wrapper .chosen-container.chosen-container-single[style], .gform_wrapper div.chosen-container.chosen-container-multi[style] {
\t\twidth: 100% !important
\t}

\t.gform_wrapper input:not([type=radio]):not([type=checkbox]):not([type=image]):not([type=file]) {
\t\tline-height: 2;
\t\tmin-height: 2rem
\t}

\t.gform_wrapper textarea {
\t\tline-height: 1.5
\t}

\t.gform_wrapper .chosen-container-single .chosen-single {
\t\theight: 40px;
\t\tline-height: 2.8
\t}

\t.gform_wrapper .chosen-container-single .chosen-single div b {
\t\tposition: relative;
\t\ttop: 10px
\t}

\t.gform_wrapper .chosen-container.chosen-container-multi ul.chosen-choices li.search-choice, .gform_wrapper .chosen-container.chosen-container-multi ul.chosen-choices li.search-field {
\t\twidth: 100%;
\t\tline-height: inherit;
\t\tfloat: none
\t}

\t.gform_wrapper .chosen-container.chosen-container-multi ul.chosen-choices li.search-choice span {
\t\tmargin-bottom: 0
\t}

\t.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice .search-choice-close {
\t\ttop: calc(50% - 6px)
\t}

\t.gform_wrapper .ginput_container span:not(.ginput_price) {
\t\tmargin-bottom: 8px;
\t\tdisplay: block
\t}

\t.gform_wrapper li.field_sublabel_below .ginput_complex {
\t\tmargin-top: 12px !important
\t}

\t.gform_wrapper ul.gfield_checkbox li label, .gform_wrapper ul.gfield_radio li label {
\t\twidth: 85%;
\t\tcursor: pointer
\t}
}

@media only screen and (max-width: 761px),(min-device-width: 768px) and (max-device-width: 1023px) {
\t.gform_wrapper ul.gform_fields li.gfield.gfield_error + li.gfield.gfield_error {
\t\tmargin-top: 32px
\t}

\t.gform_wrapper table.gfield_list {
\t\tborder: 0
\t}

\t.gform_wrapper table.gfield_list thead {
\t\tposition: absolute;
\t\ttop: -9999px;
\t\tleft: -9999px
\t}

\t.gform_wrapper table.gfield_list tr {
\t\tmargin-bottom: 10px;
\t\tdisplay: block;
\t\tbackground: #fff;
\t\tposition: relative;
\t\tborder: 1px solid #CCC;
\t\tborder-top: 2px solid #CCC;
\t\tborder-bottom: 4px solid #CCC
\t}

\t.gform_wrapper table.gfield_list td {
\t\tdisplay: block;
\t\tmargin-left: 8px;
\t\tmargin-right: 8px
\t}

\t.gform_wrapper table.gfield_list td.gfield_list_icons {
\t\tborder-bottom: 0;
\t\tmargin: 16px 0 0 !important
\t}

\t.gform_wrapper ul.gform_fields.form_sublabel_above table.gfield_list td:before, .gform_wrapper ul.gform_fields.form_sublabel_below table.gfield_list td:after {
\t\tcontent: attr(data-label);
\t\tfont-size: .875em;
\t\tletter-spacing: .5pt;
\t\twhite-space: nowrap;
\t\tdisplay: block;
\t\tclear: both
\t}

\t.gform_wrapper ul.gform_fields.form_sublabel_above table.gfield_list td:before {
\t\tmargin: 8px 0 3px 8px
\t}

\t.gform_wrapper ul.gform_fields.form_sublabel_below table.gfield_list td:after {
\t\tmargin: 3px 0 8px 8px
\t}

\t.gform_wrapper table.gfield_list td + td, .gform_wrapper table.gfield_list th + th {
\t\tpadding: 4px 0 0
\t}

\t.gform_wrapper table.gfield_list tr.gfield_list_row_even, .gform_wrapper table.gfield_list tr.gfield_list_row_odd {
\t\tmargin: 16px 0
\t}

\t.gform_wrapper table.gfield_list tr, .gform_wrapper table.gfield_list tr.gfield_list_row_odd:first-child {
\t\tpadding-top: 12px
\t}

\t.gform_wrapper table.gfield_list tr td.gfield_list_icons {
\t\twidth: 100% !important;
\t\tpadding: 0 4px 4px !important;
\t\tbackground-color: #EEE
\t}

\t.gform_wrapper table.gfield_list tr td.gfield_list_icons img.add_list_item {
\t\tmargin: 12px 0 0 16px !important
\t}

\t.gform_wrapper table.gfield_list tr td.gfield_list_icons img.delete_list_item {
\t\tmargin: 12px 0 0 8px !important
\t}

\t.gform_wrapper .gform_footer a.gform_save_link, .gform_wrapper .gform_page_footer a.gform_save_link {
\t\tmargin-left: 0
\t}

\t.gform_wrapper .gfield_list td.gfield_list_cell input {
\t\twidth: calc(100% - 16px);
\t\tmargin-left: 8px;
\t\tmargin-right: 8px
\t}
}

@media only screen and (min-width: 641px) {
\t.gform_wrapper .gform_body {
\t\twidth: 100%
\t}

\t.gform_wrapper.gform_validation_error .gform_body ul li.gfield.gfield_error:not(.gf_left_half):not(.gf_right_half) {
\t\tmax-width: calc(100% - 16px) !important
\t}

\t.gform_wrapper .gfield_checkbox li, .gform_wrapper .gfield_radio li {
\t\tmargin: 0 0 8px;
\t\tline-height: 1.3
\t}

\t.gform_wrapper .gsection {
\t\tmargin: 28px 16px 28px 0
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) .gfield_label {
\t\tfloat: left;
\t\twidth: 29%;
\t\tpadding-right: 16px;
\t\tmargin-bottom: 16px
\t}

\t.gform_wrapper .right_label .gfield_label {
\t\ttext-align: right
\t}

\t.gform_wrapper .left_label .gfield_description, .gform_wrapper .right_label .gfield_description {
\t\twidth: 70%
\t}

\t.gform_wrapper form ul.left_label li ul.gfield_checkbox li, .gform_wrapper form ul.left_label li ul.gfield_radio li, .gform_wrapper form ul.right_label li ul.gfield_checkbox li, .gform_wrapper form ul.right_label li ul.gfield_radio li, .gform_wrapper ul.left_label li ul.gfield_checkbox li, .gform_wrapper ul.left_label li ul.gfield_radio li, .gform_wrapper ul.right_label li ul.gfield_checkbox li, .gform_wrapper ul.right_label li ul.gfield_radio li {
\t\tmargin-bottom: 10px
\t}

\t.gform_wrapper .left_label .gfield_description, .gform_wrapper .left_label .instruction, .gform_wrapper .right_label .gfield_description, .gform_wrapper .right_label .instruction {
\t\tmargin-left: 29%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) .gsection .gsection_description {
\t\tmargin-left: 0;
\t\tpadding-top: 4px;
\t\tpadding-left: 0;
\t\tline-height: 1.5
\t}

\t.gform_wrapper form ul.gform_fields:not(.top_label) li.gfield_html_formatted {
\t\tmargin-left: 29% !important;
\t\twidth: 70%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) ul.gfield_checkbox, .gform_wrapper ul.gform_fields:not(.top_label) ul.gfield_radio {
\t\toverflow: hidden
\t}

\t.gform_wrapper .left_label div.ginput_complex, .gform_wrapper .right_label div.ginput_complex {
\t\twidth: 70%;
\t\tmargin-left: 29%
\t}

\t.gform_wrapper .left_label input.small, .gform_wrapper .left_label select.small, .gform_wrapper .right_label input.small, .gform_wrapper .right_label select.small {
\t\twidth: 15%
\t}

\t.gform_wrapper .left_label input.medium, .gform_wrapper .left_label select.medium, .gform_wrapper .right_label input.medium, .gform_wrapper .right_label select.medium {
\t\twidth: calc(35% - 8px)
\t}

\t.gform_wrapper .left_label input.large, .gform_wrapper .left_label select.large, .gform_wrapper .left_label textarea.large, .gform_wrapper .left_label textarea.medium, .gform_wrapper .left_label textarea.small, .gform_wrapper .right_label input.large, .gform_wrapper .right_label select.large, .gform_wrapper .right_label textarea.large, .gform_wrapper .right_label textarea.medium, .gform_wrapper .right_label textarea.small {
\t\twidth: 70%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) .ginput_list {
\t\twidth: 70%;
\t\tmargin-left: 29% !important
\t}

\t.gform_wrapper .top_label .gfield_list {
\t\twidth: 100%
\t}

\t.gform_wrapper .left_label .gf_list_one_column, .gform_wrapper .right_label .gf_list_one_column {
\t\twidth: 45%
\t}

\t.gform_wrapper .top_label .gf_list_one_column {
\t\twidth: 46%
\t}

\t.gform_wrapper .left_label li.hidden_label input, .gform_wrapper .right_label li.hidden_label input {
\t\tmargin-left: 3.7%
\t}

\t.gform_wrapper .left_label li.gfield .gfield_password_strength, .gform_wrapper .right_label li.gfield .gfield_password_strength {
\t\tmargin-left: 29%
\t}

\t.gform_wrapper .top_label input.small, .gform_wrapper .top_label select.small {
\t\twidth: 25%
\t}

\t.gform_wrapper .top_label input.medium, .gform_wrapper .top_label select.medium {
\t\twidth: calc(50% - 8px)
\t}

\t.gform_wrapper.gform_validation_error .top_label input.medium, .gform_wrapper.gform_validation_error .top_label select.medium {
\t\twidth: 50%
\t}

\t.gform_wrapper .hidden_label input.large, .gform_wrapper .hidden_label select.large, .gform_wrapper .top_label input.large, .gform_wrapper .top_label select.large {
\t\twidth: 100%
\t}

\t.gform_wrapper .top_label input.large.datepicker, .gform_wrapper .top_label input.medium.datepicker, .gform_wrapper .top_label input.small.datepicker {
\t\twidth: auto
\t}

\t.gform_wrapper textarea.small {
\t\theight: 80px;
\t\twidth: 100%
\t}

\t.gform_wrapper textarea.medium {
\t\theight: 160px;
\t\twidth: 100%
\t}

\t.gform_wrapper textarea.large {
\t\theight: 320px;
\t\twidth: 100%
\t}

\t.gform_wrapper .gfield_error .ginput_complex .ginput_left, .gform_wrapper .gfield_error .ginput_complex .ginput_right, .gform_wrapper .ginput_complex .ginput_cardinfo_left {
\t\twidth: 50%
\t}

\t.gform_wrapper .ginput_complex .ginput_left, .gform_wrapper .ginput_complex .ginput_right {
\t\twidth: 50%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tvertical-align: top;
\t\tmargin: 0 -4px 0 0
\t}

\t.gform_wrapper .ginput_container_password .ginput_right {
\t\tpadding-left: 8px
\t}

\t.gform_wrapper .ginput_complex .ginput_cardinfo_left, .gform_wrapper .ginput_complex .ginput_cardinfo_right {
\t\tmin-height: 43px;
\t\tposition: relative;
\t\tfloat: left
\t}

\t.gform_wrapper .ginput_complex select.ginput_card_expiration.ginput_card_expiration_month, .gform_wrapper .ginput_complex select.ginput_card_expiration.ginput_card_expiration_year {
\t\twidth: 47% !important;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block
\t}

\t.gform_wrapper .ginput_complex .ginput_cardinfo_left select.ginput_card_expiration.ginput_card_expiration_month {
\t\tmargin-right: 4px
\t}

\t.gform_wrapper .gf_step {
\t\twidth: auto;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tmargin: 16px 32px 16px 0
\t}

\t.gform_wrapper .gform_footer input.button, .gform_wrapper .gform_footer input[type=image], .gform_wrapper .gform_footer input[type=submit] {
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block
\t}

\t.gform_wrapper .gform_footer input[type=image] {
\t\tvertical-align: middle
\t}

\t.gform_wrapper .gform_footer a.gform_save_link, .gform_wrapper .gform_page_footer a.gform_save_link {
\t\tfont-size: 1em;
\t\tmargin-left: 16px;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block
\t}

\t.gform_wrapper .gform_footer input.button, .gform_wrapper .gform_footer input[type=submit], .gform_wrapper .gform_page_footer input.button, .gform_wrapper .gform_page_footer input[type=submit] {
\t\tfont-size: 1em;
\t\twidth: auto;
\t\tmargin: 0 16px 0 0
\t}

\t.gform_wrapper ul.gform_fields li.gfield {
\t\tpadding-right: 16px
\t}

\t.gform_wrapper .ginput_complex .ginput_left {
\t\tpadding-right: 8px
\t}

\t.gform_wrapper .left_label .ginput_complex.ginput_container_address:after {
\t\tcontent: "";
\t\tdisplay: block
\t}

\t.gform_wrapper .ginput_complex.ginput_container_address .ginput_left {
\t\tmargin-right: 8px
\t}

\t.gform_wrapper .ginput_complex.ginput_container_address .ginput_right {
\t\tmargin-right: -8px;
\t\tpadding-right: 8px
\t}

\t.gform_wrapper .ginput_complex.ginput_container_address span.ginput_full + span.ginput_right {
\t\tpadding-right: 8px !important;
\t\tmargin-right: 8px
\t}

\t.gform_wrapper .ginput_complex.ginput_container_address span.ginput_right + span.ginput_left {
\t\tpadding-right: 8px !important;
\t\tmargin-right: -8px
\t}

\t.gform_wrapper .ginput_complex.ginput_container_address span.ginput_right + span.ginput_left.address_zip {
\t\tmargin-right: 8px
\t}

\t.gform_wrapper .gfield_error .ginput_container {
\t\tpadding-right: 0
\t}

\t.gform_wrapper ul.top_label li.gfield.gfield_error.gfield_contains_required .gfield_password_strength {
\t\tmargin: 18px 0
\t}

\t.gform_wrapper .gform_footer:not(.top_label) {
\t\tpadding: 16px 0 10px;
\t\tmargin-left: 29%;
\t\twidth: 70%
\t}

\t.top_label div.ginput_complex.ginput_container.gf_name_has_1, .top_label div.ginput_complex.ginput_container.gf_name_has_2, .top_label div.ginput_complex.ginput_container.gf_name_has_3 {
\t\twidth: calc(100% + 15px)
\t}

\t.top_label div.ginput_complex.ginput_container.gf_name_has_4 {
\t\twidth: calc(100% + 13px)
\t}

\t.top_label div.ginput_complex.ginput_container.gf_name_has_5 {
\t\twidth: calc(100% + 14px)
\t}

\tul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.gf_name_has_1, ul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.gf_name_has_2, ul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.gf_name_has_3 {
\t\twidth: calc(70% + 15px);
\t\tmargin-left: 29%
\t}

\tul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_1, ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_2, ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_3 {
\t\twidth: calc(70% + 24px)
\t}

\tul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.gf_name_has_4 {
\t\twidth: calc(70% + 13px);
\t\tmargin-left: 29%
\t}

\tul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.gf_name_has_5 {
\t\twidth: calc(70% + 14px);
\t\tmargin-left: 29%
\t}

\tdiv.ginput_container_name span {
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tvertical-align: top;
\t\tpadding-right: 16px;
\t\tmargin-right: -4px
\t}

\tdiv.ginput_complex.ginput_container.gf_name_has_1 span {
\t\twidth: 100%
\t}

\tdiv.ginput_complex.ginput_container.gf_name_has_2 span {
\t\twidth: 50%
\t}

\tdiv.ginput_complex.ginput_container.gf_name_has_3 span {
\t\twidth: 33.3%
\t}

\tdiv.ginput_complex.ginput_container.gf_name_has_4 span {
\t\twidth: 25%
\t}

\tdiv.ginput_complex.ginput_container.gf_name_has_5 span {
\t\twidth: 19.95%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_1 span {
\t\twidth: 99.75% !important
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_2 span {
\t\twidth: 49.75% !important
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_3 span {
\t\twidth: 33% !important
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_4 span {
\t\twidth: 24.75% !important
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.gf_name_has_5 span {
\t\twidth: 19.75% !important
\t}

\thtml div.ginput_complex.ginput_container.gf_name_has_2 span:first-child, html div.ginput_complex.ginput_container.gf_name_has_3 span:first-child, html div.ginput_complex.ginput_container.gf_name_has_4 span:first-child, html div.ginput_complex.ginput_container.gf_name_has_5 span:first-child {
\t\tmargin-left: 0 !important
\t}

\t.gform_wrapper .top_label .ginput_complex.ginput_container.ginput_container_email {
\t\twidth: calc(100% + 15px)
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.ginput_container_email {
\t\twidth: calc(70% + 16px);
\t\tmargin-left: 29%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error div.ginput_complex.ginput_container.ginput_container_email {
\t\twidth: calc(70% + 17px)
\t}

\tli.gfield.gfield_error .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gfield_error .ginput_complex.ginput_container.ginput_container_email {
\t\twidth: calc(70% + 8px) !important
\t}

\t.gform_wrapper .ginput_complex.ginput_container.ginput_container_email .ginput_left, .gform_wrapper .ginput_complex.ginput_container.ginput_container_email .ginput_right {
\t\tpadding-right: 16px
\t}

\t.gform_wrapper ul.left_label li.gfield .gfield_password_strength, .gform_wrapper ul.right_label li.gfield .gfield_password_strength {
\t\twidth: 70%
\t}

\t.gform_wrapper .ginput_complex span.ginput_left + input.gform_hidden + span.ginput_left {
\t\tpadding-right: 0
\t}

\t.gform_wrapper .ginput_complex span.ginput_left.address_country {
\t\tmargin-right: 0
\t}

\thtml:not([dir=rtl]) .gform_wrapper ul.gform_fields:not(.top_label) .clear-multi, html:not([dir=rtl]) .gform_wrapper ul.gform_fields:not(.top_label) .gfield_description, html:not([dir=rtl]) .gform_wrapper ul.gform_fields:not(.top_label) .ginput_container:not(.ginput_container_time):not(.ginput_container_date) {
\t\twidth: 70%;
\t\tmargin-left: 29%
\t}

\t.gform_wrapper .gf_progressbar {
\t\twidth: calc(100% - 16px)
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) .gform_fileupload_multifile .gform_drop_area {
\t\tmargin-left: 29%;
\t\twidth: 70%
\t}

\tbody .gform_wrapper span.ginput_left.address_city + input.gform_hidden + span.ginput_left.address_country {
\t\twidth: calc(50% - 8px);
\t\tmargin-right: 0
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) .ginput_container.ginput_recaptcha {
\t\tmargin-left: 29% !important
\t}

\t.gform_wrapper .gform_page_footer .button.gform_previous_button {
\t\tmargin-bottom: 0
\t}

\t.gform_wrapper .gform_page_footer .button.gform_button, .gform_wrapper .gform_page_footer .button.gform_next_button {
\t\tmargin-right: 10px
\t}

\tbody .gform_wrapper select.medium.gfield_select + div.chosen-container-multi[style], body .gform_wrapper select.medium.gfield_select + div.chosen-container-single[style] {
\t\twidth: calc(50% - 8px) !important
\t}

\tbody .gform_wrapper select.large.gfield_select + div.chosen-container-multi[style], body .gform_wrapper select.large.gfield_select + div.chosen-container-single[style] {
\t\twidth: 100% !important
\t}

\tbody .gform_wrapper select.small.gfield_select + div.chosen-container-multi[style], body .gform_wrapper select.small.gfield_select + div.chosen-container-single[style] {
\t\twidth: 25% !important
\t}
}

.gfield_repeater_cell > .gfield_repeater_wrapper {
\tbackground-color: rgba(1, 1, 1, .02);
\tpadding: 10px 20px;
\tborder-radius: 8px;
\tborder-bottom: 1px solid rgba(238, 238, 238, 1)
}

.gfield_repeater_wrapper input {
\tborder: 1px solid rgba(197, 198, 197, 1);
\tborder-radius: 4px
}

.gfield_repeater_wrapper .gfield_repeater_wrapper {
\tmargin-top: 10px
}

.gfield_repeater_buttons .add_repeater_item_text, .gfield_repeater_buttons .remove_repeater_item_text {
\tmin-width: 100px;
\theight: 30px;
\tbackground: rgba(242, 242, 242, .5);
\ttransition: all .3s cubic-bezier(.67, .17, .4, .83);
\tfont-size: 12px;
\tcolor: rgba(117, 117, 117, 1);
\tborder-radius: 20px;
\tmargin-right: 10px;
\tmargin-bottom: 5px;
\tborder: 1px solid rgba(117, 117, 117, .4);
\tfont-weight: 400
}

.gfield_repeater_buttons .add_repeater_item_plus, .gfield_repeater_buttons .remove_repeater_item_minus {
\twidth: 22px;
\theight: 22px;
\tbackground: rgba(242, 242, 242, .5);
\ttransition: all .3s cubic-bezier(.67, .17, .4, .83);
\tfont-size: 16px;
\tcolor: rgba(117, 117, 117, 1);
\tborder-radius: 50%;
\tmargin: 10px 5px 0;
\tborder: 1px solid rgba(117, 117, 117, .4);
\tfont-weight: 700;
\tpadding: 0 0 5px
}

.gfield_repeater_buttons button.gfield_icon_disabled {
\tcursor: default;
\tfilter: alpha(opacity=30);
\t-moz-opacity: .3;
\t-khtml-opacity: .3;
\topacity: .3
}

.gfield_repeater_buttons button.gfield_icon_disabled:hover {
\tbackground: rgba(242, 242, 242, .5);
\tcolor: rgba(117, 117, 117, 1);
\tborder: 1px solid rgba(117, 117, 117, .4)
}

.gfield_repeater_buttons button:hover {
\tbackground: rgba(250, 250, 250, 1);
\tcolor: #374750;
\tborder: 1px solid rgba(117, 117, 117, 1)
}

.gfield_repeater_cell > .gfield_repeater_wrapper {
\tborder-left: 8px solid rgba(241, 241, 241, 1);
\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 1px -1px rgba(0, 0, 0, .06), 0 1px 5px 0 rgba(0, 0, 0, .06)
}

.gfield_repeater_buttons .add_repeater_item_text:focus, .gfield_repeater_buttons .remove_repeater_item_text:focus {
\toutline: 0
}

.gfield_repeater_item .gfield_repeater_cell .gfield_required {
\tcolor: #c32121
}

.gform_wrapper .gfield_repeater_cell label {
\tcolor: #9b9a9a;
\tfont-weight: 400;
\tfont-size: 14px;
\tpadding-top: 8px
}

.gfield_repeater_value .gfield_repeater_value .gfield_repeater_cell {
\tpadding-bottom: 20px;
\tpadding-top: 0
}

div .gfield_repeater_cell {
\tmargin-top: 5px
}

.gfield_repeater .gfield_repeater_items .gfield_repeater_item:not(:last-child) {
\tborder-bottom: 2px solid #e0e0e6;
\tpadding-bottom: 20px;
\tmargin-bottom: 20px;
\tmargin-right: 10px
}

.gfield_repeater_value > .gfield_repeater {
\tborder-left: 8px solid rgba(54, 86, 102, .1);
\tbackground-color: rgba(1, 1, 1, .02);
\tpadding: 10px 20px;
\tborder-radius: 8px;
\tborder-bottom: 1px solid rgba(238, 238, 238, 1);
\tmargin: 10px
}

.gfield_repeater_cell .gfield_repeater_value:not(:first-child) {
\tcolor: rgba(117, 117, 117, .7);
\tborder: 1px solid rgba(197, 198, 197, 1);
\tborder-radius: 4px;
\tmargin-right: 10px;
\tpadding-left: 10px;
\tbackground-color: rgba(240, 240, 240, 1)
}

.gfield_repeater .gfield_repeater_items, .gfield_repeater_items .gfield_repeater_cell:not(:first-child) {
\tpadding-top: 5px
}

.gfield_repeater .gfield_label {
\tcolor: rgba(35, 40, 45, 1);
\tfont-size: 16px;
\tfont-weight: 600
}

.gfield_repeater_value .gfield_label, .gfield_repeater_value .gfield_repeater_value .gfield_repeater_item:first-child {
\tpadding-bottom: 0
}

@media only screen and (min-width: 641px) {
\t.gform_wrapper .top_label li.gfield.gf_inline {
\t\tvertical-align: top;
\t\twidth: auto !important;
\t\tmargin: 0;
\t\tpadding-right: 16px;
\t\tfloat: none !important;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline input[type=email].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=email].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=email].small, .gform_wrapper .top_label li.gfield.gf_inline input[type=number].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=number].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=number].small, .gform_wrapper .top_label li.gfield.gf_inline input[type=password].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=password].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=password].small, .gform_wrapper .top_label li.gfield.gf_inline input[type=tel].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=tel].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=tel].small, .gform_wrapper .top_label li.gfield.gf_inline input[type=text].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=text].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=text].small, .gform_wrapper .top_label li.gfield.gf_inline input[type=url].large, .gform_wrapper .top_label li.gfield.gf_inline input[type=url].medium, .gform_wrapper .top_label li.gfield.gf_inline input[type=url].small {
\t\twidth: 100%
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline input[type=text].datepicker.medium {
\t\twidth: 96px !important
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline select, .gform_wrapper .top_label li.gfield.gf_inline textarea {
\t\twidth: 100%
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline div.gfield_time_hour input[type=text], .gform_wrapper .top_label li.gfield.gf_inline div.gfield_time_minute input[type=text] {
\t\twidth: 70% !important
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline div.gfield_date_day, .gform_wrapper .top_label li.gfield.gf_inline div.gfield_date_month, .gform_wrapper .top_label li.gfield.gf_inline div.gfield_date_year, .gform_wrapper .top_label li.gfield.gf_inline div.gfield_time_hour, .gform_wrapper .top_label li.gfield.gf_inline div.gfield_time_minute {
\t\twidth: 50px
\t}

\t.gform_wrapper .top_label li.gfield.gf_inline div.gfield_time_ampm {
\t\twidth: auto
\t}

\t.gform_wrapper li.gf_inline div.ginput_container {
\t\twhite-space: nowrap !important
\t}

\t.gform_wrapper li.gf_inline div.ginput_container.ginput_container_date label {
\t\tdisplay: block !important
\t}

\t.gform_wrapper li.gfield.gfield_error.gf_inline {
\t\tmargin-right: 16px;
\t\tpadding-right: 0
\t}


\t.gform_wrapper .top_label li.gfield.gf_left_half .ginput_container:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm):not(.ginput_container_date):not(.ginput_quantity):not(.datepicker), .gform_wrapper .top_label li.gfield.gf_right_half .ginput_container:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm):not(.ginput_container_date):not(.ginput_quantity):not(.datepicker) {
\t\twidth: 100% !important;
\t\tmargin: 8px 0 0;
\t\tpadding-left: 0;
\t\tpadding-right: 0
\t}


\t.gform_wrapper.gform_validation_error .top_label li.gfield.gfield_error.gf_left_half, .gform_wrapper.gform_validation_error .top_label li.gfield.gfield_error.gf_right_half {
\t\tmax-width: calc(50% - 16px);
\t\tpadding-right: 0
\t}

\t.gform_wrapper .top_label li.gfield.gfield_error.gf_left_half {
\t\tmargin-right: 16px
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_half div:not(.ginput_container_date) input.large, .gform_wrapper .top_label li.gfield.gf_left_half div:not(.ginput_container_date) input.medium, .gform_wrapper .top_label li.gfield.gf_left_half div:not(.ginput_container_date) select.large, .gform_wrapper .top_label li.gfield.gf_left_half div:not(.ginput_container_date) select.medium, .gform_wrapper .top_label li.gfield.gf_right_half div:not(.ginput_container_date) input.large, .gform_wrapper .top_label li.gfield.gf_right_half div:not(.ginput_container_date) input.medium, .gform_wrapper .top_label li.gfield.gf_right_half div:not(.ginput_container_date) select.large, .gform_wrapper .top_label li.gfield.gf_right_half div:not(.ginput_container_date) select.medium {
\t\twidth: 100%
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_half textarea, .gform_wrapper .top_label li.gfield.gf_right_half textarea {
\t\twidth: 98%
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_half input.small, .gform_wrapper .top_label li.gfield.gf_right_half input.small {
\t\twidth: 35%
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_half + li.gfield.gsection.gf_left_half, .gform_wrapper .top_label li.gfield.gf_left_half + li.gfield.gsection.gf_right_half, .gform_wrapper .top_label li.gfield.gf_left_half + li.gsection, .gform_wrapper .top_label li.gfield.gf_right_half + li.gfield.gsection.gf_left_half, .gform_wrapper .top_label li.gfield.gf_right_half + li.gfield.gsection.gf_right_half, .gform_wrapper .top_label li.gfield.gf_right_half + li.gsection, .gform_wrapper .top_label li.gfield.gsection.gf_left_half + li.gfield.gsection.gf_left_half, .gform_wrapper .top_label li.gfield.gsection.gf_right_half + li.gfield.gsection.gf_left_half, .gform_wrapper .top_label li.gfield.gsection.gf_right_half + li.gfield.gsection.gf_right_half {
\t\tpadding: 16px 0 8px
\t}

\t.gform_wrapper .top_label li.gfield.gsection.gf_left_half + li.gfield.gsection.gf_right_half {
\t\tpadding: 0 0 8px
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter + li.gsection, .gform_wrapper .top_label li.gfield.gf_fourth_quarter + li.gsection, .gform_wrapper .top_label li.gfield.gf_left_third + li.gsection, .gform_wrapper .top_label li.gfield.gf_right_third + li.gsection, .gform_wrapper .top_label li.gfield.gsection.gf_left_half + li.gfield.gsection.gf_right_half + li.gfield.gsection.gf_left_half + li.gfield.gsection.gf_right_half {
\t\tpadding: 16px 0 8px
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_half + .gform_footer, .gform_wrapper .top_label li.gfield.gf_left_half + li.gfield, .gform_wrapper .top_label li.gfield.gf_right_half + .gform_footer, .gform_wrapper .top_label li.gfield.gf_right_half + li.gfield {
\t\tclear: both
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_third, .gform_wrapper .top_label li.gfield.gf_middle_third, .gform_wrapper .top_label li.gfield.gf_right_third {
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tvertical-align: top;
\t\tfloat: none;
\t\tmargin-bottom: 8px
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_third:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm), .gform_wrapper .top_label li.gfield.gf_middle_third:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm) {
\t\twidth: 33.3%
\t}

\t.gform_wrapper .top_label li.gfield.gf_right_third:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm) {
\t\twidth: 33.4%
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_third div:not(.ginput_container_date) input.large, .gform_wrapper .top_label li.gfield.gf_left_third div:not(.ginput_container_date) input.medium, .gform_wrapper .top_label li.gfield.gf_left_third div:not(.ginput_container_date) select.large, .gform_wrapper .top_label li.gfield.gf_left_third div:not(.ginput_container_date) select.medium, .gform_wrapper .top_label li.gfield.gf_middle_third div:not(.ginput_container_date) input.large, .gform_wrapper .top_label li.gfield.gf_middle_third div:not(.ginput_container_date) input.medium, .gform_wrapper .top_label li.gfield.gf_middle_third div:not(.ginput_container_date) select.large, .gform_wrapper .top_label li.gfield.gf_middle_third div:not(.ginput_container_date) select.medium, .gform_wrapper .top_label li.gfield.gf_right_third div:not(.ginput_container_date) input.large, .gform_wrapper .top_label li.gfield.gf_right_third div:not(.ginput_container_date) input.medium, .gform_wrapper .top_label li.gfield.gf_right_third div:not(.ginput_container_date) select.large, .gform_wrapper .top_label li.gfield.gf_right_third div:not(.ginput_container_date) select.medium {
\t\twidth: 100%
\t}




\t.gform_wrapper .top_label li.gfield.gf_right_third:after {
\t\tcontent: "";
\t\tdisplay: table;
\t\tclear: both
\t}

\t.gform_wrapper .top_label li.gfield.gf_left_third + .gform_footer, .gform_wrapper .top_label li.gfield.gf_left_third + li.gfield, .gform_wrapper .top_label li.gfield.gf_middle_third + .gform_footer, .gform_wrapper .top_label li.gfield.gf_middle_third + li.gfield, .gform_wrapper .top_label li.gfield.gf_right_third + .gform_footer, .gform_wrapper .top_label li.gfield.gf_right_third + li.gfield {
\t\tclear: both
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm), .gform_wrapper .top_label li.gfield.gf_fourth_quarter:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm), .gform_wrapper .top_label li.gfield.gf_second_quarter:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm), .gform_wrapper .top_label li.gfield.gf_third_quarter:not(.gfield_time_hour):not(.gfield_time_minute):not(.gfield_time_ampm) {
\t\twidth: 25%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tvertical-align: top;
\t\tfloat: none
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter, .gform_wrapper .top_label li.gfield.gf_fourth_quarter, .gform_wrapper .top_label li.gfield.gf_second_quarter, .gform_wrapper .top_label li.gfield.gf_third_quarter {
\t\tmargin-bottom: 8px
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter div:not(.ginput_container_date) input:not([type=radio]):not([type=checkbox]), .gform_wrapper .top_label li.gfield.gf_first_quarter div:not(.ginput_container_date) select, .gform_wrapper .top_label li.gfield.gf_fourth_quarter div:not(.ginput_container_date) input:not([type=radio]):not([type=checkbox]), .gform_wrapper .top_label li.gfield.gf_fourth_quarter div:not(.ginput_container_date) select, .gform_wrapper .top_label li.gfield.gf_second_quarter div:not(.ginput_container_date) input:not([type=radio]):not([type=checkbox]), .gform_wrapper .top_label li.gfield.gf_second_quarter div:not(.ginput_container_date) select, .gform_wrapper .top_label li.gfield.gf_third_quarter div:not(.ginput_container_date) input:not([type=radio]):not([type=checkbox]), .gform_wrapper .top_label li.gfield.gf_third_quarter div:not(.ginput_container_date) select {
\t\twidth: 100% !important
\t}

\t.gform_wrapper .top_label li.gfield.gfield_error.gf_first_quarter, .gform_wrapper .top_label li.gfield.gfield_error.gf_fourth_quarter, .gform_wrapper .top_label li.gfield.gfield_error.gf_second_quarter, .gform_wrapper .top_label li.gfield.gfield_error.gf_third_quarter {
\t\twidth: 24.5%
\t}

\t.gform_wrapper .top_label li.gfield.gf_fourth_quarter:after {
\t\tcontent: "";
\t\tdisplay: table;
\t\tclear: both
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter input.large, .gform_wrapper .top_label li.gfield.gf_first_quarter input.medium, .gform_wrapper .top_label li.gfield.gf_first_quarter select.large, .gform_wrapper .top_label li.gfield.gf_first_quarter select.medium, .gform_wrapper .top_label li.gfield.gf_fourth_quarter input.large, .gform_wrapper .top_label li.gfield.gf_fourth_quarter input.medium, .gform_wrapper .top_label li.gfield.gf_fourth_quarter select.large, .gform_wrapper .top_label li.gfield.gf_fourth_quarter select.medium, .gform_wrapper .top_label li.gfield.gf_second_quarter input.large, .gform_wrapper .top_label li.gfield.gf_second_quarter input.medium, .gform_wrapper .top_label li.gfield.gf_second_quarter select.large, .gform_wrapper .top_label li.gfield.gf_second_quarter select.medium, .gform_wrapper .top_label li.gfield.gf_third_quarter input.large, .gform_wrapper .top_label li.gfield.gf_third_quarter input.medium, .gform_wrapper .top_label li.gfield.gf_third_quarter select.large, .gform_wrapper .top_label li.gfield.gf_third_quarter select.medium {
\t\twidth: 97.5%
\t}

\t.gform_wrapper .top_label li.gfield.gf_first_quarter + .gform_footer, .gform_wrapper .top_label li.gfield.gf_first_quarter + li.gfield, .gform_wrapper .top_label li.gfield.gf_fourth_quarter + .gform_footer, .gform_wrapper .top_label li.gfield.gf_fourth_quarter + li.gfield, .gform_wrapper .top_label li.gfield.gf_second_quarter + .gform_footer, .gform_wrapper .top_label li.gfield.gf_second_quarter + li.gfield, .gform_wrapper .top_label li.gfield.gf_third_quarter + .gform_footer, .gform_wrapper .top_label li.gfield.gf_third_quarter + li.gfield {
\t\tclear: both
\t}

\t.gform_wrapper .top_label li ul.gfield_checkbox, .gform_wrapper .top_label li ul.gfield_radio {
\t\twidth: calc(100% + 16px)
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li ul.gfield_checkbox, .gform_wrapper ul.gform_fields:not(.top_label) li ul.gfield_radio {
\t\twidth: calc(70% + 16px)
\t}

\t.gform_wrapper li.gfield.gf_list_2col ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_2col ul.gfield_radio li {
\t\twidth: 50%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tmargin: 0;
\t\tpadding-right: 16px;
\t\tmin-height: 28px;
\t\tvertical-align: top;
\t\tfont-size: 90%
\t}

\t.gform_wrapper li.gfield.gf_list_3col ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_3col ul.gfield_radio li {
\t\twidth: 33.3%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tmargin: 0 0 2px;
\t\tpadding-right: 16px;
\t\tmin-height: 28px;
\t\tvertical-align: top;
\t\tfont-size: 90%
\t}

\t.gform_wrapper li.gfield.gf_list_2col ul.gfield_checkbox li label, .gform_wrapper li.gfield.gf_list_2col ul.gfield_radio li label, .gform_wrapper li.gfield.gf_list_3col ul.gfield_checkbox li label, .gform_wrapper li.gfield.gf_list_3col ul.gfield_radio li label, .gform_wrapper li.gfield.gf_list_4col ul.gfield_checkbox li label, .gform_wrapper li.gfield.gf_list_4col ul.gfield_radio li label {
\t\tmax-width: 75%;
\t\twhite-space: nowrap;
\t\toverflow: hidden;
\t\ttext-overflow: ellipsis;
\t\tvertical-align: middle
\t}

\t.gform_wrapper li.gfield.gf_list_4col ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_4col ul.gfield_radio li {
\t\twidth: 25%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tmargin: 0;
\t\tpadding-right: 16px;
\t\tmin-height: 28px;
\t\tvertical-align: top;
\t\tfont-size: 90%
\t}

\t.gform_wrapper li.gfield.gf_list_5col ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_5col ul.gfield_radio li {
\t\twidth: 20%;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block;
\t\tmargin: 0;
\t\tpadding-right: 16px;
\t\tmin-height: 28px;
\t\tvertical-align: top;
\t\tfont-size: 90%
\t}

\t.gform_wrapper ul.gform_fields:not(.top_label) li.gf_list_2col_vertical label.gfield_label, .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gf_list_2col label.gfield_label, .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gf_list_3col label.gfield_label, .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gf_list_4col label.gfield_label, .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gf_list_5col label.gfield_label, .gform_wrapper ul.gform_fields:not(.top_label) li.gfield.gf_list_inline label.gfield_label {
\t\tmargin: 0 0 10px
\t}

\t.gform_wrapper li.gfield.gf_list_2col ul.gfield_checkbox, .gform_wrapper li.gfield.gf_list_2col ul.gfield_radio, .gform_wrapper li.gfield.gf_list_3col ul.gfield_checkbox, .gform_wrapper li.gfield.gf_list_3col ul.gfield_radio, .gform_wrapper li.gfield.gf_list_4col ul.gfield_checkbox, .gform_wrapper li.gfield.gf_list_4col ul.gfield_radio, .gform_wrapper li.gfield.gf_list_5col ul.gfield_checkbox, .gform_wrapper li.gfield.gf_list_5col ul.gfield_radio {
\t\toverflow: hidden
\t}

\t.gform_wrapper li.gf_list_2col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_3col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_4col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_5col_vertical .ginput_container_checkbox ul.gfield_checkbox {
\t\t-webkit-column-gap: 16px;
\t\t-moz-column-gap: 16px;
\t\tcolumn-gap: 16px
\t}

\t.gform_wrapper li.gf_list_2col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_2col_vertical .ginput_container_radio ul.gfield_radio {
\t\twidth: calc(100% - 16px);
\t\t-webkit-column-count: 2;
\t\t-moz-column-count: 2;
\t\tcolumn-count: 2
\t}

\t.gform_wrapper li.gf_list_3col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_3col_vertical .ginput_container_radio ul.gfield_radio {
\t\twidth: calc(100% - 8px);
\t\t-webkit-column-count: 3;
\t\t-moz-column-count: 3;
\t\tcolumn-count: 3
\t}

\t.gform_wrapper li.gf_list_4col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_4col_vertical .ginput_container_radio ul.gfield_radio {
\t\twidth: calc(100% - 8px);
\t\t-webkit-column-count: 4;
\t\t-moz-column-count: 4;
\t\tcolumn-count: 4
\t}

\t.gform_wrapper li.gf_list_5col_vertical .ginput_container_checkbox ul.gfield_checkbox, .gform_wrapper li.gf_list_5col_vertical .ginput_container_radio ul.gfield_radio {
\t\twidth: calc(100% - 8px);
\t\t-webkit-column-count: 5;
\t\t-moz-column-count: 5;
\t\tcolumn-count: 5
\t}

\t.gform_wrapper li.gf_list_2col_vertical .ginput_container_checkbox ul.gfield_checkbox li label, .gform_wrapper li.gf_list_2col_vertical .ginput_container_radio ul.gfield_radio li label, .gform_wrapper li.gf_list_3col_vertical .ginput_container_checkbox ul.gfield_checkbox li label, .gform_wrapper li.gf_list_3col_vertical .ginput_container_radio ul.gfield_radio li label, .gform_wrapper li.gf_list_4col_vertical .ginput_container_checkbox ul.gfield_checkbox li label, .gform_wrapper li.gf_list_4col_vertical .ginput_container_radio ul.gfield_radio li label, .gform_wrapper li.gf_list_5col_vertical .ginput_container_checkbox ul.gfield_checkbox li label, .gform_wrapper li.gf_list_5col_vertical .ginput_container_radio ul.gfield_radio li label {
\t\tmax-width: 75%;
\t\twhite-space: nowrap;
\t\toverflow: hidden;
\t\ttext-overflow: ellipsis
\t}

\t.gform_wrapper li.gfield.gf_list_height_25 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_25 ul.gfield_radio li {
\t\theight: 25px
\t}

\t.gform_wrapper li.gfield.gf_list_height_50 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_50 ul.gfield_radio li {
\t\theight: 50px
\t}

\t.gform_wrapper li.gfield.gf_list_height_75 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_75 ul.gfield_radio li {
\t\theight: 75px
\t}

\t.gform_wrapper li.gfield.gf_list_height_100 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_100 ul.gfield_radio li {
\t\theight: 100px
\t}

\t.gform_wrapper li.gfield.gf_list_height_125 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_125 ul.gfield_radio li {
\t\theight: 125px
\t}

\t.gform_wrapper li.gfield.gf_list_height_150 ul.gfield_checkbox li, .gform_wrapper li.gfield.gf_list_height_150 ul.gfield_radio li {
\t\theight: 150px
\t}

\t.gform_wrapper li.gf_list_inline ul.gfield_checkbox li, .gform_wrapper li.gf_list_inline ul.gfield_radio li {
\t\twidth: auto !important;
\t\tfloat: none !important;
\t\tmargin: 0 8px 10px 0;
\t\tdisplay: -moz-inline-stack;
\t\tdisplay: inline-block
\t}

\thtml[dir=rtl] .gform_wrapper li.gf_list_inline ul.gfield_checkbox li, html[dir=rtl] .gform_wrapper li.gf_list_inline ul.gfield_radio li {
\t\tpadding-left: 16px !important;
\t\tpadding-right: 0 !important
\t}

\t.gform_wrapper li.gf_hide_ampm div.gfield_time_ampm {
\t\tdisplay: none !important
\t}

\t.gform_wrapper li.gsection.gf_scroll_text {
\t\theight: 240px;
\t\twidth: calc(100% - 16px);
\t\tpadding: 16px;
\t\tbackground-color: #fff;
\t\toverflow-y: scroll;
\t\toverflow-x: hidden;
\t\tborder: 1px solid #CCC;
\t\tborder-bottom: 1px solid #CCC !important
\t}

\t.gform_wrapper .top_label li.gsection.gf_scroll_text h2.gsection_title {
\t\tmargin: 10px 10px 0 8px !important
\t}

\t.gform_wrapper.gf_browser_chrome .top_label li.gsection.gf_scroll_text h2.gsection_title, .gform_wrapper.gf_browser_gecko .top_label li.gsection.gf_scroll_text h2.gsection_title {
\t\tmargin: 0 10px 0 8px !important
\t}

\t.gform_wrapper .top_label li.gsection.gf_scroll_text .gsection_description {
\t\tmargin: 10px;
\t\tfont-size: 12px
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ul li, .gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ul li {
\t\tlist-style-type: disc !important;
\t\tmargin: 0 0 8px;
\t\toverflow: visible;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ul, .gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ul {
\t\tlist-style-type: disc !important;
\t\tmargin: 16px 0 16px 18px;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li, .gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li {
\t\tlist-style-type: decimal !important;
\t\toverflow: visible;
\t\tmargin: 0 0 8px;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol, .gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol {
\t\tlist-style-type: decimal !important;
\t\tmargin: 16px 0 18px 32px;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li ul, .gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li ul li {
\t\tlist-style-type: disc !important;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li ul {
\t\tmargin: 16px 0 16px 18px
\t}

\t.gform_wrapper form div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description ol li ul li {
\t\tmargin: 0 0 8px
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description dl {
\t\tmargin: 0 0 18px;
\t\tpadding-left: 0
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description dl dt {
\t\tfont-weight: 700
\t}

\t.gform_wrapper div.gform_ul.gform_fields .top_label li.gfield.gsection.gf_scroll_text div.gsection_description dl dd {
\t\tmargin: 0 0 16px 18px
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_blue, .gform_wrapper li.gfield.gfield_html.gf_alert_gray, .gform_wrapper li.gfield.gfield_html.gf_alert_green, .gform_wrapper li.gfield.gfield_html.gf_alert_red, .gform_wrapper li.gfield.gfield_html.gf_alert_yellow {
\t\t-webkit-border-radius: 3px;
\t\t-moz-border-radius: 3px;
\t\tborder-radius: 3px;
\t\tmargin: 20px 0 !important;
\t\tpadding: 20px !important
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_green {
\t\tborder: 1px solid #97B48A;
\t\tbackground-color: #CBECA0;
\t\ttext-shadow: #DFB 1px 1px;
\t\tcolor: #030
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_red {
\t\tborder: 1px solid #CFADB3;
\t\tbackground-color: #FAF2F5;
\t\ttext-shadow: #FFF 1px 1px;
\t\tcolor: #832525
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_yellow {
\t\tborder: 1px solid #E6DB55;
\t\tbackground-color: #FFFBCC;
\t\ttext-shadow: #FCFAEA 1px 1px;
\t\tcolor: #222
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_gray {
\t\tborder: 1px solid #CCC;
\t\tbackground-color: #EEE;
\t\ttext-shadow: #FFF 1px 1px;
\t\tcolor: #424242
\t}

\t.gform_wrapper li.gfield.gfield_html.gf_alert_blue {
\t\tborder: 1px solid #a7c2e7;
\t\tbackground-color: #D1E4F3;
\t\ttext-shadow: #E0F1FF 1px 1px;
\t\tcolor: #314475
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_simple_yellow {
\t\tmargin: 30px 0;
\t\tmax-width: 99%;
\t\tborder-top: 1px solid #E6DB55;
\t\tborder-bottom: 1px solid #E6DB55;
\t\tpadding: 32px;
\t\tbackground-color: #FFFBCC;
\t\tcolor: #424242;
\t\tfont-size: 25px
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_simple_gray {
\t\tmargin: 30px 0;
\t\tmax-width: 99%;
\t\tborder-top: 1px solid #CCC;
\t\tborder-bottom: 1px solid #CCC;
\t\tpadding: 32px;
\t\tbackground-color: #EAEAEA;
\t\tcolor: #424242;
\t\tfont-size: 25px
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_yellow_gradient {
\t\tposition: relative;
\t\tbackground-color: #FFFBD2;
\t\tmargin: 30px 0;
\t\tborder: 1px solid #E6DB55;
\t\t-webkit-box-shadow: 0 0 5px rgba(221, 215, 131, .75);
\t\t-moz-box-shadow: 0 0 5px rgba(221, 215, 131, .75);
\t\tbox-shadow: 0 0 5px rgba(221, 215, 131, .75)
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_yellow_gradient div.gforms_confirmation_message {
\t\tmargin: 0;
\t\tpadding: 40px;
\t\tmax-width: 99%;
\t\tfont-size: 28px;
\t\tborder-top: 2px solid #FFF;
\t\tborder-bottom: 1px solid #E6DB55;
\t\tcolor: #424242;
\t\tbackground: #fffce5;
\t\tbackground: -moz-linear-gradient(top, #fffce5 0, #fff9bf 100%);
\t\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fffce5), color-stop(100%, #fff9bf));
\t\tbackground: -webkit-linear-gradient(top, #fffce5 0, #fff9bf 100%);
\t\tbackground: -o-linear-gradient(top, #fffce5 0, #fff9bf 100%);
\t\tbackground: -ms-linear-gradient(top, #fffce5 0, #fff9bf 100%);
\t\tbackground: linear-gradient(to bottom, #fffce5 0, #fff9bf 100%)
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_green_gradient {
\t\tposition: relative;
\t\tbackground-color: #f1fcdf;
\t\tmargin: 30px 0;
\t\tborder: 1px solid #a7c37c;
\t\t-webkit-box-shadow: 0 0 5px rgba(86, 122, 86, .4);
\t\t-moz-box-shadow: 0 0 5px rgba(86, 122, 86, .4);
\t\tbox-shadow: 0 0 5px rgba(86, 122, 86, .4)
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_green_gradient div.gforms_confirmation_message {
\t\tmargin: 0;
\t\tpadding: 40px;
\t\tmax-width: 99%;
\t\tfont-size: 28px;
\t\tborder-top: 2px solid #effade;
\t\tborder-bottom: 1px solid #a7c37c;
\t\ttext-shadow: #DFB 1px 1px;
\t\tcolor: #030;
\t\tbackground: #dbf2b7;
\t\tbackground: -moz-linear-gradient(top, rgba(219, 242, 183, 1) 0, rgba(180, 208, 136, 1) 100%);
\t\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(219, 242, 183, 1)), color-stop(100%, rgba(180, 208, 136, 1)));
\t\tbackground: -webkit-linear-gradient(top, rgba(219, 242, 183, 1) 0, rgba(180, 208, 136, 1) 100%);
\t\tbackground: -o-linear-gradient(top, rgba(219, 242, 183, 1) 0, rgba(180, 208, 136, 1) 100%);
\t\tbackground: -ms-linear-gradient(top, rgba(219, 242, 183, 1) 0, rgba(180, 208, 136, 1) 100%);
\t\tbackground: linear-gradient(to bottom, rgba(219, 242, 183, 1) 0, rgba(180, 208, 136, 1) 100%)
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_green_gradient:after, div.gform_confirmation_wrapper.gf_confirmation_green_gradient:before, div.gform_confirmation_wrapper.gf_confirmation_yellow_gradient:after, div.gform_confirmation_wrapper.gf_confirmation_yellow_gradient:before {
\t\tz-index: -1;
\t\tposition: absolute;
\t\tcontent: "";
\t\tbottom: 15px;
\t\tleft: 10px;
\t\twidth: 50%;
\t\ttop: 80%;
\t\tmax-width: 40%;
\t\tbackground: rgba(0, 0, 0, .2);
\t\t-webkit-box-shadow: 0 15px 10px rgba(0, 0, 0, .2);
\t\t-moz-box-shadow: 0 15px 10px rgba(0, 0, 0, .2);
\t\tbox-shadow: 0 15px 10px rgba(0, 0, 0, .2);
\t\t-webkit-transform: rotate(-3deg);
\t\t-moz-transform: rotate(-3deg);
\t\t-o-transform: rotate(-3deg);
\t\t-ms-transform: rotate(-3deg);
\t\ttransform: rotate(-3deg)
\t}

\tdiv.gform_confirmation_wrapper.gf_confirmation_green_gradient:after, div.gform_confirmation_wrapper.gf_confirmation_yellow_gradient:after {
\t\t-webkit-transform: rotate(3deg);
\t\t-moz-transform: rotate(3deg);
\t\t-o-transform: rotate(3deg);
\t\t-ms-transform: rotate(3deg);
\t\ttransform: rotate(3deg);
\t\tright: 10px;
\t\tleft: auto
\t}

\t.gform_wrapper.gf_simple_horizontal_wrapper.centered_wrapper {
\t\twidth: auto;
\t\tmargin: 0 auto;
\t\tdisplay: table
\t}

\t.gform_wrapper form.gf_simple_horizontal {
\t\twidth: calc(100% - 16px);
\t\tmargin: 0 auto
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body, .gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label {
\t\tdisplay: table-cell;
\t\tvertical-align: middle;
\t\tmargin: 0;
\t\tpadding: 0;
\t\tposition: relative
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body {
\t\twidth: auto;
\t\tmax-width: 75%
\t}

\t.gform_wrapper form.gf_simple_horizontal div.ginput_container, .gform_wrapper form.gf_simple_horizontal ul li.gfield {
\t\tmargin-top: 0 !important
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label {
\t\twidth: auto;
\t\tmax-width: 25%;
\t\tpadding: 0;
\t\tmargin: 0
\t}

\tbody:not(rtl) .gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label {
\t\ttext-align: left
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label {
\t\tdisplay: table;
\t\twidth: 100%
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield {
\t\tdisplay: table-cell;
\t\tpadding-right: 1em;
\t\theight: auto
\t}

\t.gform_wrapper form.gf_simple_horizontal .gfield_description:not(.validation_message), .gform_wrapper form.gf_simple_horizontal .ginput_complex label, .gform_wrapper form.gf_simple_horizontal label.gfield_label {
\t\tdisplay: block;
\t\theight: 1px;
\t\twidth: 1px;
\t\toverflow: hidden;
\t\tposition: absolute;
\t\ttop: 0;
\t\tleft: -9000px
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label.form_sublabel_above li.gfield, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label.form_sublabel_below li.gfield {
\t\tvertical-align: middle
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield input.large, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield input.medium, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield input.small, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield select.large, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield select.medium, .gform_wrapper form.gf_simple_horizontal div.gform_body ul.top_label li.gfield select.small {
\t\twidth: 100%
\t}

\t.gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label input[type=submit], .gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label input[type=button], .gform_wrapper form.gf_simple_horizontal div.gform_footer.top_label input[type=image] {
\t\theight: auto
\t}

\t.gform_wrapper form.gf_simple_horizontal .top_label .gfield_error {
\t\tmargin-bottom: 0
\t}

\t.gform_wrapper form.gf_simple_horizontal ul li.gfield .ginput_container_checkbox ul li, .gform_wrapper form.gf_simple_horizontal ul li.gfield .ginput_container_radio ul li {
\t\tdisplay: inline-block;
\t\tmargin-right: .5em
\t}

\thtml[dir=rtl] .gform_wrapper form.gf_simple_horizontal div.ginput_complex.ginput_container.gf_name_has_2 span {
\t\twidth: 48.5%
\t}

\thtml[dir=rtl] .gform_wrapper form.gf_simple_horizontal div.ginput_complex.ginput_container.gf_name_has_3 span {
\t\twidth: 33%
\t}

\thtml[dir=rtl] .gform_wrapper form.gf_simple_horizontal div.ginput_complex.ginput_container.gf_name_has_4 span {
\t\twidth: 24.5%
\t}

\thtml[dir=rtl] .gform_wrapper form.gf_simple_horizontal div.ginput_complex.ginput_container.gf_name_has_5 span {
\t\twidth: 19.5%
\t}
}

body .gform_wrapper.gf_form_center_wrapper {
\tpadding: 16px 0 16px 16px;
}

input[type="submit"], button {
\tcursor: pointer;
\tborder: none;
\tpadding: 12px 30px !important;
}

input, textarea, select {
\tbackground: #fff;
\tcolor: #000;
\tborder: 1px solid #000;
\tpadding: 10px !important;
}

.button {
\tbackground: #cf513b;
\tfont-family: 'Roboto Condensed', sans-serif;
\tfont-size: 19px;
\tfont-weight: 700;
\tletter-spacing: 0.89px;
\tline-height: 18px;
\ttext-transform: uppercase;
\tpadding: 15px 30px;
\tdisplay: inline-block;
\ttext-decoration: none !important;
\tcolor: #fff;
}

`

const Primary = styled.main``

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <AdHelper />
      <GlobalStyles />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header>
        <Hamburger handleOverlayMenu={handleOverlayMenu} />
      </Header>

      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
