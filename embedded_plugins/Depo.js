var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
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

// node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "node_modules/big-integer/BigInteger.js"(exports, module) {
    var bigInt = function(undefined2) {
      "use strict";
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v, radix, alphabet, caseSensitive) {
        if (typeof v === "undefined")
          return Integer[0];
        if (typeof radix !== "undefined")
          return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
        return parseValue(v);
      }
      function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
      }
      BigInteger.prototype = Object.create(Integer.prototype);
      function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);
      function NativeBigInt(value) {
        this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);
      function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
      }
      function smallToArray(n) {
        if (n < 1e7)
          return [n];
        if (n < 1e14)
          return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
      }
      function arrayToSmall(arr) {
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
          switch (length) {
            case 0:
              return 0;
            case 1:
              return arr[0];
            case 2:
              return arr[0] + arr[1] * BASE;
            default:
              return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
          }
        }
        return arr;
      }
      function trim(v) {
        var i2 = v.length;
        while (v[--i2] === 0)
          ;
        v.length = i2 + 1;
      }
      function createArray(length) {
        var x = new Array(length);
        var i2 = -1;
        while (++i2 < length) {
          x[i2] = 0;
        }
        return x;
      }
      function truncate(n) {
        if (n > 0)
          return Math.floor(n);
        return Math.ceil(n);
      }
      function add(a, b) {
        var l_a = a.length, l_b = b.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
        for (i2 = 0; i2 < l_b; i2++) {
          sum = a[i2] + b[i2] + carry;
          carry = sum >= base ? 1 : 0;
          r[i2] = sum - carry * base;
        }
        while (i2 < l_a) {
          sum = a[i2] + carry;
          carry = sum === base ? 1 : 0;
          r[i2++] = sum - carry * base;
        }
        if (carry > 0)
          r.push(carry);
        return r;
      }
      function addAny(a, b) {
        if (a.length >= b.length)
          return add(a, b);
        return add(b, a);
      }
      function addSmall(a, carry) {
        var l = a.length, r = new Array(l), base = BASE, sum, i2;
        for (i2 = 0; i2 < l; i2++) {
          sum = a[i2] - base + carry;
          carry = Math.floor(sum / base);
          r[i2] = sum - carry * base;
          carry += 1;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      BigInteger.prototype.add = function(v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
          return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
          return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;
      SmallInteger.prototype.add = function(v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
          if (isPrecise(a + b))
            return new SmallInteger(a + b);
          b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v) {
        return new NativeBigInt(this.value + parseValue(v).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a, b) {
        var a_l = a.length, b_l = b.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
        for (i2 = 0; i2 < b_l; i2++) {
          difference = a[i2] - borrow - b[i2];
          if (difference < 0) {
            difference += base;
            borrow = 1;
          } else
            borrow = 0;
          r[i2] = difference;
        }
        for (i2 = b_l; i2 < a_l; i2++) {
          difference = a[i2] - borrow;
          if (difference < 0)
            difference += base;
          else {
            r[i2++] = difference;
            break;
          }
          r[i2] = difference;
        }
        for (; i2 < a_l; i2++) {
          r[i2] = a[i2];
        }
        trim(r);
        return r;
      }
      function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
          value = subtract(a, b);
        } else {
          value = subtract(b, a);
          sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
          if (sign)
            value = -value;
          return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
      }
      function subtractSmall(a, b, sign) {
        var l = a.length, r = new Array(l), carry = -b, base = BASE, i2, difference;
        for (i2 = 0; i2 < l; i2++) {
          difference = a[i2] + carry;
          carry = Math.floor(difference / base);
          difference %= base;
          r[i2] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
          if (sign)
            r = -r;
          return new SmallInteger(r);
        }
        return new BigInteger(r, sign);
      }
      BigInteger.prototype.subtract = function(v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
          return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
          return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;
      SmallInteger.prototype.subtract = function(v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
          return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
          return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v) {
        return new NativeBigInt(this.value - parseValue(v).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
      BigInteger.prototype.negate = function() {
        return new BigInteger(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function() {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
      };
      NativeBigInt.prototype.negate = function() {
        return new NativeBigInt(-this.value);
      };
      BigInteger.prototype.abs = function() {
        return new BigInteger(this.value, false);
      };
      SmallInteger.prototype.abs = function() {
        return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function() {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };
      function multiplyLong(a, b) {
        var a_l = a.length, b_l = b.length, l = a_l + b_l, r = createArray(l), base = BASE, product, carry, i2, a_i, b_j;
        for (i2 = 0; i2 < a_l; ++i2) {
          a_i = a[i2];
          for (var j = 0; j < b_l; ++j) {
            b_j = b[j];
            product = a_i * b_j + r[i2 + j];
            carry = Math.floor(product / base);
            r[i2 + j] = product - carry * base;
            r[i2 + j + 1] += carry;
          }
        }
        trim(r);
        return r;
      }
      function multiplySmall(a, b) {
        var l = a.length, r = new Array(l), base = BASE, carry = 0, product, i2;
        for (i2 = 0; i2 < l; i2++) {
          product = a[i2] * b + carry;
          carry = Math.floor(product / base);
          r[i2] = product - carry * base;
        }
        while (carry > 0) {
          r[i2++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r;
      }
      function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0)
          r.push(0);
        return r.concat(x);
      }
      function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);
        if (n <= 30)
          return multiplyLong(x, y);
        n = Math.ceil(n / 2);
        var b = x.slice(n), a = x.slice(0, n), d = y.slice(n), c = y.slice(0, n);
        var ac = multiplyKaratsuba(a, c), bd = multiplyKaratsuba(b, d), abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
      }
      BigInteger.prototype.multiply = function(v) {
        var n = parseValue(v), a = this.value, b = n.value, sign = this.sign !== n.sign, abs;
        if (n.isSmall) {
          if (b === 0)
            return Integer[0];
          if (b === 1)
            return this;
          if (b === -1)
            return this.negate();
          abs = Math.abs(b);
          if (abs < BASE) {
            return new BigInteger(multiplySmall(a, abs), sign);
          }
          b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length))
          return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
      };
      BigInteger.prototype.times = BigInteger.prototype.multiply;
      function multiplySmallAndArray(a, b, sign) {
        if (a < BASE) {
          return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function(a) {
        if (isPrecise(a.value * this.value)) {
          return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
      };
      BigInteger.prototype._multiplyBySmall = function(a) {
        if (a.value === 0)
          return Integer[0];
        if (a.value === 1)
          return this;
        if (a.value === -1)
          return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
      };
      SmallInteger.prototype.multiply = function(v) {
        return parseValue(v)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v) {
        return new NativeBigInt(this.value * parseValue(v).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a) {
        var l = a.length, r = createArray(l + l), base = BASE, product, carry, i2, a_i, a_j;
        for (i2 = 0; i2 < l; i2++) {
          a_i = a[i2];
          carry = 0 - a_i * a_i;
          for (var j = i2; j < l; j++) {
            a_j = a[j];
            product = 2 * (a_i * a_j) + r[i2 + j] + carry;
            carry = Math.floor(product / base);
            r[i2 + j] = product - carry * base;
          }
          r[i2 + l] = carry;
        }
        trim(r);
        return r;
      }
      BigInteger.prototype.square = function() {
        return new BigInteger(square(this.value), false);
      };
      SmallInteger.prototype.square = function() {
        var value = this.value * this.value;
        if (isPrecise(value))
          return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      };
      NativeBigInt.prototype.square = function(v) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a, b) {
        var a_l = a.length, b_l = b.length, base = BASE, result = createArray(b.length), divisorMostSignificantDigit = b[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b, lambda), quotientDigit, shift, carry, borrow, i2, l, q;
        if (remainder.length <= a_l)
          remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
          quotientDigit = base - 1;
          if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
            quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
          }
          carry = 0;
          borrow = 0;
          l = divisor.length;
          for (i2 = 0; i2 < l; i2++) {
            carry += quotientDigit * divisor[i2];
            q = Math.floor(carry / base);
            borrow += remainder[shift + i2] - (carry - q * base);
            carry = q;
            if (borrow < 0) {
              remainder[shift + i2] = borrow + base;
              borrow = -1;
            } else {
              remainder[shift + i2] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i2 = 0; i2 < l; i2++) {
              carry += remainder[shift + i2] - base + divisor[i2];
              if (carry < 0) {
                remainder[shift + i2] = carry + base;
                carry = 0;
              } else {
                remainder[shift + i2] = carry;
                carry = 1;
              }
            }
            borrow += carry;
          }
          result[shift] = quotientDigit;
        }
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
      }
      function divMod2(a, b) {
        var a_l = a.length, b_l = b.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a[--a_l]);
          trim(part);
          if (compareAbs(part, b) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base + part[xlen - 2];
          highy = b[b_l - 1] * base + b[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b, guess);
            if (compareAbs(check, part) <= 0)
              break;
            guess--;
          } while (guess);
          result.push(guess);
          part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
      }
      function divModSmall(value, lambda) {
        var length = value.length, quotient = createArray(length), base = BASE, i2, q, remainder, divisor;
        remainder = 0;
        for (i2 = length - 1; i2 >= 0; --i2) {
          divisor = remainder * base + value[i2];
          q = truncate(divisor / lambda);
          remainder = divisor - q * lambda;
          quotient[i2] = q | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self, v) {
        var value, n = parseValue(v);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
        }
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0)
          throw new Error("Cannot divide by zero");
        if (self.isSmall) {
          if (n.isSmall) {
            return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
          }
          return [Integer[0], self];
        }
        if (n.isSmall) {
          if (b === 1)
            return [self, Integer[0]];
          if (b == -1)
            return [self.negate(), Integer[0]];
          var abs = Math.abs(b);
          if (abs < BASE) {
            value = divModSmall(a, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self.sign)
              remainder = -remainder;
            if (typeof quotient === "number") {
              if (self.sign !== n.sign)
                quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
          }
          b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1)
          return [Integer[0], self];
        if (comparison === 0)
          return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];
        if (a.length + b.length <= 200)
          value = divMod1(a, b);
        else
          value = divMod2(a, b);
        quotient = value[0];
        var qSign = self.sign !== n.sign, mod = value[1], mSign = self.sign;
        if (typeof quotient === "number") {
          if (qSign)
            quotient = -quotient;
          quotient = new SmallInteger(quotient);
        } else
          quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
          if (mSign)
            mod = -mod;
          mod = new SmallInteger(mod);
        } else
          mod = new BigInteger(mod, mSign);
        return [quotient, mod];
      }
      BigInteger.prototype.divmod = function(v) {
        var result = divModAny(this, v);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
      BigInteger.prototype.divide = function(v) {
        return divModAny(this, v)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v) {
        return new NativeBigInt(this.value / parseValue(v).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
      BigInteger.prototype.mod = function(v) {
        return divModAny(this, v)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v) {
        return new NativeBigInt(this.value % parseValue(v).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
      BigInteger.prototype.pow = function(v) {
        var n = parseValue(v), a = this.value, b = n.value, value, x, y;
        if (b === 0)
          return Integer[1];
        if (a === 0)
          return Integer[0];
        if (a === 1)
          return Integer[1];
        if (a === -1)
          return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
          return Integer[0];
        }
        if (!n.isSmall)
          throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a, b)))
            return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
          if (b & true) {
            y = y.times(x);
            --b;
          }
          if (b === 0)
            break;
          b /= 2;
          x = x.square();
        }
        return y;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;
      NativeBigInt.prototype.pow = function(v) {
        var n = parseValue(v);
        var a = this.value, b = n.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b === _0)
          return Integer[1];
        if (a === _0)
          return Integer[0];
        if (a === _1)
          return Integer[1];
        if (a === BigInt(-1))
          return n.isEven() ? Integer[1] : Integer[-1];
        if (n.isNegative())
          return new NativeBigInt(_0);
        var x = this;
        var y = Integer[1];
        while (true) {
          if ((b & _1) === _1) {
            y = y.times(x);
            --b;
          }
          if (b === _0)
            break;
          b /= _2;
          x = x.square();
        }
        return y;
      };
      BigInteger.prototype.modPow = function(exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero())
          throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1], base = this.mod(mod);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base = base.modInv(mod);
        }
        while (exp.isPositive()) {
          if (base.isZero())
            return Integer[0];
          if (exp.isOdd())
            r = r.multiply(base).mod(mod);
          exp = exp.divide(2);
          base = base.square().mod(mod);
        }
        return r;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
      function compareAbs(a, b) {
        if (a.length !== b.length) {
          return a.length > b.length ? 1 : -1;
        }
        for (var i2 = a.length - 1; i2 >= 0; i2--) {
          if (a[i2] !== b[i2])
            return a[i2] > b[i2] ? 1 : -1;
        }
        return 0;
      }
      BigInteger.prototype.compareAbs = function(v) {
        var n = parseValue(v), a = this.value, b = n.value;
        if (n.isSmall)
          return 1;
        return compareAbs(a, b);
      };
      SmallInteger.prototype.compareAbs = function(v) {
        var n = parseValue(v), a = Math.abs(this.value), b = n.value;
        if (n.isSmall) {
          b = Math.abs(b);
          return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v) {
        var a = this.value;
        var b = parseValue(v).value;
        a = a >= 0 ? a : -a;
        b = b >= 0 ? b : -b;
        return a === b ? 0 : a > b ? 1 : -1;
      };
      BigInteger.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var n = parseValue(v), a = this.value, b = n.value;
        if (this.sign !== n.sign) {
          return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;
      SmallInteger.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var n = parseValue(v), a = this.value, b = n.value;
        if (n.isSmall) {
          return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
          return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v) {
        if (v === Infinity) {
          return -1;
        }
        if (v === -Infinity) {
          return 1;
        }
        var a = this.value;
        var b = parseValue(v).value;
        return a === b ? 0 : a > b ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger.prototype.equals = function(v) {
        return this.compare(v) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
      BigInteger.prototype.notEquals = function(v) {
        return this.compare(v) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
      BigInteger.prototype.greater = function(v) {
        return this.compare(v) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
      BigInteger.prototype.lesser = function(v) {
        return this.compare(v) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
      BigInteger.prototype.greaterOrEquals = function(v) {
        return this.compare(v) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
      BigInteger.prototype.lesserOrEquals = function(v) {
        return this.compare(v) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
      BigInteger.prototype.isEven = function() {
        return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function() {
        return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function() {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      BigInteger.prototype.isOdd = function() {
        return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function() {
        return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function() {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      BigInteger.prototype.isPositive = function() {
        return !this.sign;
      };
      SmallInteger.prototype.isPositive = function() {
        return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
      BigInteger.prototype.isNegative = function() {
        return this.sign;
      };
      SmallInteger.prototype.isNegative = function() {
        return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
      BigInteger.prototype.isUnit = function() {
        return false;
      };
      SmallInteger.prototype.isUnit = function() {
        return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function() {
        return this.abs().value === BigInt(1);
      };
      BigInteger.prototype.isZero = function() {
        return false;
      };
      SmallInteger.prototype.isZero = function() {
        return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function() {
        return this.value === BigInt(0);
      };
      BigInteger.prototype.isDivisibleBy = function(v) {
        var n = parseValue(v);
        if (n.isZero())
          return false;
        if (n.isUnit())
          return true;
        if (n.compareAbs(2) === 0)
          return this.isEven();
        return this.mod(n).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
      function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit())
          return false;
        if (n.equals(2) || n.equals(3) || n.equals(5))
          return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5))
          return false;
        if (n.lesser(49))
          return true;
      }
      function millerRabinTest(n, a) {
        var nPrev = n.prev(), b = nPrev, r = 0, d, t, i2, x;
        while (b.isEven())
          b = b.divide(2), r++;
        next:
          for (i2 = 0; i2 < a.length; i2++) {
            if (n.lesser(a[i2]))
              continue;
            x = bigInt(a[i2]).modPow(b, n);
            if (x.isUnit() || x.equals(nPrev))
              continue;
            for (d = r - 1; d != 0; d--) {
              x = x.square().mod(n);
              if (x.isUnit())
                return false;
              if (x.equals(nPrev))
                continue next;
            }
            return false;
          }
        return true;
      }
      BigInteger.prototype.isPrime = function(strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2)
          return isPrime;
        var n = this.abs();
        var bits = n.bitLength();
        if (bits <= 64)
          return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt(i2 + 2));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
      BigInteger.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2)
          return isPrime;
        var n = this.abs();
        var t = iterations === undefined2 ? 5 : iterations;
        for (var a = [], i2 = 0; i2 < t; i2++) {
          a.push(bigInt.randBetween(2, n.minus(2), rng));
        }
        return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
      BigInteger.prototype.modInv = function(n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.isZero()) {
          q = r.divide(newR);
          lastT = t;
          lastR = r;
          t = newT;
          r = newR;
          newT = lastT.subtract(q.multiply(newT));
          newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.isUnit())
          throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
          t = t.add(n);
        }
        if (this.isNegative()) {
          return t.negate();
        }
        return t;
      };
      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
      BigInteger.prototype.next = function() {
        var value = this.value;
        if (this.sign) {
          return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function() {
        var value = this.value;
        if (value + 1 < MAX_INT)
          return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function() {
        return new NativeBigInt(this.value + BigInt(1));
      };
      BigInteger.prototype.prev = function() {
        var value = this.value;
        if (this.sign) {
          return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function() {
        var value = this.value;
        if (value - 1 > -MAX_INT)
          return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function() {
        return new NativeBigInt(this.value - BigInt(1));
      };
      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE)
        powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
      function shift_isSmall(n) {
        return Math.abs(n) <= BASE;
      }
      BigInteger.prototype.shiftLeft = function(v) {
        var n = parseValue(v).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0)
          return this.shiftRight(-n);
        var result = this;
        if (result.isZero())
          return result;
        while (n >= powers2Length) {
          result = result.multiply(highestPower2);
          n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
      BigInteger.prototype.shiftRight = function(v) {
        var remQuo;
        var n = parseValue(v).toJSNumber();
        if (!shift_isSmall(n)) {
          throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0)
          return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit())
            return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
      function bitwise(x, y, fn) {
        y = parseValue(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x, yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
          xDivMod = divModAny(xRem, highestPower2);
          xDigit = xDivMod[1].toJSNumber();
          if (xSign) {
            xDigit = highestPower2 - 1 - xDigit;
          }
          yDivMod = divModAny(yRem, highestPower2);
          yDigit = yDivMod[1].toJSNumber();
          if (ySign) {
            yDigit = highestPower2 - 1 - yDigit;
          }
          xRem = xDivMod[0];
          yRem = yDivMod[0];
          result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt(result[i2]));
        }
        return sum;
      }
      BigInteger.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
      BigInteger.prototype.and = function(n) {
        return bitwise(this, n, function(a, b) {
          return a & b;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
      BigInteger.prototype.or = function(n) {
        return bitwise(this, n, function(a, b) {
          return a | b;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
      BigInteger.prototype.xor = function(n) {
        return bitwise(this, n, function(a, b) {
          return a ^ b;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n) {
        var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
      }
      function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base.square(base));
          var p = tmp.p;
          var e = tmp.e;
          var t = p.multiply(base);
          return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
      }
      BigInteger.prototype.bitLength = function() {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
          n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
          return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
      function max(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.greater(b) ? a : b;
      }
      function min(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.lesser(b) ? a : b;
      }
      function gcd(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        if (a.equals(b))
          return a;
        if (a.isZero())
          return b;
        if (b.isZero())
          return a;
        var c = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
          d = min(roughLOB(a), roughLOB(b));
          a = a.divide(d);
          b = b.divide(d);
          c = c.multiply(d);
        }
        while (a.isEven()) {
          a = a.divide(roughLOB(a));
        }
        do {
          while (b.isEven()) {
            b = b.divide(roughLOB(b));
          }
          if (a.greater(b)) {
            t = b;
            b = a;
            a = t;
          }
          b = b.subtract(a);
        } while (!b.isZero());
        return c.isUnit() ? a : a.multiply(c);
      }
      function lcm(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
      }
      function randBetween(a, b, rng) {
        a = parseValue(a);
        b = parseValue(b);
        var usedRNG = rng || Math.random;
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall)
          return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i2 = 0; i2 < digits.length; i2++) {
          var top = restricted ? digits[i2] + (i2 + 1 < digits.length ? digits[i2 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i2])
            restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
      }
      var parseBase = function(text, base, alphabet, caseSensitive) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
          text = text.toLowerCase();
          alphabet = alphabet.toLowerCase();
        }
        var length = text.length;
        var i2;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i2 = 0; i2 < alphabet.length; i2++) {
          alphabetValues[alphabet[i2]] = i2;
        }
        for (i2 = 0; i2 < length; i2++) {
          var c = text[i2];
          if (c === "-")
            continue;
          if (c in alphabetValues) {
            if (alphabetValues[c] >= absBase) {
              if (c === "1" && absBase === 1)
                continue;
              throw new Error(c + " is not a valid digit in base " + base + ".");
            }
          }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
          var c = text[i2];
          if (c in alphabetValues)
            digits.push(parseValue(alphabetValues[c]));
          else if (c === "<") {
            var start = i2;
            do {
              i2++;
            } while (text[i2] !== ">" && i2 < text.length);
            digits.push(parseValue(text.slice(start + 1, i2)));
          } else
            throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
      };
      function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i2;
        for (i2 = digits.length - 1; i2 >= 0; i2--) {
          val = val.add(digits[i2].times(pow));
          pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
      }
      function stringify(digit, alphabet) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        if (digit < alphabet.length) {
          return alphabet[digit];
        }
        return "<" + digit + ">";
      }
      function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
          if (n.isZero())
            return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
          if (n.isZero())
            return { value: [0], isNegative: false };
          if (n.isNegative())
            return {
              value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n.isNegative() && base.isPositive()) {
          neg = true;
          n = n.abs();
        }
        if (base.isUnit()) {
          if (n.isZero())
            return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
          divmod = left.divmod(base);
          left = divmod.quotient;
          var digit = divmod.remainder;
          if (digit.isNegative()) {
            digit = base.minus(digit).abs();
            left = left.next();
          }
          out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
      }
      function toBaseString(n, base, alphabet) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x) {
          return stringify(x, alphabet);
        }).join("");
      }
      BigInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      SmallInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      NativeBigInt.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      BigInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2)
          radix = 10;
        if (radix !== 10)
          return toBaseString(this, radix, alphabet);
        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
          digit = String(v[l]);
          str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
      };
      SmallInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2)
          radix = 10;
        if (radix != 10)
          return toBaseString(this, radix, alphabet);
        return String(this.value);
      };
      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
      NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
        return this.toString();
      };
      BigInteger.prototype.valueOf = function() {
        return parseInt(this.toString(), 10);
      };
      BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
      SmallInteger.prototype.valueOf = function() {
        return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
        return parseInt(this.toString(), 10);
      };
      function parseStringValue(v) {
        if (isPrecise(+v)) {
          var x = +v;
          if (x === truncate(x))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
          throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign)
          v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2)
          throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
          var exp = split[1];
          if (exp[0] === "+")
            exp = exp.slice(1);
          exp = +exp;
          if (exp !== truncate(exp) || !isPrecise(exp))
            throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
          var text = split[0];
          var decimalPlace = text.indexOf(".");
          if (decimalPlace >= 0) {
            exp -= text.length - decimalPlace - 1;
            text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
          }
          if (exp < 0)
            throw new Error("Cannot include negative exponent part for integers");
          text += new Array(exp + 1).join("0");
          v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid)
          throw new Error("Invalid integer: " + v);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign ? "-" + v : v));
        }
        var r = [], max2 = v.length, l = LOG_BASE, min2 = max2 - l;
        while (max2 > 0) {
          r.push(+v.slice(min2, max2));
          min2 -= l;
          if (min2 < 0)
            min2 = 0;
          max2 -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
      }
      function parseNumberValue(v) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v));
        }
        if (isPrecise(v)) {
          if (v !== truncate(v))
            throw new Error(v + " is not an integer.");
          return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
      }
      function parseValue(v) {
        if (typeof v === "number") {
          return parseNumberValue(v);
        }
        if (typeof v === "string") {
          return parseStringValue(v);
        }
        if (typeof v === "bigint") {
          return new NativeBigInt(v);
        }
        return v;
      }
      for (var i = 0; i < 1e3; i++) {
        Integer[i] = parseValue(i);
        if (i > 0)
          Integer[-i] = parseValue(-i);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd;
      Integer.lcm = lcm;
      Integer.isInstance = function(x) {
        return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
      };
      Integer.randBetween = randBetween;
      Integer.fromArray = function(digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
      };
      return Integer;
    }();
    if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
      module.exports = bigInt;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return bigInt;
      });
    }
  }
});

