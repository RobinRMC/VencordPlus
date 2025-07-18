/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export default `/* stylelint-disable unknownAtRules */
/* stylelint-disable property-no-vendor-prefix */
/* stylelint-disable function-linear-gradient-no-nonstandard-direction */
/* stylelint-disable color-function-notation */
/* stylelint-disable alpha-value-notation */
/* stylelint-disable value-no-vendor-prefix */
/* stylelint-disable color-hex-length */
/* stylelint-disable no-descending-specificity */
/* stylelint-disable declaration-block-no-redundant-longhand-properties */
/* stylelint-disable selector-id-pattern */
/* stylelint-disable selector-class-pattern */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap");

.dc-app-launcher {
    height: 48px;
    width: 48px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s ease-out;
    background-color: var(--background-primary);
    cursor: pointer;
    color: var(--text-default);
}

.dc-app-launcher:hover {
    background-color: var(--brand-500);
    color: var(--white);
    border-radius: 16px;
}

.dc-tooltip-normal-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    word-wrap: break-word;
}

.dc-color-swatch {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    overflow: hidden;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    box-shadow: 0 0 0 1.5px var(--interactive-normal);
    box-sizing: border-box;
    flex-shrink: 0;
}

.dc-color-swatch-part {
    width: 50%;
    height: 50%;
}

.dc-color-swatch:not(:has(> .dc-color-swatch-part:nth-child(2)))
    > .dc-color-swatch-part {
    height: 100%;
    width: 100%;
}

.dc-color-swatch:not(:has(> .dc-color-swatch-part:nth-child(3)))
    > .dc-color-swatch-part {
    height: 100%;
}

.dc-color-swatch:not(:has(> .dc-color-swatch-part:nth-child(4)))
    > .dc-color-swatch-part:nth-child(3) {
    width: 100%;
}

.dc-selector {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 4px));
    grid-auto-rows: max-content;
    gap: 8px;
    width: 100%;
    scrollbar-width: none !important;
    box-sizing: border-box;
    overflow: hidden auto;
}

.dc-selector[data-layout="compact"] {
    grid-template-columns: repeat(3, calc((100%/3) - 5.3333px));
}

.dc-selector[data-layout="compact"] > .dc-colorway {
    padding: 4px 6px;
    min-height: 38px;
}

.dc-selector[data-layout="compact"] > .dc-colorway .dc-subnote {
    display: none;
}

.dc-selector::-webkit-scrollbar {
    width: 0;
}

.dc-app-root {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    flex-direction: row;
    background-color: #0a0a0c;
    margin: 0 auto;
    pointer-events: all;
    position: relative;
}

.theme-light .dc-app-root {
    background-color: #f5f5f5;
    border-color: #d6d6d6;
}

@keyframes reveal-modal {
    from {
        translate: 0 -20px;
    }

    to {
        translate: 0;
    }
}

@keyframes reveal-modal-backdrop {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.75;
    }
}

.dc-modal.closing {
    animation: close-modal 0.2s ease-in-out;
    transform: scale(0.5);
    opacity: 0;
}

.dc-modal.hidden {
    animation: close-modal 0.2s ease-in-out;
    transform: scale(0.5);
    opacity: 0;
}

@keyframes show-modal {
    0% {
        transform: scale(0.7);
        opacity: 0;
    }

    75% {
        transform: scale(1.009);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes close-modal {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(0.7);
        opacity: 0;
    }
}

.dc-divider {
    width: 100%;
    height: 1px;
    border-top: thin solid #fff;
    margin-top: 20px;
}

.dc-switch {
    background-color: rgb(85 87 94);
    flex: 0 0 auto;
    position: relative;
    border-radius: 14px;
    width: 40px;
    height: 24px;
    cursor: pointer;
    transition: 0.15s ease;
}

.dc-switch.checked {
    background-color: #fff;
}

.dc-switch-label {
    flex: 1;
    display: block;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 0;
    color: var(--header-primary);
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    cursor: pointer;
}

.dc-note {
    color: var(--header-secondary);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-top: 8px;
}

.dc-button {
    padding: 4px 12px;
    border-radius: 6px;
    background-color: transparent;
    transition: 0.2s ease;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: var(--custom-button-button-sm-height);
    min-width: var(--custom-button-button-sm-width);
    min-height: var(--custom-button-button-sm-height);
    box-sizing: border-box;
    width: auto;
}

.dc-button:hover {
    background-color: hsl(var(--white-500-hsl)/5%);
}

.dc-button:active {
    background-color: hsl(var(--white-500-hsl)/1%);
}

.dc-button-outlined {
    transition: color var(--custom-button-transition-duration) ease,background-color var(--custom-button-transition-duration)ease,border-color var(--custom-button-transition-duration)ease !important;
    border-width: 1px !important;
    border-style: solid !important;
}

.dc-button:not(.dc-button-outlined).dc-button-primary {
    color: #fff;
    background-color: #202028;
}

.theme-light .dc-button:not(.dc-button-outlined).dc-button-primary {
    color: #000;
    background-color: #f0f0f0;
}

.dc-button:not(.dc-button-outlined).dc-button-secondary {
    color: #fff;
    background-color: #141416;
}

.theme-light.dc-button:not(.dc-button-outlined).dc-button-secondary {
    color: #000;
    background-color: #e6e6e6;
}

.dc-button:not(.dc-button-outlined).dc-button-danger {
    color: #fff;
    background-color: #e80808;
}

.dc-button:not(.dc-button-outlined).dc-button-brand {
    color: #000;
    background-color: #fff;
}

.dc-button.dc-button-outlined.dc-button-primary {
    color: #fff;
    border-color: #202028;
}

.dc-button.dc-button-outlined.dc-button-secondary {
    color: #fff;
    border-color: #141416;
}

.dc-button.dc-button-outlined.dc-button-danger {
    color: #fff;
    border-color: #e80808;
}

.dc-button.dc-button-outlined.dc-button-brand {
    color: #fff;
    border-color: #fff;
}

.theme-light .dc-button.dc-button-outlined {
    color: #000;
}

.dc-button.dc-button-icon {
    padding: 4px;
    min-width: var(--custom-button-button-sm-height);
}

.dc-button.dc-button-primary:hover,
.dc-button.dc-button-secondary:hover,
.theme-light .dc-button.dc-button-brand:hover {
    background-color: #2a2a2f;
    border-color: #2a2a2f;
    color: #fff;
}

.dc-button.dc-button-primary:active,
.dc-button.dc-button-secondary:active,
.theme-light .dc-button.dc-button-brand:active {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff;
}

.theme-light .dc-button.dc-button-primary:hover,
.theme-light .dc-button.dc-button-secondary:hover {
    background-color: #d6d6d6;
    border-color: #d6d6d6;
    color: #000;
}

.theme-light .dc-button.dc-button-primary:active,
.theme-light .dc-button.dc-button-secondary:active {
    background-color: #919191;
    border-color: #919191;
    color: #000;
}

.dc-button.dc-button-danger:hover {
    background-color: #c70707;
    border-color: #c70707;
    color: #fff;
}

.dc-button.dc-button-danger:active {
    background-color: #b10606;
    border-color: #b10606;
    color: #fff;
}

.dc-button.dc-button-brand:hover {
    background-color: #e1e1e1;
    border-color: #e1e1e1;
    color: #000;
}

.dc-button.dc-button-brand:active {
    background-color: #919191;
    border-color: #919191;
    color: #000;
}

.theme-light .dc-button.dc-button-brand:hover {
    background-color: #2a2a2f;
    border-color: #2a2a2f;
    color: #fff;
}

.theme-light .dc-button.dc-button-brand:active {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff;
}

.dc-button-md {
    height: var(--custom-button-button-md-height);
    min-width: var(--custom-button-button-md-width);
    min-height: var(--custom-button-button-md-height);
}

.dc-button-lg {
    height: var(--custom-button-button-lg-height);
    min-width: var(--custom-button-button-lg-width);
    min-height: var(--custom-button-button-lg-height);
}

.dc-button-xl {
    height: var(--custom-button-button-xl-height);
    min-width: var(--custom-button-button-xl-width);
    min-height: var(--custom-button-button-xl-height);
}

.dc-button-tn {
    height: var(--custom-button-button-tn-height);
    min-width: var(--custom-button-button-tn-width);
    min-height: var(--custom-button-button-tn-height);
}

.dc-button-md.dc-button-icon {
    min-width: var(--custom-button-button-md-height);
}

.dc-button-lg.dc-button-icon {
    min-width: var(--custom-button-button-lg-height);
}

.dc-button-xl.dc-button-icon {
    min-width: var(--custom-button-button-xl-height);
}

.dc-button-tn.dc-button-icon {
    min-width: var(--custom-button-button-tn-height);
}

.dc-page-header {
    color: #fff;
    font-weight: normal;
    padding-left: 16px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #101012;
    display: flex;
    gap: 16px;
    align-items: center;
    height: 50px;
    flex-shrink: 0;
}

.theme-light .dc-page-header {
    background-color: #f0f0f0;
    color: #000;
}

.dc-app-sidebar {
    background-color: #101012;
    color: #fff;
    box-sizing: border-box;
    height: fit-content;
    border-radius: 8px;
    flex: 0 0 auto;
    padding: 8px;
    margin: auto 8px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.theme-light .dc-app-sidebar {
    background-color: #e6e6e6;
    color: #000;
}

.dc-discordserverlist-listitem {
    position: relative;
    margin: 0 0 8px;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 72px;
}

.dc-textbox {
    width: 100%;
    border-radius: 6px;
    background-color: #101012;
    transition: 0.2s ease;
    border: 1px solid transparent;
    padding-left: 12px;
    color: #fff;
    height: 40px;
    box-sizing: border-box;
}

.dc-codeblock {
    border-radius: 6px;
    background-color: #101012;
    transition: 0.2s ease;
    padding: 10px;
    border: 1px solid transparent;
    display: block;
}

.dc-textbox::-webkit-outer-spin-button,
.dc-textbox::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.theme-light .dc-textbox {
    color: #000;
    background-color: #f0f0f0;
}

.theme-light .dc-codeblock {
    background-color: #f0f0f0;
}

.dc-textbox:hover,
.dc-textbox:focus,
.dc-textbox:has(:focus),
.dc-codeblock:hover,
.dc-codeblock:focus {
    background-color: #1a1a1a;
}

.theme-light .dc-textbox:hover,
.theme-light .dc-textbox:focus,
.theme-light .dc-textbox:has(:focus),
.theme-light .dc-codeblock:hover,
.theme-light .dc-codeblock:focus {
    background-color: #e6e6e6;
}

.dc-textbox:focus,
.dc-textbox:has(:focus),
.dc-codeblock:focus {
    border-color: #a6a6a6;
}

.theme-light .dc-textbox:focus,
.theme-light .dc-textbox:has(:focus),
.theme-light .dc-codeblock:focus {
    border-color: #595959;
}

.dc-tooltip-header {
    background-color: var(--background-primary);
    padding: 2px 8px;
    border-radius: 16px;
    height: min-content;
    color: var(--header-primary);
    margin-bottom: 2px;
    display: inline-flex;
    margin-left: -4px;
}

.is-mobile .dc-selector {
    justify-content: space-around;
    gap: 10px;
}

.dc-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.dc-spinner-inner {
    transform: rotate(280deg);
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    contain: paint;
}

@keyframes spinner-spinning-circle-rotate {
    100% {
        transform: rotate(1turn);
    }
}

@keyframes spinner-spinning-circle-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 130, 200;
    }

    100% {
        stroke-dasharray: 130, 200;
        stroke-dashoffset: -124;
    }
}

.dc-spinner-svg {
    animation: spinner-spinning-circle-rotate 2s linear infinite;
    height: 100%;
    width: 100%;
}

.dc-spinner-beam {
    animation: spinner-spinning-circle-dash 2s ease-in-out infinite;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    fill: none;
    stroke-width: 6;
    stroke-miterlimit: 10;
    stroke-linecap: round;
    stroke: currentcolor;
}

.dc-spinner-beam2 {
    stroke: currentcolor;
    opacity: 0.6;
    animation-delay: 0.15s;
}

.dc-spinner-beam3 {
    stroke: currentcolor;
    opacity: 0.3;
    animation-delay: 0.23s;
}

.dc-colorway {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 11px 8px;
    padding-left: 11px;
    gap: 2px;
    border-radius: 6px;
    background-color: #101012;
    box-sizing: border-box;
    min-height: 56px;
    align-items: center;
    border: 1px solid transparent;
    cursor: pointer;
    transition:
        background-color 0.1s ease-in-out,
        border-color 0.1s ease-in-out;
}

.theme-light .dc-colorway {
    background-color: #f0f0f0;
}

.dc-colorway:hover,
.dc-colorway:focus,
.dc-colorway[aria-checked="true"] {
    background-color: #2a2a2f;
}

.theme-light .dc-colorway:hover,
.theme-light .dc-colorway:focus,
.theme-light .dc-colorway[aria-checked="true"] {
    background-color: #d6d6d6;
}

.dc-colorway[aria-checked="true"] {
    border-color: #a6a6a6;
}

.theme-light .dc-colorway[aria-checked="true"] {
    border-color: #595959;
}

.dc-colorway[aria-invalid="true"] {
    background-color: #e80808;
}

.dc-colorway[aria-invalid="true"]:hover {
    background-color: #c70707;
}

@keyframes loading-bar {
    0% {
        left: 0;
        right: 100%;
        width: 0;
    }

    10% {
        left: 0;
        right: 75%;
        width: 25%;
    }

    90% {
        right: 0;
        left: 75%;
        width: 25%;
    }

    100% {
        left: 100%;
        right: 0;
        width: 0;
    }
}

.dc-badge {
    font-size: 0.625rem;
    text-transform: uppercase;
    vertical-align: top;
    display: inline-flex;
    align-items: center;
    text-indent: 0;
    background: #fff;
    color: #000;
    flex: 0 0 auto;
    height: 15px;
    padding: 0 4px;
    margin-top: 5px;
    border-radius: 16px;
}

.theme-light .dc-badge {
    background-color: #000;
    color: #fff;
}

.dc-warning-card {
    padding: 1em;
    margin-bottom: 1em;
    background-color: var(--background-feedback-warning);
    border-color: var(--text-feedback-warning);
    color: var(--info-warning-foreground);
}

.dc-colorway-selector::before {
    -webkit-mask: var(--si-appearance) center/contain no-repeat !important;
    mask: var(--si-appearance) center/contain no-repeat !important;
}

.dc-colorway-settings::before {
    -webkit-mask: var(--si-vencordsettings) center/contain no-repeat !important;
    mask: var(--si-vencordsettings) center/contain no-repeat !important;
}

.dc-colorway-sources-manager::before {
    -webkit-mask: var(--si-instantinvites) center/contain no-repeat !important;
    mask: var(--si-instantinvites) center/contain no-repeat !important;
}

.dc-colorway-store::before {
    -webkit-mask: var(--si-discovery) center/contain no-repeat !important;
    mask: var(--si-discovery) center/contain no-repeat !important;
}

.dc-info-card {
    border-radius: 5px;
    border: 1px solid var(--blue-345);
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    gap: 1em;
    flex-direction: column;
}

.theme-dark .dc-info-card {
    color: var(--white-500);
}

.theme-light .dc-info-card {
    color: var(--black-500);
}

.dc-label {
    margin-right: auto;
    margin-top: 0 !important;
    margin-left: 0.5rem;
    color: var(--header-primary);
    font-family: bootstrap-icons, var(--font-primary);
    /* stylelint-disable-next-line value-keyword-case */
    text-rendering: optimizeLegibility;
}

.dc-subnote {
    color: var(--header-secondary);
    overflow: hidden overlay;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 23px;
}

.dc-label-wrapper {
    min-width: 0;
    display: flex;
    flex-direction: column;
    margin-right: 8px;
    width: 100%;
}

.dc-modal {
    border-radius: 16px;
    background-color: #000;
    color: #fff;
    height: fit-content;
    min-height: unset;
    width: fit-content;
    border: none;
    padding: 0;
    margin: 0;
    transition: 0.4s ease;
    animation: show-modal 0.4s ease;
    pointer-events: all;
    min-width: 400px;
    position: relative;
}

.dc-modal-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
    overflow: hidden auto;
}

.dc-modal-content::-webkit-scrollbar {
    width: 0;
}

.dc-menu-tabs {
    width: 100%;
    height: 24px;
    box-sizing: content-box !important;
}

.dc-menu-tab {
    color: #fff;
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 32px;
    transition: 0.2s ease;
    margin-right: 8px;
    display: inline-block;
}

.theme-light .dc-menu-tab {
    color: #000;
}

.dc-menu-tab:hover {
    background-color: #1f1f1f;
}

.theme-light .dc-menu-tab:hover {
    background-color: #e0e0e0;
}

.dc-menu-tab.active {
    color: #000;
    background-color: #fff;
}

.theme-light .dc-menu-tab.active {
    color: #fff;
    background-color: #000;
}

.dc-modal-footer {
    border-radius: 6px;
    padding: 4px;
    margin: 4px;
    display: flex;
    flex-direction: row-reverse;
    background-color: #101012;
    width: calc(100% - 16px);
    gap: 4px;
}

.dc-modal-header {
    margin: 0;
    font-weight: normal;
    font-size: 1.25em;
    padding: 16px;
    color: var(--text-default);
}

.dc-field-header {
    margin-bottom: 8px;
    display: block;
    font-family: var(--font-display);
    font-size: 12px;
    line-height: 1.3333;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .02em;
    color: var(--header-secondary);
}

.dc-field-header-error {
    color: #FF0000;
}

.dc-field-header-errormsg {
    font-size: 12px;
    font-weight: 500;
    font-style: italic;
    text-transform: none;
}

.dc-field-header-errordiv {
    padding-left: 4px;
    padding-right: 4px;
}

.dc-cid-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 500px;
    width: 100%;
}

.dc-cid-wrapper > .dc-colorway {
    width: 100%;
}

.dc-contextmenu {
    border-radius: 8px;
    border: 1px solid #dfdfdf;
    background-color: #000;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    z-index: 5;
}

.dc-contextmenu-item {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 32px;
    padding: 6px 8px;
    border-radius: 6px;
    background-color: #101012;
    border: 1px solid transparent;
    transition: 0.2s ease;
    cursor: pointer;
    color: #dfdfdf;
}

.dc-contextmenu-divider {
    box-sizing: border-box;
    margin: 4px;
    border-bottom: 1px solid var(--background-modifier-accent);
}

.dc-contextmenu-item:hover {
    background-color: #2a2a2f;
    border-color: #a6a6a6;
}

.dc-radio-selected {
    fill: #fff;
}

.dc-tooltip {
    background-color: var(--background-floating);
    box-shadow: var(--shadow-high);
    color: var(--text-default);
    pointer-events: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    max-width: 190px;
    box-sizing: border-box;
    word-wrap: break-word;
    z-index: 1002;
    will-change: opacity, transform;
    transition:
        transform 0.1s ease,
        opacity 0.1s ease;
    position: fixed;
}

.dc-tooltip.dc-tooltip-hidden {
    transform: scale(0.95);
    opacity: 0;
}

.dc-tooltip-right {
    transform-origin: 0% 50%;
}

.dc-tooltip-pointer {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 5px;
    pointer-events: none;
    border-top-color: var(--background-floating);
}

.dc-tooltip-right > .dc-tooltip-pointer {
    position: absolute;
    right: 100%;
    top: 50%;
    margin-top: -5px;
    border-left-width: 5px;
    transform: rotate(90deg);
}

.dc-tooltip-top > .dc-tooltip-pointer {
    position: absolute;
    right: 50%;
    top: 100%;
    margin-right: -5px;
    border-bottom-width: 5px;
    transform: rotate(0deg);
}

.dc-tooltip-content {
    padding: 8px 12px;
    overflow: hidden;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
}

.dc-wordmark {
    font-family: var(--font-headline);
    font-size: 24px;
    color: var(--header-primary);
    line-height: 31px;
    margin-bottom: 0;
}

.dc-wordmark-colorways {
    font-family: var(--font-display);
    font-size: 24px;
    background-color: var(--brand-500);
    padding: 0 4px;
    border-radius: 4px;
}

.visual-refresh .dc-wordmark-colorways {
    border-radius: 8px;
    padding: 0 8px;
    border: 1px solid var(--border-strong);
    font-family: "Edu AU VIC WA NT Hand", cursive;
    line-height: 32px;
    display: inline-block;
}

.visual-refresh .dc-app-launcher {
    width: 44px;
    height: 44px;
}

.dc-discordserverlist-listitem-pill {
    width: 4px;
    margin-left: -4px;
    height: 0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--header-primary);
    border-radius: 0 4px 4px 0;
    transition: 0.2s ease-in-out;
}

.dc-discordserverlist-listitem-pill[data-status="hover"],
.dc-discordserverlist-listitem-pill[data-status="active"] {
    margin-left: 0;
    height: 20px;
}

.dc-discordserverlist-listitem-pill[data-status="active"] {
    height: 40px;
}

.dc-manager-active {
    color: #fff;
    margin: auto;
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(16px);
    z-index: 1;
}

.dc-selector-spinner {
    width: 32px;
    color: #fff;
    transform: scale(.8);
}

.dc-selector-spinner-hidden {
    display: none;
}

.dc-selector-header {
    display: flex !important;
    gap: 4px !important;
    padding: 4px !important;
    height: fit-content !important;
}

.dc-selector-header .dc-button {
    flex: 0 0 auto;
}

.dc-selector-header .dc-textbox {
    height: 32px !important;
    background-color: transparent !important;
    border: none !important;
}

.dc-contextmenu-colors {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 4px;
    padding: 8px;
}

.dc-contextmenu-color {
    border-radius: 8px;
    min-width: 44px;
    width: 100%;
    height: 44px;
    cursor: pointer;
    transition: .2s ease;
}

.dc-contextmenu-color:hover {
    filter: brightness(.8);
}

.dc-contextmenu-label {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 32px;
    padding: 6px 8px;
    color: var(--interactive-normal);
    border-color: var(--interactive-normal);
    text-transform: uppercase;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 0;
}

.dc-switch-handle {
    transition: 0.2s;
    display: block;
    position: absolute;
    width: 28px;
    height: 18px;
    margin: 3px;
}

.colorwaysFeatureIconContainer {
    padding: 16px;
    background-color: #0a0a0a;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 32px;
}

.colorwaysFeatureIconLabel {
    text-align: center;
    height: fit-content;
    padding-top: 16px;
}

.colorwaysFeaturePresent {
    display: grid;
    grid-template-columns: repeat(3, 144px);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-evenly;
    height: fit-content;
    min-height: unset;
    align-items: center;
}

.saturation-white {
    background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
    background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}

.saturation-black {
    background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
    background: linear-gradient(to top, #000, rgba(0,0,0,0));
}

.hue-horizontal {
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
      33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to right, #f00 0%, #ff0
      17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}

.hue-vertical {
    background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
      #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
      #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}

.colorwaysSaveAsSwatch {
    width: 50px;
    height: 50px;
    border: none;
    position: relative;
    border-radius: 0;
    cursor: pointer;
}

.colorwayCustomColorpicker {
    display: flex;
    flex-direction: column;
    width: 220px;
    padding: 16px;
    gap: 16px;
    border: 1px solid var(--border-subtle);
    background-color: var(--background-primary);
    border-radius: 4px;
    box-shadow: var(--elevation-high);
}

.colorwayCustomColorpicker-suggestedColor {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid var(--primary-400);
}

.colorwayCustomColorpicker-suggestedColors {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
}

.colorwayCustomColorpicker-inputContainer {
    display: flex;
    align-items: center;
    gap: 12px;
}

.colorwayCustomColorpicker-eyeDropper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin: 0;
}

.colorwayCustomColorpicker-inputWrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.colorwaysDoubleSetting {
    display: flex;
    flex-direction: row;
}

.colour-input {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0ms;
}

.dc-discordsettings-itm {
    padding: 6px 10px;
    border-radius: 4px;
    color: var(--interactive-normal);
    position: relative;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-shrink: 0;
}

.dc-discordsettings-itm:hover {
    background-color: var(--background-modifier-hover);
}

.visual-refresh .dc-discordsettings-itm {
    transition: background-color.3s ease;
}

.visual-refresh .dc-discordsettings-itm:hover {
    background-color: var(--button-secondary-background-hover);
}

.dc-discordsettings-itm .dc-label-Settings {
    font-family: var(--font-display);
    font-size: 12px;
    line-height: 1.3333;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .02em;
    color: var(--channels-default);
}

.dc-circle-selection {
    box-sizing: border-box;
    border-radius: 50%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
    cursor: default;
    pointer-events: none;
    box-shadow: inset 0 0 0 2px var(--brand-500),inset 0 0 0 4px var(--background-primary);
}

.dc-circle-selection-check {
    position: absolute;
    right: 0;
    color: var(--brand-500);
}

.dc-color-swatch-selectable {
    box-sizing: border-box;
    position: relative;
    height: 60px;
    width: 60px;
    cursor: pointer;
}

.dc-color-swatch-selectable > .dc-color-swatch {
    height: 60px;
    width: 60px;
}

.dc-changelog-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-top: 40px;
    max-width: 500px;
}

.dc-changelog-title::after {
    content: "";
    height: 1px;
    flex: 1 1 auto;
    margin-left: 4px;
    opacity: .6;
}

.dc-changelog-title-improved {
    color: var(--text-brand);
}

.dc-changelog-title-improved::after {
    background-color: var(--text-brand);
}

.dc-changelog-title-added {
    color: var(--status-positiveve);
}

.dc-changelog-title-added::after {
    background-color: var(--status-positiveve);
}

.dc-changelog-title-fixed {
    color: var(--text-danger);
}

.dc-changelog-title-fixed::after {
    background-color: var(--text-danger);
}

.dc-changelog-title-progress {
    color: var(--text-warning);
}

.dc-changelog-title-progress::after {
    background-color: var(--text-warning);
}

.dc-changes-list {
    margin: 20px 0 8px 20px;
    max-width: 480px;
}

.dc-change {
    position: relative;
    list-style: none;
    margin-bottom: 8px;
    -webkit-user-select: text;
    -moz-user-select: text;
    user-select: text;
}

.dc-change::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -15px;
    width: 6px;
    height: 6px;
    margin-top: -4px;
    margin-left: -3px;
    border-radius: 50%;
    opacity: .3;
}

.theme-dark .dc-change::before {
    background-color: #e3e5e8;
}

@supports (color:rgba(0,0,0,0))and (top:var(--f)) {
    .theme-dark .dc-change::before {
        background-color: hsl(216deg calc(9.8%* 1) 90%);
    }
}

.theme-light .dc-change::before {
    background-color: #80848e;
}

@supports (color:rgba(0,0,0,0))and (top:var(--f)) {
    .theme-light .dc-change::before {
        background-color: hsl(223deg calc(5.8%* 1)52.9%);
    }
}

.dc-footer-social-link {
    margin-right: 16px;
    color: var(--text-link);
    text-decoration: var(--link-decoration);
}

.theme-dark .dc-footer-social-link {
    color: var(--primary-300);
}

.theme-light .dc-footer-social-link {
    color: var(--black-500);
}

.dc-footer-note {
    font-family: var(--font-primary);
    font-size: 12px;
    line-height: 1.3333;
    font-weight: 400;
    color: var(--text-default);
}

.dc-modal-header-subtitle {
    font-family: var(--font-primary);
    font-size: 12px;
    line-height: 1.3333;
    font-weight: 400;
    color: var(--text-default);
}

.theme-dark .dc-changelog-desc,
.theme-dark .dc-change {
    color: #c4c9ce;
}

@supports (color:rgba(0,0,0,0))and (top:var(--f)) {
    .theme-dark .dc-changelog-desc,
    .theme-dark .dc-change {
        color: hsl(210deg calc(9.3%* 1)78.8%);
    }
}

.theme-ight .dc-changelog-desc,
.theme-light .dc-change {
    color: #80848e;
}

@supports (color:rgba(0,0,0,0))and (top:var(--f)) {
    .theme-ight .dc-changelog-desc,
    .theme-light .dc-change  {
        color: hsl(223deg calc(5.8%* 1)52.9%);
    }
}

.dc-changelog-desc {
    max-width: 500px;
}

.dc-select-popout {
    position: absolute;
    min-height: 0;
    flex: 1 1 auto;
    box-sizing: border-box;
    border: 1px solid var(--background-tertiary);
    background: var(--base-lower);
    border-radius: 0 0 4px 4px;
    overflow: hidden scroll;
    scrollbar-width: none;
    top: 36px;
    left: 0;
    z-index: 10000;
}

.dc-select-option {
    padding: 12px;
    cursor: pointer;
    color: var(--interactive-normal);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    font-weight: 500;
    box-sizing: border-box;
}

.dc-select-option[aria-selected="true"] {
    color: var(--interactive-active);
    background-color: var(--background-modifier-selected);
}

.dc-select-selected {
    display: flex;
    align-items: center;
    gap: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.dc-select-caret {
    display: flex;
    align-items: center;
    gap: 4px;
}

.dc-select {
    background-color: var(--input-background);
    color: var(--text-default);
    font-weight: 500;
    border: 1px solid var(--input-background);
    padding: 8px 8px 8px 12px;
    cursor: pointer;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-radius: 4px;
    position: relative;
}
`;
