/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export default `/* stylelint-disable color-function-notation */
/* stylelint-disable custom-property-pattern */
/* stylelint-disable no-descending-specificity */
.dc-app-root[data-theme="discord"] {
    background-color: var(--modal-background);
}

[data-theme="discord"] .dc-divider {
    border-color: var(--background-modifier-accent);
}

[data-theme="discord"] .dc-switch-thumb {
    fill: #fff !important;
}

[data-theme="discord"] .dc-switch {
    background-color: rgb(128 132 142);
}

[data-theme="discord"] .dc-switch.checked {
    background-color: #23a55a;
}

[data-theme="discord"] .dc-button {
    transition:
        background-color var(--custom-button-transition-duration) ease,
        color var(--custom-button-transition-duration) ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 2px 16px;
    user-select: none;
}

[data-theme="discord"] .dc-button.dc-button-icon {
    padding: 4px;
}

[data-theme="discord"] > .dc-app-sidebar {
    background-color: var(--background-tertiary);
    box-shadow: inset 0 1px 0 hsl(var(--primary-630-hsl) / 60%);
    padding: 12px;
    border-radius: 4px;
}

.theme-light [data-theme="discord"] > .dc-app-sidebar {
    box-shadow: inset 0 1px 0 hsl(var(--primary-100-hsl) / 60%);
}

[data-theme="discord"] .dc-textbox {
    border-radius: 3px;
    color: var(--text-default);
    background-color: var(--input-background);
    height: 40px;
    padding: 10px;
    transition: none;
    font-size: 16px;
    border: none;
}

[data-theme="discord"] .dc-colorway {
    border-radius: 4px;
    background-color: var(--base-lower);
    border: none;
    color: var(--header-primary);
    transition:
        background-color 0.1s ease-in-out,
        border-color 0.1s ease-in-out;
}

[data-theme="discord"] .dc-colorway:hover,
[data-theme="discord"] .dc-colorway:focus {
    filter: none;
    background-color: var(--background-modifier-hover);
}

[data-theme="discord"] .dc-colorway[aria-checked="true"] {
    background-color: var(--background-modifier-selected);
}

[data-theme="discord"] .dc-colorway[aria-invalid="true"] {
    background-color: var(--button-danger-background);
}

[data-theme="discord"] .dc-colorway[aria-invalid="true"]:hover {
    background-color: var(--button-danger-background-hover);
}

[data-theme="discord"] .dc-colorway[aria-invalid="true"]:active {
    background-color: var(--button-danger-background-active);
}

[data-theme="discord"] .dc-badge {
    height: 16px;
    padding: 0 4px;
    border-radius: 4px;
    flex: 0 0 auto;
    background: var(--bg-brand);
    color: var(--white);
    text-transform: uppercase;
    vertical-align: top;
    display: inline-flex;
    align-items: start;
    text-indent: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
}

.dc-modal[data-theme="discord"] {
    box-shadow: var(--legacy-elevation-border), var(--legacy-elevation-high);
    background-color: var(--modal-background);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    pointer-events: all;
    position: relative;
}

[data-theme="discord"] .dc-menu-tabs {
    padding-bottom: 16px;
}

[data-theme="discord"] .dc-menu-tab {
    padding: 0;
    padding-bottom: 16px;
    margin-right: 32px;
    margin-bottom: -2px;
    border-bottom: 2px solid transparent;
    transition: none;
    border-radius: 0;
    background-color: transparent !important;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
}

[data-theme="discord"] .dc-menu-tab:hover {
    color: var(--interactive-hover);
    border-bottom-color: var(--brand-500);
}

[data-theme="discord"] .dc-menu-tab.active {
    cursor: default;
    color: var(--interactive-active);
    border-bottom-color: var(--control-brand-foreground);
}

[data-theme="discord"] .dc-modal-footer {
    border-radius: 0 0 5px 5px;
    background-color: var(--modal-footer-background);
    padding: 16px;
    box-shadow: inset 0 1px 0 hsl(var(--primary-630-hsl) / 60%);
    gap: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
}

.theme-light [data-theme="discord"] > .dc-modal-footer {
    box-shadow: inset 0 1px 0 hsl(var(--primary-100-hsl) / 60%);
}

[data-theme="discord"] .dc-modal-footer > .dc-button {
    margin-left: 8px;
}

[data-theme="discord"] .dc-modal-header {
    box-shadow:
        0 1px 0 0 hsl(var(--primary-800-hsl) / 30%),
        0 1px 2px 0 hsl(var(--primary-800-hsl) / 30%);
    border-radius: 4px 4px 0 0;
    transition: box-shadow 0.1s ease-out;
    word-wrap: break-word;
    font-family: var(--font-display);
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
}

.theme-light [data-theme="discord"] .dc-modal-header {
    box-shadow: 0 1px 0 0 hsl(var(--primary-300-hsl)/ 30%);
}

[data-theme="discord"] .dc-contextmenu,
.dc-contextmenu[data-theme="discord"] {
    background: var(--background-floating);
    box-shadow: var(--shadow-high);
    border-radius: 4px;
    padding: 6px 8px;
    border: none;
    gap: 0;
    min-width: 188px;
    max-width: 320px;
    box-sizing: border-box;
}

[data-theme="discord"] .dc-contextmenu-item {
    border: none;
    transition: none;
    margin: 2px 0;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--interactive-normal);
    background-color: transparent;
}

[data-theme="discord"] .dc-contextmenu-item:hover {
    background-color: var(--menu-item-default-hover-bg);
    color: var(--white);
}

[data-theme="discord"] .dc-contextmenu-item:active {
    background-color: var(--menu-item-default-active-bg);
    color: var(--white);
}

[data-theme="discord"] .dc-radio-selected {
    fill: var(--control-brand-foreground-new);
}

[data-theme="discord"] .dc-page-header {
    border-radius: 0;
    border-top-right-radius: 4px;
    padding: 0;
    margin: 0;
    background-color: transparent;
}

[data-theme="discord"] .dc-contextmenu-item-danger {
    color: var(--status-danger);
}

[data-theme="discord"] .dc-contextmenu-item-danger:hover {
    background-color: var(--menu-item-danger-hover-bg);
    color: var(--white);
}

[data-theme="discord"] .dc-contextmenu-item:hover > svg {
    color: var(--white);
}

[data-theme="discord"] .dc-contextmenu-color {
    border-radius: 4px;
}

.dc-radio-redesign {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    display: none;
}

[data-theme="discord"] .dc-field-header {
    font-family: var(--font-display);
    font-size: 12px;
    line-height: 1.3333;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .02em;
    color: var(--header-secondary);
}

[data-theme="discord"] .dc-field-header-error {
    color: var(--text-danger);
}

[data-theme="discord"] .colorwaysFeatureIconContainer {
    background-color: var(--modal-footer-background);
}

[data-theme="discord"] .dc-button.dc-button-primary,
[data-theme="discord"] .dc-button.dc-button-secondary {
    border-color: var(--button-secondary-background);
    color: var(--button-outline-primary-text);
}

[data-theme="discord"] .dc-button:not(.dc-button-outlined).dc-button-primary,
[data-theme="discord"] .dc-button:not(.dc-button-outlined).dc-button-secondary {
    background-color: var(--button-secondary-background);
    color: var(--white-500);
}

[data-theme="discord"] .dc-button.dc-button-primary:hover,
[data-theme="discord"] .dc-button.dc-button-secondary:hover {
    background-color: var(--button-secondary-background-hover);
    border-color: var(--button-secondary-background-hover);
    color: var(--button-outline-primary-text-hover);
}

[data-theme="discord"] .dc-button.dc-button-primary:active,
[data-theme="discord"] .dc-button.dc-button-secondary:active {
    background-color: var(--button-secondary-background-active);
    border-color: var(--button-secondary-background-active);
    color: var(--button-outline-primary-text-active);
}

[data-theme="discord"] .dc-button.dc-button-brand {
    color: var(--button-outline-brand-text);
    border-color: var(--brand-500);
}

[data-theme="discord"] .dc-button:not(.dc-button-outlined).dc-button-brand {
    color: var(--white-500);
    background-color: var(--brand-500);
}

[data-theme="discord"] .dc-button.dc-button-brand:hover {
    background-color: var(--brand-560);
    border-color: var(--brand-560);
}

[data-theme="discord"] .dc-button.dc-button-brand:active {
    background-color: var(--brand-600);
    border-color: var(--brand-600);
}

[data-theme="discord"] .dc-button.dc-button-danger {
    color: var(--button-outline-danger-text);
    border-color: var(--button-danger-background);
}

[data-theme="discord"] .dc-button:not(.dc-button-outlined).dc-button-danger {
    color: var(--white-500);
    background-color: var(--button-danger-background);
}

[data-theme="discord"] .dc-button.dc-button-danger:hover {
    background-color: var(--button-danger-background-hover);
    border-color: var(--button-danger-background-hover);
}

[data-theme="discord"] .dc-button.dc-button-danger:active {
    background-color: var(--button-danger-background-active);
    border-color: var(--button-danger-background-active);
}

[data-theme="discord"] .dc-codeblock {
    background-color: var(--input-background);
    border-radius: 3px;
    padding: 10px;
    border: none;
}

[data-theme="discord"] .dc-select-popout {
    min-height: 0;
    flex: 1 1 auto;
    box-sizing: border-box;
    border: 1px solid var(--background-tertiary);
    background: var(--base-lower);
    border-radius: 0 0 4px 4px;
}

[data-theme="discord"] .dc-select-option {
    padding: 12px;
    cursor: pointer;
    color: var(--interactive-normal);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    font-weight: 500;
    box-sizing: border-box;
}

[data-theme="discord"] .dc-select-option[aria-selected="true"] {
    color: var(--interactive-active);
    background-color: var(--background-modifier-selected);
}
`;