// node_modules/@darkforest_eth/serde/dist/address.js
var require_address = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/address.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hashToInt = exports.address = void 0;
    var big_integer_1 = __importDefault(require_BigInteger());
    function address(str) {
      let ret = str.toLowerCase();
      if (ret.slice(0, 2) === "0x") {
        ret = ret.slice(2);
      }
      for (const c of ret) {
        if ("0123456789abcdef".indexOf(c) === -1)
          throw new Error("not a valid address");
      }
      if (ret.length !== 40)
        throw new Error("not a valid address");
      return `0x${ret}`;
    }
    exports.address = address;
    function hashToInt(hash) {
      const seed = (0, big_integer_1.default)(hash, 16).and(1099511627775).toString(16);
      return parseInt("0x" + seed);
    }
    exports.hashToInt = hashToInt;
  }
});

// node_modules/@darkforest_eth/constants/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@darkforest_eth/constants/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HAT_SIZES = exports.SpecialKey = exports.PLANET_CLAIM_MIN_LEVEL = exports.RECOMMENDED_MODAL_WIDTH = exports.GAS_PRICES_INTERVAL_MS = exports.BLOCK_EXPLORER_URL = exports.MAX_AUTO_GAS_PRICE_GWEI = exports.DEFAULT_GAS_PRICES = exports.GAS_PRICE_API = exports.MAX_BIOME = exports.MIN_BIOME = exports.MAX_PLANET_LEVEL = exports.MIN_PLANET_LEVEL = exports.MAX_ARTIFACT_RARITY = exports.MIN_ARTIFACT_RARITY = exports.MAX_SPACESHIP_TYPE = exports.MIN_SPACESHIP_TYPE = exports.MAX_ARTIFACT_TYPE = exports.MIN_ARTIFACT_TYPE = exports.EMPTY_ARTIFACT_ID = exports.EMPTY_LOCATION_ID = exports.EMPTY_ADDRESS = exports.LOCATION_ID_UB = exports.DEFAULT_MAX_CALL_RETRIES = exports.CONTRACT_PRECISION = void 0;
    var types_1 = require_dist();
    var big_integer_1 = __importDefault(require_BigInteger());
    exports.CONTRACT_PRECISION = 1e3;
    exports.DEFAULT_MAX_CALL_RETRIES = 12;
    exports.LOCATION_ID_UB = (0, big_integer_1.default)("21888242871839275222246405745257275088548364400416034343698204186575808495617");
    exports.EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";
    exports.EMPTY_LOCATION_ID = "0000000000000000000000000000000000000000000000000000000000000000";
    exports.EMPTY_ARTIFACT_ID = "0000000000000000000000000000000000000000000000000000000000000000";
    exports.MIN_ARTIFACT_TYPE = types_1.ArtifactType.Monolith;
    exports.MAX_ARTIFACT_TYPE = types_1.ArtifactType.ShipTitan;
    exports.MIN_SPACESHIP_TYPE = types_1.ArtifactType.ShipMothership;
    exports.MAX_SPACESHIP_TYPE = types_1.ArtifactType.ShipTitan;
    exports.MIN_ARTIFACT_RARITY = types_1.ArtifactRarity.Common;
    exports.MAX_ARTIFACT_RARITY = types_1.ArtifactRarity.Mythic;
    exports.MIN_PLANET_LEVEL = types_1.PlanetLevel.ZERO;
    exports.MAX_PLANET_LEVEL = types_1.PlanetLevel.NINE;
    exports.MIN_BIOME = types_1.Biome.OCEAN;
    exports.MAX_BIOME = types_1.Biome.CORRUPTED;
    exports.GAS_PRICE_API = "https://blockscout.com/xdai/mainnet/api/v1/gas-price-oracle";
    exports.DEFAULT_GAS_PRICES = {
      slow: 1,
      average: 3,
      fast: 10
    };
    exports.MAX_AUTO_GAS_PRICE_GWEI = 15;
    exports.BLOCK_EXPLORER_URL = "https://dashboard.tenderly.co/tx/xdai";
    exports.GAS_PRICES_INTERVAL_MS = 6e4;
    exports.RECOMMENDED_MODAL_WIDTH = "400px";
    exports.PLANET_CLAIM_MIN_LEVEL = 3;
    exports.SpecialKey = {
      Space: " ",
      Tab: "Tab",
      Escape: "Escape",
      Control: "Control",
      Shift: "Shift"
    };
    exports.HAT_SIZES = [
      "None",
      "Tiny HAT",
      "Small HAT",
      "Medium HAT",
      "Large HAT",
      "Huge HAT",
      "Mega HAT",
      "Enormous HAT",
      "Titanic HAT",
      "Legendary HAT",
      "Almighty HAT",
      "Cosmic HAT",
      "Celestial HAT",
      "Empyrean HAT",
      "Ethereal HAT",
      "Transcendental HAT",
      "haaaat",
      "HAAAAT"
    ];
  }
});

