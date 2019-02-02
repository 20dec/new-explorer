<!-- ============================================================================================ *
 *                                                                                                *
 *                                       Xi Block Explorer                                        *
 *                                                                                                *
 * ---------------------------------------------------------------------------------------------- *
 * This file is part of the Galaxia Project - Xi Block Explorer                                   *
 * ---------------------------------------------------------------------------------------------- *
 *                                                                                                *
 * Copyright 2018 Galaxia Project Developers                                                      *
 *                                                                                                *
 * This program is free software: you can redistribute it and/or modify it under the terms of the *
 * GNU General Public License as published by the Free Software Foundation, either version 3 of   *
 * the License, or (at your option) any later version.                                            *
 *                                                                                                *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;      *
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.      *
 * See the GNU General Public License for more details.                                           *
 *                                                                                                *
 * You should have received a copy of the GNU General Public License along with this program.     *
 * If not, see <https://www.gnu.org/licenses/>.                                                   *
 *                                                                                                *
 * ============================================================================================ -->
<template>
    <div class="paper-wallet py3">

        <div class="section column container">
            <div class="section-header">
                <span style="font-size: 24px; padding: 0px;">Paper Wallet Generator</span>
                <div class="spacer"></div>
                <span v-on:click="generate()"
                    class="generate-button">
                    Generate
                </span>
            </div>
        </div>

        <div class="section column container" v-if="paperWallet && paperWallet.keys">
            <div class="section-header">
                <i class="far fa-fw fa-envelope"></i>
                <span>Address</span>
                <div class="spacer"></div>
            </div>
            <div class="flex column wallet-content">
                <span class="break-word">{{ paperWallet.keys.public_addr}}</span>
            </div>
        </div>

        <div class="section column container" v-if="paperWallet && paperWallet.keys">
            <div class="section-header">
                <i class="fas fa-fw fa-key"></i>
                <span>Public Keys</span>
                <div class="spacer"></div>
            </div>
            <div class="flex column wallet-content">
                <div class="flex row pb2 wrap">
                    <span class="key-label">View</span>
                    <span class="mono break-word">{{ paperWallet.keys.view.pub}}</span>
                </div>
                <div class="flex row wrap">
                    <span class="key-label">Spend</span>
                    <span class="mono break-word">{{ paperWallet.keys.spend.pub}}</span>
                </div>
            </div>
        </div>

        <div class="section column container" v-if="paperWallet && paperWallet.keys">
            <div class="section-header">
                <i class="fas fa-fw fa-lock"></i>
                <span>Secret</span>
                <div class="spacer"></div>
            </div>
            <div class="flex column wallet-content">
                <div class="flex row baseline pb3 wrap">
                    <span class="key-label">Seed</span>
                    <span class="mono">{{ paperWallet.mnemonic}}</span>
                </div>
                <div class="flex row baseline pb2 wrap">
                    <span class="key-label">View</span>
                    <span class="mono break-word">{{ paperWallet.keys.view.sec}}</span>
                </div>
                <div class="flex row baseline wrap">
                    <span class="key-label">Spend</span>
                    <span class="mono break-word">{{ paperWallet.keys.spend.sec}}</span>
                </div>
            </div>
        </div>
        <div class="spacer" ></div>
        <copyright></copyright>
    </div>
</template>

<script>
export default {
    name: 'paperWallet',
    data () {
        return {
            paperWallet: {}
        }
    },
    mounted: function () {

    },
    methods: {
        generate () {

            this.paperWallet = {};

            let seed = cnUtil.sc_reduce32(poor_mans_kdf(cnUtil.rand_32()));
            let keys = cnUtil.create_address(seed);
            let mnemonic = mn_encode(seed, "english");
            this.paperWallet = {
                seed,
                keys,
                mnemonic
            }
        }
    }
};
</script>

<style scoped>
.paper-wallet {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    box-sizing: border-box;
    align-items: center;
}
.generate-button {
    cursor: pointer;
    font-size: 18px;
    padding: 8px 16px;
    background-color: #2EC4B6;
    color: #FEFEFE;
    border-radius: 2px;
    width: 100px;
    text-align: center;
}
.generate-button:hover {

}
.wallet-content {
    padding: 0px 16px 16px 16px;
    font-size: 18px;
    max-width: calc(100vw - 32px);
}
.wallet-content span {
    max-width: calc(100vw - 32px);
}
.key-label {
    min-width: 100px;
    width: 100px;
}

@media all and (max-width: 700px) {
    .wrap {
        flex-wrap: wrap;
    }
}
</style>
