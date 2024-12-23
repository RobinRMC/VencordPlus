/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Patch, PluginAuthor, PluginDef } from "@utils/types";

import { fakeD } from "../fakeDeafen";
import { PluginInfo } from "./constants";
import { replacedUserPanelComponent } from "./patches";

export default new class Plugin implements PluginDef {
    readonly name: string;
    readonly description: string;
    readonly authors: PluginAuthor[];
    readonly patches: Omit<Patch, "plugin">[];

    readonly replacedUserPanelComponent: typeof replacedUserPanelComponent;

    constructor() {
        this.name = PluginInfo.PLUGIN_NAME;
        this.description = PluginInfo.DESCRIPTION;
        this.authors = PluginInfo.AUTHORS as PluginAuthor[];

        this.replacedUserPanelComponent = replacedUserPanelComponent.bind(this);
        this.patches = [{
            find: "--custom-app-panels-height",
            replacement: {
                match: /(\w+\.\w+\(\w+,{\w+:function\(\){)return (\w)+}/,
                replace: "$1 $self.storedComp = $2; return $self.replacedUserPanelComponent}"
            }
        }];
    }
};

export const DeafenIcon = (props: React.ComponentProps<"svg">) => {
    const isFakeD = fakeD;

    return (
        <svg
            aria-hidden="true"
            role="img"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            {isFakeD ? (
                <>
                    {
                        <><path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z" fill="var(--interactive-normal)"></path><path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z" fill="var(--interactive-normal)"></path><path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z" fill="currentColor"></path></>
                    }
                </>
            ) : (
                <>
                    {
                        <><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="var(--interactive-normal)"></path></svg></>
                    }
                </>
            )}
        </svg>
    );
};

export * from "./components";
export * from "./discordModules";
export * from "./emitter";
export * from "./icons";
export * from "./patchers";
export * from "./patches";
export * from "./store";
export * as types from "./types";
export * from "./utils";
