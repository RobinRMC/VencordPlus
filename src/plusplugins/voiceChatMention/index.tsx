/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated, nickwoah, and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { insertTextIntoChatInputBox } from "@utils/discord";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Menu, UserStore } from "@webpack/common";
import { Channel } from "discord-types/general";

const SortedVoiceStateStore = findByPropsLazy("getVoiceStatesForChannel");

async function getVoiceChannelMentions(channel: Channel) {
    return await SortedVoiceStateStore.getVoiceStatesForChannel(channel)
        .filter((value: any) => value.user.id !== UserStore.getCurrentUser().id)
        .map((value: any) => {
            return `<@${value.user.id}>`;
        })
        .join(" ");
}

export default definePlugin({
    name: "VoiceChatMention",
    description: "Adds a context menu button to put mentions of all of the users in a voice chat (except yourself) in the text box",
    authors: [
        {
            id: 644298972420374528n,
            name: "Nick"
        }
    ],
    contextMenus: {
        "channel-context"(children, { channel }: { channel: Channel; }) {
            if (channel.isVocal()) children.push(
                <Menu.MenuItem
                    id="voice-mention-all-users"
                    label="Mention All Users"
                    action={async () => {
                        insertTextIntoChatInputBox(await getVoiceChannelMentions(channel));
                    }}
                />
            );
        }
    }
});