// node_modules/@darkforest_eth/serde/dist/location.js
var require_location = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/location.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.locationIdToDecStr = exports.locationIdFromEthersBN = exports.locationIdFromBigInt = exports.locationIdFromDecStr = exports.locationIdFromHexStr = void 0;
    var constants_1 = require_dist2();
    var big_integer_1 = __importDefault(require_BigInteger());
    function locationIdFromHexStr(location) {
      const locationBI = (0, big_integer_1.default)(location, 16);
      if (locationBI.geq(constants_1.LOCATION_ID_UB))
        throw new Error("not a valid location");
      let ret = locationBI.toString(16);
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.locationIdFromHexStr = locationIdFromHexStr;
    function locationIdFromDecStr(location) {
      const locationBI = (0, big_integer_1.default)(location);
      if (locationBI.geq(constants_1.LOCATION_ID_UB))
        throw new Error("not a valid location");
      let ret = locationBI.toString(16);
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.locationIdFromDecStr = locationIdFromDecStr;
    function locationIdFromBigInt(location) {
      const locationBI = (0, big_integer_1.default)(location);
      if (locationBI.geq(constants_1.LOCATION_ID_UB))
        throw new Error("not a valid location");
      let ret = locationBI.toString(16);
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.locationIdFromBigInt = locationIdFromBigInt;
    function locationIdFromEthersBN(location) {
      return locationIdFromDecStr(location.toString());
    }
    exports.locationIdFromEthersBN = locationIdFromEthersBN;
    function locationIdToDecStr(locationId) {
      return (0, big_integer_1.default)(locationId, 16).toString(10);
    }
    exports.locationIdToDecStr = locationIdToDecStr;
  }
});

