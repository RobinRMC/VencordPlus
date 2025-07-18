/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export default `[data-theme="discord-vr"] .dc-switch {
    height: 28px;
    border-radius: 16px;
    width: 44px;
    box-sizing: border-box;
    border: 1px solid transparent;
}

[data-theme="discord-vr"] .dc-button {
    border-radius: 8px;
    transition-duration: .3s;
}

[data-theme="discord-vr"] .dc-button.dc-button-primary,
[data-theme="discord-vr"] .dc-button.dc-button-secondary {
    border-color: var(--button-secondary-background);
    color: var(--button-outline-primary-text);
}

[data-theme="discord-vr"] .dc-button:not(.dc-button-outlined).dc-button-primary,
[data-theme="discord-vr"] .dc-button:not(.dc-button-outlined).dc-button-secondary {
    background-color: var(--button-secondary-background);
    color: var(--white-500);
}

[data-theme="discord-vr"] .dc-button.dc-button-primary:hover,
[data-theme="discord-vr"] .dc-button.dc-button-secondary:hover {
    background-color: var(--button-secondary-background-hover);
    border-color: var(--button-secondary-background-hover);
    color: var(--button-outline-primary-text-hover);
}

[data-theme="discord-vr"] .dc-button.dc-button-primary:active,
[data-theme="discord-vr"] .dc-button.dc-button-secondary:active {
    background-color: var(--button-secondary-background-active);
    border-color: var(--button-secondary-background-active);
    color: var(--button-outline-primary-text-active);
}

[data-theme="discord-vr"] .dc-button.dc-button-brand {
    color: var(--button-outline-brand-text);
    border-color: var(--brand-500);
}

[data-theme="discord-vr"] .dc-button:not(.dc-button-outlined).dc-button-brand {
    color: var(--white-500);
    background-color: var(--brand-500);
}

[data-theme="discord-vr"] .dc-button.dc-button-brand:hover {
    background-color: var(--brand-560);
    border-color: var(--brand-560);
}

[data-theme="discord-vr"] .dc-button.dc-button-brand:active {
    background-color: var(--brand-600);
    border-color: var(--brand-600);
}

[data-theme="discord-vr"] .dc-button.dc-button-danger {
    color: var(--button-outline-danger-text);
    border-color: var(--button-danger-background);
}

[data-theme="discord-vr"] .dc-button:not(.dc-button-outlined).dc-button-danger {
    color: var(--white-500);
    background-color: var(--button-danger-background);
}

[data-theme="discord-vr"] .dc-button.dc-button-danger:hover {
    background-color: var(--button-danger-background-hover);
    border-color: var(--button-danger-background-hover);
}

[data-theme="discord-vr"] .dc-button.dc-button-danger:active {
    background-color: var(--button-danger-background-active);
    border-color: var(--button-danger-background-active);
}

[data-theme="discord-vr"] .dc-switch.checked {
    border-color: var(--input-border);
    background-color: var(--brand-500);
}

[data-theme="discord-vr"] .dc-switch-handle {
    display: block;
    position: absolute;
    left: 0;
    width: 28px;
    height: 20px;
    margin: 3px;
}

[data-theme="discord-vr"] .dc-radio-redesign {
    display: inline;
}

[data-theme="discord-vr"] .dc-radio {
    display: none;
}

[data-theme="discord-vr"] .dc-menu-caret {
    width: 20px;
    height: 20px;
}

[data-theme="discord-vr"] .dc-modal-content {
    padding: var(--spacing-24);
}

[data-theme="discord-vr"] .dc-modal-footer {
    border-radius: 0 0 5px 5px;
    padding: 16px;
    gap: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    padding-left: var(--spacing-24);
    padding-right: var(--spacing-24);
    padding-top: 0;
    background: none;
    box-shadow: none;
}

[data-theme="discord-vr"] .dc-modal-header {
    border-radius: 4px 4px 0 0;
    word-wrap: break-word;
    font-family: var(--font-display);
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
    box-shadow: none;
    padding-bottom: 0;
}

[data-theme="discord-vr"] .dc-modal-footer > .dc-button {
    margin-left: 8px;
}

.dc-modal[data-theme="discord-vr"] {
    background-color: var(--bg-base-primary);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-subtle);
}

[data-theme="discord-vr"] .dc-field-header {
    color: var(--header-primary);
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 8px;
    text-transform: capitalize;
}

[data-theme="discord-vr"] .dc-switch-thumb {
    fill: #fff !important;
}

[data-theme="discord-vr"] .dc-contextmenu,
.dc-contextmenu[data-theme="discord-vr"] {
    background: var(--background-floating);
    padding: 6px 8px;
    gap: 0;
    min-width: 188px;
    max-width: 320px;
    box-sizing: border-box;
    background-color: var(--background-surface-higher);
    border-radius: 8px;
    border: 1px solid var(--border-subtle);
    box-shadow: var(--shadow-high);
}

[data-theme="discord-vr"] .dc-contextmenu-item {
    border: none;
    transition: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--interactive-normal);
    background-color: transparent;
    border-radius: 4px;
    margin: 0;
    padding: 8px;
}

[data-theme="discord-vr"] .dc-contextmenu-item:hover,
[data-theme="discord-vr"] .dc-contextmenu-item:active {
    background-color: var(--bg-mod-subtle);
    color: var(--header-primary);
}

[data-theme="discord-vr"] .dc-contextmenu-item-danger {
    color: var(--text-danger);
}

[data-theme="discord-vr"] .dc-contextmenu-item-danger:hover {
    background-color: var(--info-danger-background);
    color: var(--text-danger);
}

[data-theme="discord-vr"] .dc-contextmenu-item > svg {
    width: 20px;
    height: 20px;
}

[data-theme="discord-vr"] .dc-contextmenu-color {
    border-radius: 8px;
}

.dc-app-root[data-theme="discord-vr"] {
    background-color: var(--bg-base-primary);
}

.dc-app-root[data-theme="discord-vr"] > .dc-app-sidebar {
    border-radius: var(--radius-md);
    background: var(--bg-overlay-3,var(--bg-base-secondary));
    border: 1px solid rgba(255 255 255 / 10%);
    padding: 8px;
}

[data-theme="discord-vr"] .dc-colorway {
    background: var(--background-mod-faint);
    border-radius: 8px;
    border: 1px solid rgba(255 255 255 / 10%) !important;
    transition:
        background-color 0.1s ease-in-out,
        border-color 0.1s ease-in-out;
}

[data-theme="discord-vr"] .dc-colorway:hover,
[data-theme="discord-vr"] .dc-colorway:focus {
    background: var(--bg-mod-subtle);
}

[data-theme="discord-vr"] .dc-colorway[aria-checked="true"] {
    border-color: var(--user-profile-border);
    background: var(--bg-mod-strong);
}

[data-theme="discord-vr"] .dc-colorway[aria-invalid="true"] {
    background-color: var(--button-danger-background);
    border-color: var(--button-outline-danger-text);
}

[data-theme="discord-vr"] .dc-colorway[aria-invalid="true"]:hover {
    background-color: var(--button-danger-background-hover);
}

[data-theme="discord-vr"] .dc-colorway[aria-invalid="true"]:active {
    background-color: var(--button-danger-background-active);
}

[data-theme="discord-vr"] .dc-textbox {
    background: rgba(0 0 0 / 8%);
    border-radius: 8px;
    border: 1px solid var(--input-border);
}

[data-theme="discord-vr"] .dc-codeblock {
    background: rgba(0 0 0 / 8%);
    border-radius: 8px;
    border: 1px solid var(--input-border);
}

[data-theme="discord-vr"] .dc-textbox:focus,
[data-theme="discord-vr"] .dc-textbox:has(:focus),
[data-theme="discord-vr"] .dc-codeblock:focus {
    border-color: var(--text-link);
}

[data-theme="discord-vr"] .dc-button:not(.dc-button-outlined) {
    border: 1px solid rgba(255 255 255 / 10%);
}

[data-theme="discord-vr"] .dc-page-header {
    border-radius: 0;
    border-top-right-radius: 4px;
    padding: 0;
    margin: 0;
    background-color: transparent;
}

[data-theme="discord-vr"] .dc-menu-tabs {
    padding-bottom: 16px;
}

[data-theme="discord-vr"] .dc-menu-tab {
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

[data-theme="discord-vr"] .dc-menu-tab:hover {
    color: var(--interactive-hover);
    border-bottom-color: var(--brand-500);
}

[data-theme="discord-vr"] .dc-menu-tab.active {
    cursor: default;
    color: var(--interactive-active);
    border-bottom-color: var(--control-brand-foreground);
}

[data-theme="discord-vr"] .dc-divider {
    border-color: var(--background-modifier-accent);
}

[data-theme="discord-vr"] .dc-select-popout {
    min-height: 0;
    flex: 1 1 auto;
    box-sizing: border-box;
    border: 1px solid var(--background-tertiary);
    background: var(--base-lower);
    border-radius: 0 0 4px 4px;
}

[data-theme="discord-vr"] .dc-select-option {
    padding: 12px;
    cursor: pointer;
    color: var(--interactive-normal);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    font-weight: 500;
    box-sizing: border-box;
}

[data-theme="discord-vr"] .dc-select-option[aria-selected="true"] {
    color: var(--interactive-active);
    background-color: var(--background-modifier-selected);
}
`;
