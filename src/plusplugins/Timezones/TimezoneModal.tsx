/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { classNameFactory } from "@api/Styles";
import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { Button, Forms, SearchableSelect, useEffect, useMemo, useState } from "@webpack/common";

import { DATASTORE_KEY, settings, timezones } from ".";
import { getTimezone, setTimezone, setUserDatabaseTimezone } from "./database";

export async function setUserTimezone(userId: string, timezone: string | null) {
    timezones[userId] = timezone;
    await DataStore.set(DATASTORE_KEY, timezones);
}

const cl = classNameFactory("vc-timezone-");

export function SetTimezoneModal({ userId, modalProps, database }: { userId: string, modalProps: ModalProps; database?: boolean; }) {
    const [currentValue, setCurrentValue] = useState<string | null>(timezones[userId] ?? null);

    useEffect(() => {
        const localTimezone = timezones[userId];
        const shouldUseDatabase =
            settings.store.useDatabase &&
            (settings.store.preferDatabaseOverLocal || !localTimezone);

        const value = shouldUseDatabase
            ? getTimezone(userId) ?? localTimezone
            : localTimezone;

        setCurrentValue(value ?? Intl.DateTimeFormat().resolvedOptions().timeZone);
    }, [userId, settings.store.useDatabase, settings.store.preferDatabaseOverLocal]);

    const options = useMemo(() => {
        return Intl.supportedValuesOf("timeZone").map(timezone => {
            const offset = new Intl.DateTimeFormat(undefined, { timeZone: timezone, timeZoneName: "short" })
                .formatToParts(new Date())
                .find(part => part.type === "timeZoneName")!.value;

            return { label: `${timezone} (${offset})`, value: timezone };
        });
    }, []);

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader className={cl("modal-header")}>
                <Forms.FormTitle tag="h2">
                    Time Zones
                </Forms.FormTitle>
                <ModalCloseButton onClick={modalProps.onClose} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
                <section className={Margins.bottom16}>
                    <Forms.FormTitle tag="h3">
                        Select Time Zone
                    </Forms.FormTitle>

                    <SearchableSelect
                        options={options}
                        value={options.find(o => o.value === currentValue)}
                        placeholder={"Select a Timezone"}
                        maxVisibleItems={5}
                        closeOnSelect={true}
                        onChange={v => setCurrentValue(v)}
                    />
                </section>
            </ModalContent>

            <ModalFooter className={cl("modal-footer")}>
                {!database && (
                    <Button
                        color={Button.Colors.RED}
                        onClick={async () => {
                            await setUserTimezone(userId, null);
                            modalProps.onClose();
                        }}
                    >
                        Delete Time Zone
                    </Button>
                )}
                <Button
                    color={Button.Colors.BRAND}
                    disabled={currentValue === null}
                    onClick={async () => {
                        if (database) {
                            await setUserDatabaseTimezone(userId, currentValue);
                            await setTimezone(currentValue!);
                        } else {
                            await setUserTimezone(userId, currentValue);
                        }

                        modalProps.onClose();
                    }}
                >
                    Save
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