// node_modules/@darkforest_eth/serde/dist/upgrade.js
var require_upgrade2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/upgrade.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeUpgradeBranches = exports.decodeUpgrade = void 0;
    function decodeUpgrade(rawUpgrade) {
      return {
        energyCapMultiplier: rawUpgrade.popCapMultiplier.toNumber(),
        energyGroMultiplier: rawUpgrade.popGroMultiplier.toNumber(),
        rangeMultiplier: rawUpgrade.rangeMultiplier.toNumber(),
        speedMultiplier: rawUpgrade.speedMultiplier.toNumber(),
        defMultiplier: rawUpgrade.defMultiplier.toNumber()
      };
    }
    exports.decodeUpgrade = decodeUpgrade;
    function decodeUpgradeBranches(rawUpgradeBranches) {
      return rawUpgradeBranches.map((a) => a.map(decodeUpgrade));
    }
    exports.decodeUpgradeBranches = decodeUpgradeBranches;
  }
});

// node_modules/@darkforest_eth/serde/dist/artifact.js
var require_artifact2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/artifact.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeArtifact = exports.decodeArtifactPointValues = exports.artifactIdToDecStr = exports.artifactIdFromEthersBN = exports.artifactIdFromDecStr = exports.artifactIdFromHexStr = void 0;
    var types_1 = require_dist();
    var big_integer_1 = __importDefault(require_BigInteger());
    var address_1 = require_address();
    var location_1 = require_location();
    var upgrade_1 = require_upgrade2();
    function artifactIdFromHexStr(artifactId) {
      const artifactIdBI = (0, big_integer_1.default)(artifactId, 16);
      let ret = artifactIdBI.toString(16);
      if (ret.length > 64)
        throw new Error("not a valid artifact id");
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.artifactIdFromHexStr = artifactIdFromHexStr;
    function artifactIdFromDecStr(artifactId) {
      const locationBI = (0, big_integer_1.default)(artifactId);
      let ret = locationBI.toString(16);
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.artifactIdFromDecStr = artifactIdFromDecStr;
    function artifactIdFromEthersBN2(artifactId) {
      return artifactIdFromDecStr(artifactId.toString());
    }
    exports.artifactIdFromEthersBN = artifactIdFromEthersBN2;
    function artifactIdToDecStr2(artifactId) {
      return (0, big_integer_1.default)(artifactId, 16).toString(10);
    }
    exports.artifactIdToDecStr = artifactIdToDecStr2;
    function decodeArtifactPointValues(rawPointValues) {
      return {
        [types_1.ArtifactRarity.Unknown]: rawPointValues[types_1.ArtifactRarity.Unknown].toNumber(),
        [types_1.ArtifactRarity.Common]: rawPointValues[types_1.ArtifactRarity.Common].toNumber(),
        [types_1.ArtifactRarity.Rare]: rawPointValues[types_1.ArtifactRarity.Rare].toNumber(),
        [types_1.ArtifactRarity.Epic]: rawPointValues[types_1.ArtifactRarity.Epic].toNumber(),
        [types_1.ArtifactRarity.Legendary]: rawPointValues[types_1.ArtifactRarity.Legendary].toNumber(),
        [types_1.ArtifactRarity.Mythic]: rawPointValues[types_1.ArtifactRarity.Mythic].toNumber()
      };
    }
    exports.decodeArtifactPointValues = decodeArtifactPointValues;
    function decodeArtifact(rawArtifactWithMetadata) {
      const { artifact, owner, upgrade, timeDelayedUpgrade, locationId, voyageId } = rawArtifactWithMetadata;
      return {
        isInititalized: artifact.isInitialized,
        id: artifactIdFromEthersBN2(artifact.id),
        planetDiscoveredOn: (0, location_1.locationIdFromDecStr)(artifact.planetDiscoveredOn.toString()),
        rarity: artifact.rarity,
        planetBiome: artifact.planetBiome,
        mintedAtTimestamp: artifact.mintedAtTimestamp.toNumber(),
        discoverer: (0, address_1.address)(artifact.discoverer),
        artifactType: artifact.artifactType,
        activations: artifact.activations.toNumber(),
        lastActivated: artifact.lastActivated.toNumber(),
        lastDeactivated: artifact.lastDeactivated.toNumber(),
        controller: (0, address_1.address)(artifact.controller),
        wormholeTo: artifact.wormholeTo.eq(0) ? void 0 : (0, location_1.locationIdFromEthersBN)(artifact.wormholeTo),
        currentOwner: (0, address_1.address)(owner),
        upgrade: (0, upgrade_1.decodeUpgrade)(upgrade),
        timeDelayedUpgrade: (0, upgrade_1.decodeUpgrade)(timeDelayedUpgrade),
        onPlanetId: locationId.eq(0) ? void 0 : (0, location_1.locationIdFromEthersBN)(locationId),
        onVoyageId: voyageId.eq(0) ? void 0 : voyageId.toString()
      };
    }
    exports.decodeArtifact = decodeArtifact;
  }
});

