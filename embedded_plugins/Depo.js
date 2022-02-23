(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/@darkforest_eth/types/dist/arrival.js
  var require_arrival = __commonJS({
    "node_modules/@darkforest_eth/types/dist/arrival.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/artifact.js
  var require_artifact = __commonJS({
    "node_modules/@darkforest_eth/types/dist/artifact.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.artifactNameFromArtifact = exports.ArtifactRarityNames = exports.ArtifactRarity = exports.ArtifactTypeNames = exports.ArtifactType = void 0;
      exports.ArtifactType = {
        Unknown: 0,
        Monolith: 1,
        Colossus: 2,
        Spaceship: 3,
        Pyramid: 4,
        Wormhole: 5,
        PlanetaryShield: 6,
        PhotoidCannon: 7,
        BloomFilter: 8,
        BlackDomain: 9,
        ShipMothership: 10,
        ShipCrescent: 11,
        ShipWhale: 12,
        ShipGear: 13,
        ShipTitan: 14
      };
      exports.ArtifactTypeNames = {
        [exports.ArtifactType.Unknown]: "Unknown",
        [exports.ArtifactType.Monolith]: "Monolith",
        [exports.ArtifactType.Colossus]: "Colossus",
        [exports.ArtifactType.Spaceship]: "Spaceship",
        [exports.ArtifactType.Pyramid]: "Pyramid",
        [exports.ArtifactType.Wormhole]: "Wormhole",
        [exports.ArtifactType.PlanetaryShield]: "Planetary Shield",
        [exports.ArtifactType.BlackDomain]: "Black Domain",
        [exports.ArtifactType.PhotoidCannon]: "Photoid Cannon",
        [exports.ArtifactType.BloomFilter]: "Bloom Filter",
        [exports.ArtifactType.ShipMothership]: "Mothership",
        [exports.ArtifactType.ShipCrescent]: "Crescent",
        [exports.ArtifactType.ShipWhale]: "Whale",
        [exports.ArtifactType.ShipGear]: "Gear",
        [exports.ArtifactType.ShipTitan]: "Titan"
      };
      exports.ArtifactRarity = {
        Unknown: 0,
        Common: 1,
        Rare: 2,
        Epic: 3,
        Legendary: 4,
        Mythic: 5
      };
      exports.ArtifactRarityNames = {
        [exports.ArtifactRarity.Unknown]: "Unknown",
        [exports.ArtifactRarity.Common]: "Common",
        [exports.ArtifactRarity.Rare]: "Rare",
        [exports.ArtifactRarity.Epic]: "Epic",
        [exports.ArtifactRarity.Legendary]: "Legendary",
        [exports.ArtifactRarity.Mythic]: "Mythic"
      };
      var godGrammar = {
        god1: [
          "c'",
          "za",
          "ry'",
          "ab'",
          "bak'",
          "dt'",
          "ek'",
          "fah'",
          "q'",
          "qo",
          "van",
          "bow",
          "gui",
          "si"
        ],
        god2: [
          "thun",
          "tchalla",
          "thovo",
          "saron",
          "zoth",
          "sharrj",
          "thulu",
          "ra",
          "wer",
          "doin",
          "renstad",
          "nevere",
          "goth",
          "anton",
          "layton"
        ]
      };
      function artifactNameFromArtifact2(artifact) {
        const idNum = parseInt(artifact.id, 16);
        const roll1 = idNum % 7919 % godGrammar.god1.length;
        const roll2 = idNum % 7883 % godGrammar.god2.length;
        const name = godGrammar.god1[roll1] + godGrammar.god2[roll2];
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        return nameCapitalized;
      }
      exports.artifactNameFromArtifact = artifactNameFromArtifact2;
    }
  });

  // node_modules/@darkforest_eth/types/dist/capture_zones.js
  var require_capture_zones = __commonJS({
    "node_modules/@darkforest_eth/types/dist/capture_zones.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/claim.js
  var require_claim = __commonJS({
    "node_modules/@darkforest_eth/types/dist/claim.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/database_types.js
  var require_database_types = __commonJS({
    "node_modules/@darkforest_eth/types/dist/database_types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/diagnostics.js
  var require_diagnostics = __commonJS({
    "node_modules/@darkforest_eth/types/dist/diagnostics.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/event.js
  var require_event = __commonJS({
    "node_modules/@darkforest_eth/types/dist/event.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/game_types.js
  var require_game_types = __commonJS({
    "node_modules/@darkforest_eth/types/dist/game_types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BiomeNames = exports.Biome = exports.SpaceTypeNames = exports.SpaceType = void 0;
      exports.SpaceType = {
        NEBULA: 0,
        SPACE: 1,
        DEEP_SPACE: 2,
        DEAD_SPACE: 3
      };
      exports.SpaceTypeNames = {
        [exports.SpaceType.NEBULA]: "Nebula",
        [exports.SpaceType.SPACE]: "Space",
        [exports.SpaceType.DEEP_SPACE]: "Deep Space",
        [exports.SpaceType.DEAD_SPACE]: "Dead Space"
      };
      exports.Biome = {
        UNKNOWN: 0,
        OCEAN: 1,
        FOREST: 2,
        GRASSLAND: 3,
        TUNDRA: 4,
        SWAMP: 5,
        DESERT: 6,
        ICE: 7,
        WASTELAND: 8,
        LAVA: 9,
        CORRUPTED: 10
      };
      exports.BiomeNames = {
        [exports.Biome.UNKNOWN]: "Unknown",
        [exports.Biome.OCEAN]: "Ocean",
        [exports.Biome.FOREST]: "Forest",
        [exports.Biome.GRASSLAND]: "Grassland",
        [exports.Biome.TUNDRA]: "Tundra",
        [exports.Biome.SWAMP]: "Swamp",
        [exports.Biome.DESERT]: "Desert",
        [exports.Biome.ICE]: "Ice",
        [exports.Biome.WASTELAND]: "Wasteland",
        [exports.Biome.LAVA]: "Lava",
        [exports.Biome.CORRUPTED]: "Corrupted"
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/gas_prices.js
  var require_gas_prices = __commonJS({
    "node_modules/@darkforest_eth/types/dist/gas_prices.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/hat.js
  var require_hat = __commonJS({
    "node_modules/@darkforest_eth/types/dist/hat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.HatType = void 0;
      exports.HatType = {
        GraduationCap: "GraduationCap",
        PartyHat: "PartyHat",
        Fish: "Fish",
        TopHat: "TopHat",
        Fez: "Fez",
        ChefHat: "ChefHat",
        CowboyHat: "CowboyHat",
        PopeHat: "PopeHat",
        Squid: "Squid",
        SantaHat: "SantaHat"
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/identifier.js
  var require_identifier = __commonJS({
    "node_modules/@darkforest_eth/types/dist/identifier.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/modal.js
  var require_modal = __commonJS({
    "node_modules/@darkforest_eth/types/dist/modal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TooltipName = exports.ModalManagerEvent = exports.CursorState = exports.ModalName = void 0;
      exports.ModalName = {
        Help: "Help",
        PlanetDetails: "PlanetDetails",
        Leaderboard: "Leaderboard",
        PlanetDex: "PlanetDex",
        UpgradeDetails: "UpgradeDetails",
        TwitterVerify: "TwitterVerify",
        Broadcast: "Broadcast",
        Hats: "Hats",
        Settings: "Settings",
        YourArtifacts: "YourArtifacts",
        ManageArtifacts: "ManageArtifacts",
        Plugins: "Plugins",
        PluginWarning: "PluginWarning",
        PluginEditor: "PluginEditor",
        PlanetContextPane: "PlanetContextPane",
        TransactionLog: "TransactionLog",
        WithdrawSilver: "WithdrawSilver",
        Diagnostics: "Diagnostics",
        ArtifactConversation: "ArtifactConversation",
        ArtifactDetails: "ArtifactDetails",
        MapShare: "MapShare",
        ManageAccount: "ManageAccount",
        Onboarding: "Onboarding",
        Private: "Private"
      };
      exports.CursorState = {
        Normal: "Normal",
        TargetingExplorer: "TargetingExplorer",
        TargetingForces: "TargetingForces"
      };
      exports.ModalManagerEvent = {
        StateChanged: "StateChanged",
        MiningCoordsUpdate: "MiningCoordsUpdate"
      };
      exports.TooltipName = {
        SilverGrowth: "SilverGrowth",
        SilverCap: "SilverCap",
        Silver: "Silver",
        TwitterHandle: "TwitterHandle",
        Bonus: "Bonus",
        MinEnergy: "MinEnergy",
        Time50: "Time50",
        Time90: "Time90",
        Pirates: "Pirates",
        Upgrades: "Upgrades",
        PlanetRank: "PlanetRank",
        MaxLevel: "MaxLevel",
        FindArtifact: "FindArtifact",
        ArtifactStored: "ArtifactStored",
        SelectedSilver: "SelectedSilver",
        Rank: "Rank",
        Score: "Score",
        MiningPause: "MiningPause",
        MiningTarget: "MiningTarget",
        HashesPerSec: "HashesPerSec",
        CurrentMining: "CurrentMining",
        HoverPlanet: "HoverPlanet",
        SilverProd: "SilverProd",
        TimeUntilActivationPossible: "TimeUntilActivationPossible",
        DepositArtifact: "DepositArtifact",
        DeactivateArtifact: "DeactivateArtifact",
        WithdrawArtifact: "WithdrawArtifact",
        ActivateArtifact: "ActivateArtifact",
        RetryTransaction: "RetryTransaction",
        CancelTransaction: "CancelTransaction",
        PrioritizeTransaction: "PrioritizeTransaction",
        DefenseMultiplier: "DefenseMultiplier",
        EnergyCapMultiplier: "EnergyCapMultiplier",
        EnergyGrowthMultiplier: "EnergyGrowthMultiplier",
        RangeMultiplier: "RangeMultiplier",
        SpeedMultiplier: "SpeedMultiplier",
        BonusEnergyCap: "BonusEnergyCap",
        BonusEnergyGro: "BonusEnergyGro",
        BonusRange: "BonusRange",
        BonusSpeed: "BonusSpeed",
        BonusDefense: "BonusDefense",
        BonusSpaceJunk: "BonusSpaceJunk",
        Energy: "Energy",
        EnergyGrowth: "EnergyGrowth",
        Range: "Range",
        Speed: "Speed",
        Defense: "Defense",
        SpaceJunk: "SpaceJunk",
        Abandon: "Abandon",
        Clowntown: "Clowntown",
        ArtifactBuff: "ArtifactBuff",
        ModalHelp: "ModalHelp",
        ModalPlanetDetails: "ModalPlanetDetails",
        ModalLeaderboard: "ModalLeaderboard",
        ModalPlanetDex: "ModalPlanetDex",
        ModalUpgradeDetails: "ModalUpgradeDetails",
        ModalTwitterVerification: "ModalTwitterVerification",
        ModalTwitterBroadcast: "ModalTwitterBroadcast",
        ModalHats: "ModalHats",
        ModalSettings: "ModalSettings",
        ModalYourArtifacts: "ModalYourArtifacts",
        ModalFindArtifact: "ModalFindArtifact",
        ModalPlugins: "ModalPlugins",
        ModalWithdrawSilver: "ModalWithdrawSilver",
        NetworkHealth: "NetworkHealth",
        WithdrawSilverButton: "WithdrawSilverButton",
        Invadable: "Invadable",
        Capturable: "Capturable",
        Empty: "Empty"
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/planet.js
  var require_planet = __commonJS({
    "node_modules/@darkforest_eth/types/dist/planet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DFStatefulAnimation = exports.DFAnimation = exports.PlanetTypeNames = exports.PlanetType = exports.PlanetLevelNames = exports.PlanetLevel = void 0;
      exports.PlanetLevel = {
        ZERO: 0,
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        SIX: 6,
        SEVEN: 7,
        EIGHT: 8,
        NINE: 9
      };
      exports.PlanetLevelNames = {
        [exports.PlanetLevel.ZERO]: "Level 0",
        [exports.PlanetLevel.ONE]: "Level 1",
        [exports.PlanetLevel.TWO]: "Level 2",
        [exports.PlanetLevel.THREE]: "Level 3",
        [exports.PlanetLevel.FOUR]: "Level 4",
        [exports.PlanetLevel.FIVE]: "Level 5",
        [exports.PlanetLevel.SIX]: "Level 6",
        [exports.PlanetLevel.SEVEN]: "Level 7",
        [exports.PlanetLevel.EIGHT]: "Level 8",
        [exports.PlanetLevel.NINE]: "Level 9"
      };
      exports.PlanetType = {
        PLANET: 0,
        SILVER_MINE: 1,
        RUINS: 2,
        TRADING_POST: 3,
        SILVER_BANK: 4
      };
      exports.PlanetTypeNames = {
        [exports.PlanetType.PLANET]: "Planet",
        [exports.PlanetType.SILVER_MINE]: "Asteroid Field",
        [exports.PlanetType.RUINS]: "Foundry",
        [exports.PlanetType.TRADING_POST]: "Spacetime Rip",
        [exports.PlanetType.SILVER_BANK]: "Quasar"
      };
      var DFAnimation = class {
        constructor(update) {
          this._update = update;
          this._value = 0;
        }
        update() {
          this._value = this._update();
        }
        value() {
          return this._value;
        }
      };
      exports.DFAnimation = DFAnimation;
      var DFStatefulAnimation = class extends DFAnimation {
        constructor(state, update) {
          super(update);
          this._state = state;
        }
        state() {
          return this._state;
        }
      };
      exports.DFStatefulAnimation = DFStatefulAnimation;
    }
  });

  // node_modules/@darkforest_eth/types/dist/planetmessage.js
  var require_planetmessage = __commonJS({
    "node_modules/@darkforest_eth/types/dist/planetmessage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PlanetMessageType = void 0;
      exports.PlanetMessageType = {
        EmojiFlag: "EmojiFlag"
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/player.js
  var require_player = __commonJS({
    "node_modules/@darkforest_eth/types/dist/player.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/plugin.js
  var require_plugin = __commonJS({
    "node_modules/@darkforest_eth/types/dist/plugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/renderer.js
  var require_renderer = __commonJS({
    "node_modules/@darkforest_eth/types/dist/renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RenderZIndex = exports.TextAnchor = exports.TextAlign = exports.UniformType = exports.DrawMode = exports.AttribType = void 0;
      exports.AttribType = {
        Float: 5126,
        UByte: 5121
      };
      exports.DrawMode = {
        Triangles: 4,
        Lines: 1,
        Points: 0
      };
      exports.UniformType = {
        Mat4: 0,
        Mat3: 1,
        UByte: 2,
        Float: 3,
        Texture: 4,
        Vec3: 5
      };
      exports.TextAlign = {
        Left: 0,
        Center: 0.5,
        Right: 1
      };
      exports.TextAnchor = {
        Top: 0,
        Middle: 0.5,
        Bottom: 1
      };
      exports.RenderZIndex = {
        Background: 0,
        Voyages: -1,
        Planets: -10,
        Text: -11,
        UI: -12,
        DEFAULT: -98,
        MAX: -99
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/reveal.js
  var require_reveal = __commonJS({
    "node_modules/@darkforest_eth/types/dist/reveal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/setting.js
  var require_setting = __commonJS({
    "node_modules/@darkforest_eth/types/dist/setting.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Setting = exports.AutoGasSetting = void 0;
      exports.AutoGasSetting = {
        Slow: "Slow",
        Average: "Average",
        Fast: "Fast"
      };
      exports.Setting = {
        OptOutMetrics: "OptOutMetrics",
        AutoApproveNonPurchaseTransactions: "AutoApproveNonPurchaseTransactions",
        DrawChunkBorders: "DrawChunkBorders",
        HighPerformanceRendering: "HighPerformanceRendering",
        MoveNotifications: "MoveNotifications",
        GasFeeGwei: "GasFeeGwei",
        TerminalVisible: "TerminalVisible",
        HasAcceptedPluginRisk: "HasAcceptedPluginRisk",
        FoundPirates: "FoundPirates",
        TutorialCompleted: "TutorialCompleted",
        FoundSilver: "FoundSilver",
        FoundSilverBank: "FoundSilverBank",
        FoundTradingPost: "FoundTradingPost",
        FoundComet: "FoundComet",
        FoundArtifact: "FoundArtifact",
        FoundDeepSpace: "FoundDeepSpace",
        FoundSpace: "FoundSpace",
        NewPlayer: "NewPlayer",
        MiningCores: "MiningCores",
        TutorialOpen: "TutorialOpen",
        IsMining: "IsMining",
        DisableDefaultShortcuts: "DisableDefaultShortcuts",
        ExperimentalFeatures: "ExperimentalFeatures",
        DisableEmojiRendering: "DisableEmojiRendering",
        DisableHatRendering: "DisableHatRendering",
        AutoClearConfirmedTransactionsAfterSeconds: "AutoClearConfirmedTransactionsAfterSeconds",
        AutoClearRejectedTransactionsAfterSeconds: "AutoClearRejectedTransactionsAfterSeconds",
        RendererColorInnerNebula: "RendererColorInnerNebula",
        RendererColorNebula: "RendererColorNebula",
        RendererColorSpace: "RendererColorSpace",
        RendererColorDeepSpace: "RendererColorDeepSpace",
        RendererColorDeadSpace: "RendererColorDeadSpace",
        DisableFancySpaceEffect: "DisableFancySpaceEffect"
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/transaction.js
  var require_transaction = __commonJS({
    "node_modules/@darkforest_eth/types/dist/transaction.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/transactions.js
  var require_transactions = __commonJS({
    "node_modules/@darkforest_eth/types/dist/transactions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/upgrade.js
  var require_upgrade = __commonJS({
    "node_modules/@darkforest_eth/types/dist/upgrade.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UpgradeBranchName = void 0;
      exports.UpgradeBranchName = {
        Defense: 0,
        Range: 1,
        Speed: 2
      };
    }
  });

  // node_modules/@darkforest_eth/types/dist/utility.js
  var require_utility = __commonJS({
    "node_modules/@darkforest_eth/types/dist/utility.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/webserver.js
  var require_webserver = __commonJS({
    "node_modules/@darkforest_eth/types/dist/webserver.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/world.js
  var require_world = __commonJS({
    "node_modules/@darkforest_eth/types/dist/world.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@darkforest_eth/types/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@darkforest_eth/types/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_arrival(), exports);
      __exportStar(require_artifact(), exports);
      __exportStar(require_capture_zones(), exports);
      __exportStar(require_claim(), exports);
      __exportStar(require_database_types(), exports);
      __exportStar(require_diagnostics(), exports);
      __exportStar(require_event(), exports);
      __exportStar(require_game_types(), exports);
      __exportStar(require_gas_prices(), exports);
      __exportStar(require_hat(), exports);
      __exportStar(require_identifier(), exports);
      __exportStar(require_modal(), exports);
      __exportStar(require_planet(), exports);
      __exportStar(require_planetmessage(), exports);
      __exportStar(require_player(), exports);
      __exportStar(require_plugin(), exports);
      __exportStar(require_renderer(), exports);
      __exportStar(require_reveal(), exports);
      __exportStar(require_setting(), exports);
      __exportStar(require_transaction(), exports);
      __exportStar(require_transactions(), exports);
      __exportStar(require_upgrade(), exports);
      __exportStar(require_utility(), exports);
      __exportStar(require_webserver(), exports);
      __exportStar(require_world(), exports);
    }
  });

  // plugins/Depo.ts
  var import_types = __toESM(require_dist());

  // plugins/depo/constants.ts
  var DEPO_ABI = [
    {
      type: "constructor",
      inputs: [
        {
          internalType: "address",
          name: "core",
          type: "address"
        },
        {
          internalType: "address[]",
          name: "blessed",
          type: "address[]"
        }
      ]
    },
    {
      type: "function",
      name: "captain",
      inputs: [
        {
          internalType: "address",
          name: "pleb",
          type: "address"
        }
      ],
      outputs: [],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "captains",
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "demote",
      inputs: [
        {
          internalType: "address",
          name: "pleb",
          type: "address"
        }
      ],
      outputs: [],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "deposits",
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "dfCore",
      inputs: [],
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "masterAtArms",
      inputs: [
        {
          internalType: "address",
          name: "pleb",
          type: "address"
        }
      ],
      outputs: [],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "mastersAtArms",
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "onERC721Received",
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4"
        }
      ],
      stateMutability: "nonpayable"
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view"
    },
    {
      type: "function",
      name: "withdrawArtifact",
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: [],
      stateMutability: "nonpayable"
    },
    {
      type: "event",
      name: "Demote",
      inputs: [
        {
          name: "demotor",
          type: "address",
          indexed: true
        },
        {
          name: "demoted",
          type: "address",
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "Deposit",
      inputs: [
        {
          name: "depositor",
          type: "address",
          indexed: true
        },
        {
          name: "tokenId",
          type: "uint256",
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "Promote",
      inputs: [
        {
          name: "promotor",
          type: "address",
          indexed: true
        },
        {
          name: "promoted",
          type: "address",
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "Withdrawl",
      inputs: [
        {
          name: "withdrawer",
          type: "address",
          indexed: true
        },
        {
          name: "tokenId",
          type: "uint256",
          indexed: true
        }
      ],
      anonymous: false
    }
  ];

  // plugins/depo/lib.ts
  var import_serde = __require("http://cdn.skypack.dev/@darkforest_eth/serde");
  function initializeState(events) {
    const acc = {};
    events.forEach((e) => {
      if (e.name == "Deposit") {
        const artifactId = (0, import_serde.artifactIdFromEthersBN)(e.args[1]);
        acc[artifactId] = true;
      } else if (e.name == "Withdrawl") {
        const artifactId = (0, import_serde.artifactIdFromEthersBN)(e.args[1]);
        acc[artifactId] = false;
      }
    });
    return Object.keys(acc).filter((k) => acc[k]);
  }
  var initializeContract = async () => {
    const DEPO_ADDRESS = "0xd8c00a439ac617f51e1f8fb58fa7f7334be56f63";
    const depo = await df.loadContract(DEPO_ADDRESS, DEPO_ABI);
    const eventHandlers = {
      ["Deposit"]: (addr, rawArtifactId) => {
        df.hardRefreshArtifact((0, import_serde.artifactIdFromEthersBN)(rawArtifactId));
        console.log(`${(0, import_serde.artifactIdFromEthersBN)(rawArtifactId)} was deposited`);
      },
      ["Withdrawl"]: (addr, rawArtifactId) => {
        console.log(`artifact ${(0, import_serde.artifactIdFromEthersBN)(rawArtifactId)} was withdrawn`);
      },
      ["Promote"]: (promotor, promoted) => {
        console.log(`${promoted} was promoted`);
      }
    };
    const ethConnection = df.getEthConnection();
    const filters = {
      address: DEPO_ADDRESS,
      fromBlock: 20744965,
      toBlock: "latest",
      filters: [
        depo.filters.Deposit(null, null).topics,
        depo.filters.Withdrawl(null, null).topics,
        depo.filters.Promote(null, null).topics
      ]
    };
    const initialState = await df.getEthConnection().getProvider().getLogs(filters).then((logs) => {
      return logs.map((log) => depo.interface.parseLog(log));
    }).then(initializeState);
    ethConnection.subscribeToContractEvents(depo, eventHandlers, filters);
    const core = df.getContract();
    window.depoContract = depo;
    return {
      state: initialState,
      deposit: (artifactId) => {
        core["safeTransferFrom(address,address,uint256)"](df.getAccount(), DEPO_ADDRESS, (0, import_serde.artifactIdToDecStr)(artifactId));
      },
      withdraw: (artifactId) => {
        depo.withdrawArtifact((0, import_serde.artifactIdToDecStr)(artifactId));
      },
      onWithdraw: () => {
      },
      onDeposit: () => {
      }
    };
  };

  // plugins/views/basics.ts
  var Button = (innerHTML, onClick) => {
    let button = document.createElement("button");
    button.style.marginBottom = "10px";
    button.innerHTML = innerHTML;
    button.onclick = onClick;
    return button;
  };

  // plugins/Depo.ts
  var isNotShip = (artifact) => {
    return artifact.artifactType < 10;
  };
  var isInWallet = (artifact) => {
    return !artifact.onPlanetId;
  };
  var Plugin = class {
    constructor() {
      this.state = [];
      this.pane = "loading";
      this.PaneController = document.createElement("div");
      this.PaneParent = document.createElement("div");
      this.DepositPane = document.createElement("div");
      this.WithdrawPane = document.createElement("div");
      this.getArtifactWithdrawRow = this.getArtifactWithdrawRow.bind(this);
      this.getArtifactDepositRow = this.getArtifactDepositRow.bind(this);
      this.initialize();
    }
    async initialize() {
      const { state, withdraw, deposit } = await initializeContract();
      this.state = state;
      this.withdraw = withdraw;
      this.deposit = deposit;
      this.togglePane("deposit");
    }
    togglePane(pane) {
      this.pane = pane;
      this.setPaneParentContent();
    }
    setPaneControllerContent() {
      this.PaneController.innerHTML = "";
      this.PaneController?.append(Button("Deposit", () => {
        this.togglePane("deposit");
      }));
      this.PaneController?.append(Button("Withdraw", () => {
        this.togglePane("withdraw");
      }));
    }
    setPaneParentContent() {
      this.PaneParent.childNodes.forEach((n) => this.PaneParent.removeChild(n));
      if (this.pane == "deposit") {
        this.setDepositPaneContent();
        this.PaneParent.append(this.DepositPane);
      } else {
        this.setWithdrawPaneContent();
        this.PaneParent.append(this.WithdrawPane);
      }
    }
    getArtifactDepositRow(artifact) {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.append(document.createElement("text").innerHTML = `${(0, import_types.artifactNameFromArtifact)(artifact)} ${import_types.ArtifactRarityNames[artifact.rarity]} ${import_types.ArtifactTypeNames[artifact.artifactType]}`);
      row.append(Button("deposit me", () => {
        this.deposit(artifact.id);
      }));
      return row;
    }
    setDepositPaneContent() {
      this.DepositPane.childNodes.forEach((n) => this.DepositPane.removeChild(n));
      const myArtifacts = df.getMyArtifacts().filter(isNotShip).filter(isInWallet);
      if (myArtifacts.length === 0) {
        this.DepositPane.innerText = "NO ARTIFACTS TO DEPOSIT";
      } else {
        myArtifacts.map(this.getArtifactDepositRow).forEach((r) => this.DepositPane.append(r));
      }
    }
    getArtifactWithdrawRow(artifact) {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.append(document.createElement("text").innerHTML = `${(0, import_types.artifactNameFromArtifact)(artifact)} ${import_types.ArtifactRarityNames[artifact.rarity]} ${import_types.ArtifactTypeNames[artifact.artifactType]}`);
      row.append(Button("withdraw me", () => {
        this.withdraw(artifact.id);
      }));
      return row;
    }
    setWithdrawPaneContent() {
      this.WithdrawPane.childNodes.forEach((n) => this.WithdrawPane.removeChild(n));
      const deposited = df.getArtifactsWithIds(this.state);
      if (this.state.length == 0) {
        this.WithdrawPane.innerText = "No Artifacts in the Depo";
      } else {
        deposited.map(this.getArtifactWithdrawRow).forEach((r) => this.WithdrawPane.append(r));
      }
    }
    async render(container) {
      this.container = container;
      container.style.width = "380px";
      this.setPaneControllerContent();
      this.setPaneParentContent();
      this.setDepositPaneContent();
      this.setWithdrawPaneContent();
      container.append(this.PaneController);
      container.append(this.PaneParent);
    }
    destroy() {
    }
  };
  var Depo_default = Plugin;
})();
