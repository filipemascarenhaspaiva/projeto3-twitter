'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">aula-15-jwt-revisao documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' : 'data-target="#xs-controllers-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' :
                                            'id="xs-controllers-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' : 'data-target="#xs-injectables-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' :
                                        'id="xs-injectables-links-module-AppModule-c27868bc520cd079bdc5d91164a8455b3461be91d6a8cc9a50b72940900b68d9102b5e2476bbc18fbb87293c8608fb18685be74998d5f7de2227308eadd918f0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' : 'data-target="#xs-controllers-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' :
                                            'id="xs-controllers-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' : 'data-target="#xs-injectables-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' :
                                        'id="xs-injectables-links-module-AuthModule-e84cbe68be80c6a7eb2bba22db0fd61c8bf96fad0386a6162bc98cba56df8f14d601043dbb4c82dcb0133f0a0bbff890f0f22981248a40d06d9683528b805215"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-4e8cadeb3da87ea0ce0e9d33f03c915f5786045fec6afcf313618dd28ed4481f691441d5b9577d1b8d6c6531a9e113be99b6167ede57b58b4559bdb8fd6ff4c0"' : 'data-target="#xs-injectables-links-module-PrismaModule-4e8cadeb3da87ea0ce0e9d33f03c915f5786045fec6afcf313618dd28ed4481f691441d5b9577d1b8d6c6531a9e113be99b6167ede57b58b4559bdb8fd6ff4c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-4e8cadeb3da87ea0ce0e9d33f03c915f5786045fec6afcf313618dd28ed4481f691441d5b9577d1b8d6c6531a9e113be99b6167ede57b58b4559bdb8fd6ff4c0"' :
                                        'id="xs-injectables-links-module-PrismaModule-4e8cadeb3da87ea0ce0e9d33f03c915f5786045fec6afcf313618dd28ed4481f691441d5b9577d1b8d6c6531a9e113be99b6167ede57b58b4559bdb8fd6ff4c0"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguidoresModule.html" data-type="entity-link" >SeguidoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeguidoresModule-c29ea77d6b01f3007aa31023cde0460728c0f7d65f6654f6109492a382918c9b3444e48e5cdd04b44b80df3671af71022d153c9feefeed0e5fb9b6187113919a"' : 'data-target="#xs-controllers-links-module-SeguidoresModule-c29ea77d6b01f3007aa31023cde0460728c0f7d65f6654f6109492a382918c9b3444e48e5cdd04b44b80df3671af71022d153c9feefeed0e5fb9b6187113919a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguidoresModule-c29ea77d6b01f3007aa31023cde0460728c0f7d65f6654f6109492a382918c9b3444e48e5cdd04b44b80df3671af71022d153c9feefeed0e5fb9b6187113919a"' :
                                            'id="xs-controllers-links-module-SeguidoresModule-c29ea77d6b01f3007aa31023cde0460728c0f7d65f6654f6109492a382918c9b3444e48e5cdd04b44b80df3671af71022d153c9feefeed0e5fb9b6187113919a"' }>
                                            <li class="link">
                                                <a href="controllers/SeguidoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguidoresController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguindoModule.html" data-type="entity-link" >SeguindoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' : 'data-target="#xs-controllers-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' :
                                            'id="xs-controllers-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' }>
                                            <li class="link">
                                                <a href="controllers/SeguindoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguindoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' : 'data-target="#xs-injectables-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' :
                                        'id="xs-injectables-links-module-SeguindoModule-d78393f55e46f1b9acd28fbab549058e6822e7ab79764a46670095e36a20fe2894ec1acf5252664b11064e6fa8ccd9fda950570a122a27da081b8a705793f77a"' }>
                                        <li class="link">
                                            <a href="injectables/seguindosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >seguindosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TweetModule.html" data-type="entity-link" >TweetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' : 'data-target="#xs-controllers-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' :
                                            'id="xs-controllers-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' }>
                                            <li class="link">
                                                <a href="controllers/TweetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' : 'data-target="#xs-injectables-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' :
                                        'id="xs-injectables-links-module-TweetModule-e1e03713a72b107381392595c5d23e108b493afdbea9b0f68b29a539a8527d93a544652350dd8acfea95e1e500cd0313c6652cf53e6901353d3db77642efd940"' }>
                                        <li class="link">
                                            <a href="injectables/tweetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >tweetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' : 'data-target="#xs-controllers-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' :
                                            'id="xs-controllers-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' : 'data-target="#xs-injectables-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' :
                                        'id="xs-injectables-links-module-UsuarioModule-bcfbb9b54e60b02c96bba74092fef38b9f4fa2a89c2032601150808b5d453f7e0a936014e0db71f2e3b027ee468b42ba42c14b1d82773da9a0d1a99c835e4790"' }>
                                        <li class="link">
                                            <a href="injectables/usuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >usuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguidoresController.html" data-type="entity-link" >SeguidoresController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguindoController.html" data-type="entity-link" >SeguindoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TweetController.html" data-type="entity-link" >TweetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuarioController.html" data-type="entity-link" >UsuarioController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSeguidoreDto.html" data-type="entity-link" >CreateSeguidoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSeguindoDto.html" data-type="entity-link" >CreateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTweetDto.html" data-type="entity-link" >CreateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguidore.html" data-type="entity-link" >Seguidore</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguindo.html" data-type="entity-link" >Seguindo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tweet.html" data-type="entity-link" >Tweet</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguidoreDto.html" data-type="entity-link" >UpdateSeguidoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguindoDto.html" data-type="entity-link" >UpdateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTweetDto.html" data-type="entity-link" >UpdateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/seguidoressService.html" data-type="entity-link" >seguidoressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/seguindosService.html" data-type="entity-link" >seguindosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/tweetsService.html" data-type="entity-link" >tweetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/usuariosService.html" data-type="entity-link" >usuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});