// node_modules/@darkforest_eth/serde/dist/arrival.js
var require_arrival2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/arrival.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeArrival = void 0;
    var constants_1 = require_dist2();
    var address_1 = require_address();
    var artifact_1 = require_artifact2();
    var location_1 = require_location();
    function decodeArrival(rawArrival) {
      const arrival = {
        eventId: rawArrival.id.toString(),
        player: (0, address_1.address)(rawArrival.player),
        fromPlanet: (0, location_1.locationIdFromDecStr)(rawArrival.fromPlanet.toString()),
        toPlanet: (0, location_1.locationIdFromDecStr)(rawArrival.toPlanet.toString()),
        energyArriving: rawArrival.popArriving.toNumber() / constants_1.CONTRACT_PRECISION,
        silverMoved: rawArrival.silverMoved.toNumber() / constants_1.CONTRACT_PRECISION,
        departureTime: rawArrival.departureTime.toNumber(),
        arrivalTime: rawArrival.arrivalTime.toNumber(),
        distance: rawArrival.distance.toNumber(),
        artifactId: rawArrival.carriedArtifactId.eq(0) ? void 0 : (0, artifact_1.artifactIdFromEthersBN)(rawArrival.carriedArtifactId)
      };
      return arrival;
    }
    exports.decodeArrival = decodeArrival;
  }
});

// node_modules/@darkforest_eth/serde/dist/event.js
var require_event2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNetworkEvent = void 0;
    var types_1 = require_dist();
    function isNetworkEvent(event) {
      return typeof event.tx_to === "string" && typeof event.tx_type === "string" && typeof event.time_exec_called === "number" && (event.autoGasPriceSetting === void 0 || Object.values(types_1.AutoGasSetting).includes(event.autoGasPriceSetting));
    }
    exports.isNetworkEvent = isNetworkEvent;
  }
});

// node_modules/@darkforest_eth/hexgen/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@darkforest_eth/hexgen/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.planetHasBonus = exports.bonusFromHex = exports.getBytesFromHex = void 0;
    var big_integer_1 = __importDefault(require_BigInteger());
    function getBytesFromHex(hexStr, startByte, endByte) {
      const byteString = hexStr.substring(2 * startByte, 2 * endByte);
      return (0, big_integer_1.default)(`0x${byteString}`);
    }
    exports.getBytesFromHex = getBytesFromHex;
    var bonusById = new Map();
    function bonusFromHex(hex) {
      const bonus = bonusById.get(hex);
      if (bonus)
        return bonus;
      const newBonus = Array(6).fill(false);
      for (let i = 0; i < newBonus.length; i++) {
        newBonus[i] = getBytesFromHex(hex, 9 + i, 10 + i).lesser(16);
      }
      bonusById.set(hex, newBonus);
      return newBonus;
    }
    exports.bonusFromHex = bonusFromHex;
    function planetHasBonus(planet) {
      if (!planet)
        return false;
      return bonusFromHex(planet.locationId).some((bonus) => bonus);
    }
    exports.planetHasBonus = planetHasBonus;
  }
});

// node_modules/@darkforest_eth/serde/dist/planet.js
var require_planet2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/planet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodePlanetDefaults = exports.decodePlanet = void 0;
    var constants_1 = require_dist2();
    var hexgen_1 = require_dist3();
    var address_1 = require_address();
    var location_1 = require_location();
    function decodePlanet(rawLocationId, rawPlanet, rawPlanetExtendedInfo, rawPlanetExtendedInfo2) {
      const locationId = (0, location_1.locationIdFromDecStr)(rawLocationId.toString());
      const planet = {
        locationId,
        perlin: rawPlanetExtendedInfo.perlin.toNumber(),
        spaceType: rawPlanetExtendedInfo.spaceType,
        owner: (0, address_1.address)(rawPlanet.owner),
        hatLevel: rawPlanetExtendedInfo.hatLevel.toNumber(),
        planetLevel: rawPlanet.planetLevel.toNumber(),
        planetType: rawPlanet.planetType,
        isHomePlanet: rawPlanet.isHomePlanet,
        energyCap: rawPlanet.populationCap.toNumber() / constants_1.CONTRACT_PRECISION,
        energyGrowth: rawPlanet.populationGrowth.toNumber() / constants_1.CONTRACT_PRECISION,
        silverCap: rawPlanet.silverCap.toNumber() / constants_1.CONTRACT_PRECISION,
        silverGrowth: rawPlanet.silverGrowth.toNumber() / constants_1.CONTRACT_PRECISION,
        energy: rawPlanet.population.toNumber() / constants_1.CONTRACT_PRECISION,
        silver: rawPlanet.silver.toNumber() / constants_1.CONTRACT_PRECISION,
        range: rawPlanet.range.toNumber(),
        speed: rawPlanet.speed.toNumber(),
        defense: rawPlanet.defense.toNumber(),
        spaceJunk: rawPlanetExtendedInfo.spaceJunk.toNumber(),
        lastUpdated: rawPlanetExtendedInfo.lastUpdated.toNumber(),
        upgradeState: [
          rawPlanetExtendedInfo.upgradeState0.toNumber(),
          rawPlanetExtendedInfo.upgradeState1.toNumber(),
          rawPlanetExtendedInfo.upgradeState2.toNumber()
        ],
        unconfirmedClearEmoji: false,
        unconfirmedAddEmoji: false,
        loadingServerState: false,
        needsServerRefresh: true,
        silverSpent: 0,
        coordsRevealed: false,
        isInContract: true,
        syncedWithContract: true,
        hasTriedFindingArtifact: rawPlanetExtendedInfo[9],
        prospectedBlockNumber: rawPlanetExtendedInfo.prospectedBlockNumber.eq(0) ? void 0 : rawPlanetExtendedInfo.prospectedBlockNumber.toNumber(),
        destroyed: rawPlanetExtendedInfo[11],
        heldArtifactIds: [],
        bonus: (0, hexgen_1.bonusFromHex)(locationId),
        pausers: rawPlanetExtendedInfo2.pausers.toNumber(),
        invader: (0, address_1.address)(rawPlanetExtendedInfo2.invader),
        capturer: (0, address_1.address)(rawPlanetExtendedInfo2.capturer),
        invadeStartBlock: rawPlanetExtendedInfo2.invadeStartBlock.eq(0) ? void 0 : rawPlanetExtendedInfo2.invadeStartBlock.toNumber()
      };
      return planet;
    }
    exports.decodePlanet = decodePlanet;
    function decodePlanetDefaults(rawDefaults) {
      return {
        populationCap: rawDefaults.map((x) => x[1].toNumber() / constants_1.CONTRACT_PRECISION),
        populationGrowth: rawDefaults.map((x) => x[2].toNumber() / constants_1.CONTRACT_PRECISION),
        range: rawDefaults.map((x) => x[3].toNumber()),
        speed: rawDefaults.map((x) => x[4].toNumber()),
        defense: rawDefaults.map((x) => x[5].toNumber()),
        silverGrowth: rawDefaults.map((x) => x[6].toNumber() / constants_1.CONTRACT_PRECISION),
        silverCap: rawDefaults.map((x) => x[7].toNumber() / constants_1.CONTRACT_PRECISION),
        barbarianPercentage: rawDefaults.map((x) => x[8].toNumber())
      };
    }
    exports.decodePlanetDefaults = decodePlanetDefaults;
  }
});

// node_modules/@darkforest_eth/serde/dist/player.js
var require_player2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/player.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodePlayer = void 0;
    var address_1 = require_address();
    var location_1 = require_location();
    function decodePlayer(rawPlayer) {
      return {
        address: (0, address_1.address)(rawPlayer.player),
        initTimestamp: rawPlayer.initTimestamp.toNumber(),
        homePlanetId: (0, location_1.locationIdFromEthersBN)(rawPlayer.homePlanetId),
        lastRevealTimestamp: rawPlayer.lastRevealTimestamp.toNumber(),
        lastClaimTimestamp: rawPlayer.lastRevealTimestamp.toNumber(),
        score: rawPlayer.score.toNumber(),
        spaceJunk: rawPlayer.spaceJunk.toNumber(),
        spaceJunkLimit: rawPlayer.spaceJunkLimit.toNumber(),
        claimedShips: rawPlayer.claimedShips
      };
    }
    exports.decodePlayer = decodePlayer;
  }
});

// node_modules/@darkforest_eth/serde/dist/reveal.js
var require_reveal2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/reveal.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeRevealedCoords = void 0;
    var constants_1 = require_dist2();
    var big_integer_1 = __importDefault(require_BigInteger());
    var address_1 = require_address();
    var location_1 = require_location();
    function decodeRevealedCoords(rawRevealedCoords) {
      const locationId = (0, location_1.locationIdFromDecStr)(rawRevealedCoords.locationId.toString());
      let xBI = (0, big_integer_1.default)(rawRevealedCoords.x.toString());
      let yBI = (0, big_integer_1.default)(rawRevealedCoords.y.toString());
      let x = 0;
      let y = 0;
      if (xBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        xBI = xBI.minus(constants_1.LOCATION_ID_UB);
      }
      x = xBI.toJSNumber();
      if (yBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        yBI = yBI.minus(constants_1.LOCATION_ID_UB);
      }
      y = yBI.toJSNumber();
      return {
        hash: locationId,
        x,
        y,
        revealer: (0, address_1.address)(rawRevealedCoords.revealer)
      };
    }
    exports.decodeRevealedCoords = decodeRevealedCoords;
  }
});

// node_modules/@darkforest_eth/serde/dist/transactions.js
var require_transactions2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/transactions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUnconfirmedCapturePlanetTx = exports.isUnconfirmedInvadePlanetTx = exports.isUnconfirmedGetShipsTx = exports.isUnconfirmedWithdrawSilverTx = exports.isUnconfirmedDeactivateArtifactTx = exports.isUnconfirmedActivateArtifactTx = exports.isUnconfirmedProspectPlanetTx = exports.isUnconfirmedWithdrawArtifactTx = exports.isUnconfirmedDepositArtifactTx = exports.isUnconfirmedFindArtifactTx = exports.isUnconfirmedTransferTx = exports.isUnconfirmedBuyHatTx = exports.isUnconfirmedUpgradeTx = exports.isUnconfirmedReleaseTx = exports.isUnconfirmedMoveTx = exports.isUnconfirmedInitTx = exports.isUnconfirmedRevealTx = exports.isUnconfirmedInvadePlanet = exports.isUnconfirmedCapturePlanet = exports.isUnconfirmedGetShips = exports.isUnconfirmedWithdrawSilver = exports.isUnconfirmedDeactivateArtifact = exports.isUnconfirmedActivateArtifact = exports.isUnconfirmedProspectPlanet = exports.isUnconfirmedWithdrawArtifact = exports.isUnconfirmedDepositArtifact = exports.isUnconfirmedFindArtifact = exports.isUnconfirmedTransfer = exports.isUnconfirmedBuyHat = exports.isUnconfirmedUpgrade = exports.isUnconfirmedRelease = exports.isUnconfirmedMove = exports.isUnconfirmedInit = exports.isUnconfirmedReveal = void 0;
    function isUnconfirmedReveal(txIntent) {
      return txIntent.methodName === "revealLocation";
    }
    exports.isUnconfirmedReveal = isUnconfirmedReveal;
    function isUnconfirmedInit(txIntent) {
      return txIntent.methodName === "initializePlayer";
    }
    exports.isUnconfirmedInit = isUnconfirmedInit;
    function isUnconfirmedMove(txIntent) {
      return txIntent.methodName === "move";
    }
    exports.isUnconfirmedMove = isUnconfirmedMove;
    function isUnconfirmedRelease(txIntent) {
      return isUnconfirmedMove(txIntent) && txIntent.abandoning;
    }
    exports.isUnconfirmedRelease = isUnconfirmedRelease;
    function isUnconfirmedUpgrade(txIntent) {
      return txIntent.methodName === "upgradePlanet";
    }
    exports.isUnconfirmedUpgrade = isUnconfirmedUpgrade;
    function isUnconfirmedBuyHat(txIntent) {
      return txIntent.methodName === "buyHat";
    }
    exports.isUnconfirmedBuyHat = isUnconfirmedBuyHat;
    function isUnconfirmedTransfer(txIntent) {
      return txIntent.methodName === "transferPlanet";
    }
    exports.isUnconfirmedTransfer = isUnconfirmedTransfer;
    function isUnconfirmedFindArtifact(txIntent) {
      return txIntent.methodName === "findArtifact";
    }
    exports.isUnconfirmedFindArtifact = isUnconfirmedFindArtifact;
    function isUnconfirmedDepositArtifact(txIntent) {
      return txIntent.methodName === "depositArtifact";
    }
    exports.isUnconfirmedDepositArtifact = isUnconfirmedDepositArtifact;
    function isUnconfirmedWithdrawArtifact(txIntent) {
      return txIntent.methodName === "withdrawArtifact";
    }
    exports.isUnconfirmedWithdrawArtifact = isUnconfirmedWithdrawArtifact;
    function isUnconfirmedProspectPlanet(txIntent) {
      return txIntent.methodName === "prospectPlanet";
    }
    exports.isUnconfirmedProspectPlanet = isUnconfirmedProspectPlanet;
    function isUnconfirmedActivateArtifact(txIntent) {
      return txIntent.methodName === "activateArtifact";
    }
    exports.isUnconfirmedActivateArtifact = isUnconfirmedActivateArtifact;
    function isUnconfirmedDeactivateArtifact(txIntent) {
      return txIntent.methodName === "deactivateArtifact";
    }
    exports.isUnconfirmedDeactivateArtifact = isUnconfirmedDeactivateArtifact;
    function isUnconfirmedWithdrawSilver(txIntent) {
      return txIntent.methodName === "withdrawSilver";
    }
    exports.isUnconfirmedWithdrawSilver = isUnconfirmedWithdrawSilver;
    function isUnconfirmedGetShips(txIntent) {
      return txIntent.methodName === "giveSpaceShips";
    }
    exports.isUnconfirmedGetShips = isUnconfirmedGetShips;
    function isUnconfirmedCapturePlanet(txIntent) {
      return txIntent.methodName === "capturePlanet";
    }
    exports.isUnconfirmedCapturePlanet = isUnconfirmedCapturePlanet;
    function isUnconfirmedInvadePlanet(txIntent) {
      return txIntent.methodName === "invadePlanet";
    }
    exports.isUnconfirmedInvadePlanet = isUnconfirmedInvadePlanet;
    function isUnconfirmedRevealTx(tx) {
      return isUnconfirmedReveal(tx.intent);
    }
    exports.isUnconfirmedRevealTx = isUnconfirmedRevealTx;
    function isUnconfirmedInitTx(tx) {
      return isUnconfirmedInit(tx.intent);
    }
    exports.isUnconfirmedInitTx = isUnconfirmedInitTx;
    function isUnconfirmedMoveTx(tx) {
      return isUnconfirmedMove(tx.intent);
    }
    exports.isUnconfirmedMoveTx = isUnconfirmedMoveTx;
    function isUnconfirmedReleaseTx(tx) {
      return isUnconfirmedRelease(tx.intent);
    }
    exports.isUnconfirmedReleaseTx = isUnconfirmedReleaseTx;
    function isUnconfirmedUpgradeTx(tx) {
      return isUnconfirmedUpgrade(tx.intent);
    }
    exports.isUnconfirmedUpgradeTx = isUnconfirmedUpgradeTx;
    function isUnconfirmedBuyHatTx(tx) {
      return isUnconfirmedBuyHat(tx.intent);
    }
    exports.isUnconfirmedBuyHatTx = isUnconfirmedBuyHatTx;
    function isUnconfirmedTransferTx(tx) {
      return isUnconfirmedTransfer(tx.intent);
    }
    exports.isUnconfirmedTransferTx = isUnconfirmedTransferTx;
    function isUnconfirmedFindArtifactTx(tx) {
      return isUnconfirmedFindArtifact(tx.intent);
    }
    exports.isUnconfirmedFindArtifactTx = isUnconfirmedFindArtifactTx;
    function isUnconfirmedDepositArtifactTx(tx) {
      return isUnconfirmedDepositArtifact(tx.intent);
    }
    exports.isUnconfirmedDepositArtifactTx = isUnconfirmedDepositArtifactTx;
    function isUnconfirmedWithdrawArtifactTx(tx) {
      return isUnconfirmedWithdrawArtifact(tx.intent);
    }
    exports.isUnconfirmedWithdrawArtifactTx = isUnconfirmedWithdrawArtifactTx;
    function isUnconfirmedProspectPlanetTx(tx) {
      return isUnconfirmedProspectPlanet(tx.intent);
    }
    exports.isUnconfirmedProspectPlanetTx = isUnconfirmedProspectPlanetTx;
    function isUnconfirmedActivateArtifactTx(tx) {
      return isUnconfirmedActivateArtifact(tx.intent);
    }
    exports.isUnconfirmedActivateArtifactTx = isUnconfirmedActivateArtifactTx;
    function isUnconfirmedDeactivateArtifactTx(tx) {
      return isUnconfirmedDeactivateArtifact(tx.intent);
    }
    exports.isUnconfirmedDeactivateArtifactTx = isUnconfirmedDeactivateArtifactTx;
    function isUnconfirmedWithdrawSilverTx(tx) {
      return isUnconfirmedWithdrawSilver(tx.intent);
    }
    exports.isUnconfirmedWithdrawSilverTx = isUnconfirmedWithdrawSilverTx;
    function isUnconfirmedGetShipsTx(tx) {
      return isUnconfirmedGetShips(tx.intent);
    }
    exports.isUnconfirmedGetShipsTx = isUnconfirmedGetShipsTx;
    function isUnconfirmedInvadePlanetTx(tx) {
      return isUnconfirmedInvadePlanet(tx.intent);
    }
    exports.isUnconfirmedInvadePlanetTx = isUnconfirmedInvadePlanetTx;
    function isUnconfirmedCapturePlanetTx(tx) {
      return isUnconfirmedCapturePlanet(tx.intent);
    }
    exports.isUnconfirmedCapturePlanetTx = isUnconfirmedCapturePlanetTx;
  }
});

// node_modules/@darkforest_eth/serde/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/index.js"(exports) {
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
    __exportStar(require_address(), exports);
    __exportStar(require_arrival2(), exports);
    __exportStar(require_artifact2(), exports);
    __exportStar(require_event2(), exports);
    __exportStar(require_location(), exports);
    __exportStar(require_planet2(), exports);
    __exportStar(require_player2(), exports);
    __exportStar(require_reveal2(), exports);
    __exportStar(require_transactions2(), exports);
    __exportStar(require_upgrade2(), exports);
  }
});

// plugins/Depo.ts
var import_types = __toModule(require_dist());

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
var import_serde = __toModule(require_dist4());
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
export {
  Depo_default as default
};