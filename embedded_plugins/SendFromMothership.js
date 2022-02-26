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
    function artifactNameFromArtifact(artifact) {
      const idNum = parseInt(artifact.id, 16);
      const roll1 = idNum % 7919 % godGrammar.god1.length;
      const roll2 = idNum % 7883 % godGrammar.god2.length;
      const name2 = godGrammar.god1[roll1] + godGrammar.god2[roll2];
      const nameCapitalized = name2.charAt(0).toUpperCase() + name2.slice(1);
      return nameCapitalized;
    }
    exports.artifactNameFromArtifact = artifactNameFromArtifact;
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
      function gcd2(a, b) {
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
        return a.divide(gcd2(a, b)).multiply(b);
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
      Integer.gcd = gcd2;
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

// node_modules/@darkforest_eth/procedural/dist/ArtifactProcgen.js
var require_ArtifactProcgen = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/ArtifactProcgen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mockLegendary = exports.mockEpic = exports.mockRare = exports.mockCommon = exports.mockArtifactWithRarity = exports.mockArtifact = exports.artifactName = void 0;
    var constants_1 = require_dist2();
    var types_1 = require_dist();
    var namesById = new Map();
    var artifactName = (artifact) => {
      if (!artifact)
        return "Unknown";
      const myName = namesById.get(artifact.id);
      if (myName)
        return myName;
      const name2 = (0, types_1.artifactNameFromArtifact)(artifact);
      namesById.set(artifact.id, name2);
      return name2;
    };
    exports.artifactName = artifactName;
    var randomHex = (len) => {
      let str = "";
      const chars = "abcdef0123456789".split("");
      while (str.length < len) {
        str = str + chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    };
    var mockArtifact = (rarity, artifactType = types_1.ArtifactType.Spaceship, planetBiome = types_1.Biome.WASTELAND) => ({
      id: randomHex(64),
      planetDiscoveredOn: constants_1.EMPTY_LOCATION_ID,
      planetBiome,
      mintedAtTimestamp: Date.now(),
      discoverer: constants_1.EMPTY_ADDRESS,
      currentOwner: constants_1.EMPTY_ADDRESS,
      isInititalized: true,
      lastActivated: 0,
      lastDeactivated: 0,
      rarity,
      artifactType,
      upgrade: {
        energyCapMultiplier: 120,
        energyGroMultiplier: 100,
        rangeMultiplier: 100,
        speedMultiplier: 85,
        defMultiplier: 100
      },
      onPlanetId: void 0
    });
    exports.mockArtifact = mockArtifact;
    var mockArtifactWithRarity = (rarity, artifactType = types_1.ArtifactType.Spaceship, planetBiome = types_1.Biome.WASTELAND) => (0, exports.mockArtifact)(rarity, artifactType, planetBiome);
    exports.mockArtifactWithRarity = mockArtifactWithRarity;
    exports.mockCommon = (0, exports.mockArtifactWithRarity)(types_1.ArtifactRarity.Common, types_1.ArtifactType.Spaceship, types_1.Biome.WASTELAND);
    exports.mockRare = (0, exports.mockArtifactWithRarity)(types_1.ArtifactRarity.Rare, types_1.ArtifactType.Spaceship, types_1.Biome.WASTELAND);
    exports.mockEpic = (0, exports.mockArtifactWithRarity)(types_1.ArtifactRarity.Epic, types_1.ArtifactType.Spaceship, types_1.Biome.WASTELAND);
    exports.mockLegendary = (0, exports.mockArtifactWithRarity)(types_1.ArtifactRarity.Legendary, types_1.ArtifactType.Spaceship, types_1.Biome.WASTELAND);
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
    function artifactIdFromEthersBN(artifactId) {
      return artifactIdFromDecStr(artifactId.toString());
    }
    exports.artifactIdFromEthersBN = artifactIdFromEthersBN;
    function artifactIdToDecStr(artifactId) {
      return (0, big_integer_1.default)(artifactId, 16).toString(10);
    }
    exports.artifactIdToDecStr = artifactIdToDecStr;
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
        id: artifactIdFromEthersBN(artifact.id),
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

// node_modules/@darkforest_eth/gamelogic/dist/artifact.js
var require_artifact3 = __commonJS({
  "node_modules/@darkforest_eth/gamelogic/dist/artifact.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPlayerControlledSpaceships = exports.canDepositArtifact = exports.canWithdrawArtifact = exports.canActivateArtifact = exports.dateMintedAt = exports.getActiveBlackDomain = exports.artifactFileName = exports.setForceAncient = exports.isAncient = exports.artifactRoll = exports.ArtifactFileColor = exports.levelFromRarity = exports.artifactBiomeName = exports.rarityNameFromArtifact = exports.rarityName = exports.biomeName = exports.getArtifactDebugName = exports.getActivatedArtifact = exports.isActivated = exports.artifactAvailableTimestamp = exports.durationUntilArtifactAvailable = exports.hasStatBoost = exports.isSpaceShip = exports.isBasic = exports.isRelic = exports.RelicsList = void 0;
    var constants_1 = require_dist2();
    var serde_1 = require_dist4();
    var types_1 = require_dist();
    exports.RelicsList = [
      types_1.ArtifactType.Wormhole,
      types_1.ArtifactType.PlanetaryShield,
      types_1.ArtifactType.PhotoidCannon,
      types_1.ArtifactType.BloomFilter,
      types_1.ArtifactType.BlackDomain
    ];
    function isRelic(type) {
      return types_1.ArtifactType.Wormhole <= type && type <= types_1.ArtifactType.BlackDomain;
    }
    exports.isRelic = isRelic;
    function isBasic(type) {
      return types_1.ArtifactType.Monolith <= type && type <= types_1.ArtifactType.Pyramid;
    }
    exports.isBasic = isBasic;
    function isSpaceShip(type) {
      return type !== void 0 && type >= constants_1.MIN_SPACESHIP_TYPE && type <= constants_1.MAX_SPACESHIP_TYPE;
    }
    exports.isSpaceShip = isSpaceShip;
    function hasStatBoost(type) {
      return !isSpaceShip(type) && type !== types_1.ArtifactType.BlackDomain && type !== types_1.ArtifactType.BloomFilter && type !== types_1.ArtifactType.Wormhole;
    }
    exports.hasStatBoost = hasStatBoost;
    var artifactCooldownHoursMap = {
      [types_1.ArtifactType.Unknown]: 24,
      [types_1.ArtifactType.Monolith]: 0,
      [types_1.ArtifactType.Colossus]: 0,
      [types_1.ArtifactType.Spaceship]: 0,
      [types_1.ArtifactType.Pyramid]: 0,
      [types_1.ArtifactType.Wormhole]: 4,
      [types_1.ArtifactType.PlanetaryShield]: 4,
      [types_1.ArtifactType.PhotoidCannon]: 24,
      [types_1.ArtifactType.BloomFilter]: 24,
      [types_1.ArtifactType.BlackDomain]: 24
    };
    var artifactIsAncientMap = new Map();
    function durationUntilArtifactAvailable(artifact) {
      return artifactAvailableTimestamp(artifact) - Date.now();
    }
    exports.durationUntilArtifactAvailable = durationUntilArtifactAvailable;
    function artifactAvailableTimestamp(artifact) {
      if (artifact.lastDeactivated === 0) {
        return Date.now();
      }
      const availableAtTimestampMs = artifact.lastDeactivated * 1e3 + artifactCooldownHoursMap[artifact.artifactType] * 60 * 60 * 1e3;
      return availableAtTimestampMs;
    }
    exports.artifactAvailableTimestamp = artifactAvailableTimestamp;
    function isActivated(artifact) {
      if (artifact === void 0) {
        return false;
      }
      return artifact.lastActivated > artifact.lastDeactivated;
    }
    exports.isActivated = isActivated;
    function getActivatedArtifact(artifacts) {
      return artifacts.find(isActivated);
    }
    exports.getActivatedArtifact = getActivatedArtifact;
    function getArtifactDebugName(a) {
      if (!a) {
        return "unknown artifact";
      }
      return a.id.substring(0, 8);
    }
    exports.getArtifactDebugName = getArtifactDebugName;
    var biomeName = (biome) => types_1.BiomeNames[biome];
    exports.biomeName = biomeName;
    var rarityName = (rarity) => types_1.ArtifactRarityNames[rarity];
    exports.rarityName = rarityName;
    var rarityNameFromArtifact = (a) => (0, exports.rarityName)(a.rarity);
    exports.rarityNameFromArtifact = rarityNameFromArtifact;
    function artifactBiomeName(artifact) {
      if (isAncient(artifact))
        return "Ancient";
      return (0, exports.biomeName)(artifact.planetBiome);
    }
    exports.artifactBiomeName = artifactBiomeName;
    var levelFromRarity = (rarity) => {
      if (rarity === types_1.ArtifactRarity.Mythic)
        return types_1.PlanetLevel.NINE;
      else if (rarity === types_1.ArtifactRarity.Legendary)
        return types_1.PlanetLevel.SEVEN;
      else if (rarity === types_1.ArtifactRarity.Epic)
        return types_1.PlanetLevel.FIVE;
      else if (rarity === types_1.ArtifactRarity.Rare)
        return types_1.PlanetLevel.THREE;
      else
        return types_1.PlanetLevel.ONE;
    };
    exports.levelFromRarity = levelFromRarity;
    var artifactFileNamesById = new Map();
    exports.ArtifactFileColor = {
      BLUE: 0,
      APP_BACKGROUND: 1
    };
    var forceAncient = void 0;
    function artifactRoll(id) {
      return (0, serde_1.hashToInt)(id) % 256;
    }
    exports.artifactRoll = artifactRoll;
    function isAncient(artifact) {
      if (forceAncient !== void 0)
        return forceAncient;
      if (isSpaceShip(artifact.artifactType))
        return false;
      const { id, planetBiome: biome } = artifact;
      if (artifactIsAncientMap.has(id)) {
        return artifactIsAncientMap.get(id) || false;
      }
      let ancient = false;
      const roll = artifactRoll(id);
      if (biome === types_1.Biome.CORRUPTED)
        ancient = roll % 2 === 0;
      else
        ancient = roll % 16 === 0;
      artifactIsAncientMap.set(id, ancient);
      return ancient;
    }
    exports.isAncient = isAncient;
    function setForceAncient(force) {
      forceAncient = force;
    }
    exports.setForceAncient = setForceAncient;
    function artifactFileName(videoMode, thumb, artifact, color, debugProps = void 0) {
      const { artifactType: type, rarity, planetBiome: biome, id } = artifact;
      if (isSpaceShip(type)) {
        switch (type) {
          case types_1.ArtifactType.ShipWhale:
            return "64-whale.png";
          case types_1.ArtifactType.ShipMothership:
            return "64-mothership.png";
          case types_1.ArtifactType.ShipCrescent:
            return "64-crescent.png";
          case types_1.ArtifactType.ShipGear:
            return "64-gear.png";
          case types_1.ArtifactType.ShipTitan:
            return "64-titan.png";
        }
      }
      const size = thumb ? "16" : "64";
      const ext = videoMode ? "webm" : "png";
      let fileName = "";
      if (!debugProps?.skipCaching && artifactFileNamesById.has(id)) {
        fileName = artifactFileNamesById.get(id) || "";
      } else {
        const typeStr = types_1.ArtifactTypeNames[type];
        const rarityStr = types_1.ArtifactRarityNames[rarity];
        let nameStr = "";
        if (debugProps) {
          if (debugProps.forceAncient) {
            nameStr = "ancient";
          } else {
            nameStr = biome + types_1.BiomeNames[biome];
          }
        } else {
          if (isAncient(artifact)) {
            nameStr = "ancient";
          } else {
            nameStr = biome + types_1.BiomeNames[biome];
          }
        }
        fileName = `${typeStr}-${rarityStr}-${nameStr}`;
      }
      if (!debugProps?.skipCaching)
        artifactFileNamesById.set(id, fileName);
      let colorStr = "";
      if (color === exports.ArtifactFileColor.APP_BACKGROUND)
        colorStr = "-bg";
      return `${size}-${fileName}${colorStr}.${ext}`;
    }
    exports.artifactFileName = artifactFileName;
    function getActiveBlackDomain(artifacts) {
      for (const artifact of artifacts) {
        if (artifact.artifactType === types_1.ArtifactType.BlackDomain && isActivated(artifact))
          return artifact;
      }
      return void 0;
    }
    exports.getActiveBlackDomain = getActiveBlackDomain;
    var dateMintedAt = (artifact) => {
      if (!artifact)
        return "00/00/0000";
      return new Date(artifact.mintedAtTimestamp * 1e3).toDateString();
    };
    exports.dateMintedAt = dateMintedAt;
    function canActivateArtifact(artifact, planet, artifactsOnPlanet) {
      if (isSpaceShip(artifact.artifactType)) {
        return planet && planet.owner === constants_1.EMPTY_ADDRESS && artifact.artifactType === types_1.ArtifactType.ShipCrescent && artifact.activations === 0;
      }
      const available = artifactAvailableTimestamp(artifact);
      if (available !== void 0) {
        const now = Date.now();
        const anyArtifactActive = artifactsOnPlanet.some((a) => isActivated(a));
        const waitUntilAvailable = available - now;
        const availableToActivate = waitUntilAvailable <= -0 && !anyArtifactActive && planet?.locationId === artifact.onPlanetId && !!artifact.onPlanetId;
        return availableToActivate;
      }
      return false;
    }
    exports.canActivateArtifact = canActivateArtifact;
    function canWithdrawArtifact(account, artifact, planet) {
      return planet && !planet.destroyed && planet.owner === account && planet.planetType === types_1.PlanetType.TRADING_POST && !isActivated(artifact) && !isSpaceShip(artifact.artifactType);
    }
    exports.canWithdrawArtifact = canWithdrawArtifact;
    function canDepositArtifact(account, artifact, planet) {
      return planet && !planet.destroyed && planet.owner === account && !artifact.onPlanetId && planet.planetType === types_1.PlanetType.TRADING_POST;
    }
    exports.canDepositArtifact = canDepositArtifact;
    function getPlayerControlledSpaceships(artifacts, owner) {
      if (!owner)
        return [];
      return (artifacts || []).filter((a) => a?.controller === owner);
    }
    exports.getPlayerControlledSpaceships = getPlayerControlledSpaceships;
  }
});

// node_modules/@darkforest_eth/gamelogic/dist/number.js
var require_number = __commonJS({
  "node_modules/@darkforest_eth/gamelogic/dist/number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatNumber = void 0;
    var formatNumber = (num, smallDec = 0) => {
      if (num < 1e3) {
        if (`${num}` === num.toFixed(0)) {
          return `${num.toFixed(0)}`;
        } else {
          return `${num.toFixed(smallDec)}`;
        }
      }
      const suffixes = ["", "K", "M", "B", "T", "q", "Q"];
      let log000 = 0;
      let rem = num;
      while (rem / 1e3 >= 1) {
        rem /= 1e3;
        log000++;
      }
      if (log000 === 0)
        return `${Math.floor(num)}`;
      if (rem < 10)
        return `${rem.toFixed(1)}${suffixes[log000]}`;
      else if (rem < 100)
        return `${rem.toFixed(1)}${suffixes[log000]}`;
      else if (log000 < suffixes.length)
        return `${rem.toFixed(0)}${suffixes[log000]}`;
      else
        return `${rem.toFixed(0)}E${log000 * 3}`;
    };
    exports.formatNumber = formatNumber;
  }
});

// node_modules/@darkforest_eth/gamelogic/dist/planet.js
var require_planet3 = __commonJS({
  "node_modules/@darkforest_eth/gamelogic/dist/planet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeUntilNextBroadcastAvailable = exports.isLocatable = exports.isEmojiFlagMessage = exports.hasOwner = exports.getRange = exports.getPlanetRank = void 0;
    var constants_1 = require_dist2();
    var types_1 = require_dist();
    var getPlanetRank = (planet) => {
      if (!planet)
        return 0;
      return planet.upgradeState.reduce((a, b) => a + b);
    };
    exports.getPlanetRank = getPlanetRank;
    function getRange(planet, percentEnergySending = 100, rangeBoost = 1) {
      if (percentEnergySending === 0)
        return 0;
      return Math.max(Math.log2(percentEnergySending / 5), 0) * planet.range * rangeBoost;
    }
    exports.getRange = getRange;
    function hasOwner(planet) {
      return planet.owner !== constants_1.EMPTY_ADDRESS;
    }
    exports.hasOwner = hasOwner;
    function isEmojiFlagMessage(planetMessage) {
      return planetMessage.body !== void 0 && planetMessage.type === types_1.PlanetMessageType.EmojiFlag;
    }
    exports.isEmojiFlagMessage = isEmojiFlagMessage;
    function isLocatable(planet) {
      return planet !== void 0 && planet.location !== void 0;
    }
    exports.isLocatable = isLocatable;
    function timeUntilNextBroadcastAvailable(lastRevealTimestamp, locationRevealCooldown) {
      if (!lastRevealTimestamp) {
        return 0;
      }
      return (lastRevealTimestamp + locationRevealCooldown) * 1e3 - Date.now();
    }
    exports.timeUntilNextBroadcastAvailable = timeUntilNextBroadcastAvailable;
  }
});

// node_modules/@darkforest_eth/gamelogic/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@darkforest_eth/gamelogic/dist/index.js"(exports) {
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
    __exportStar(require_artifact3(), exports);
    __exportStar(require_number(), exports);
    __exportStar(require_planet3(), exports);
  }
});

// node_modules/@darkforest_eth/hashing/dist/fakeHash.js
var require_fakeHash = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/fakeHash.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fakeHash = exports.seededRandom = void 0;
    var big_integer_1 = __importDefault(require_BigInteger());
    function seededRandom(seed) {
      const x = Math.sin(seed) * 1e4;
      return x - Math.floor(x);
    }
    exports.seededRandom = seededRandom;
    var SIZE = 65536;
    var globalSeed = 1;
    var globalRandom = () => {
      return seededRandom(globalSeed++);
    };
    var arr = [];
    for (let i = 0; i < SIZE; i += 1) {
      arr.push({
        idx: i,
        rand: globalRandom()
      });
    }
    arr.sort((a, b) => a.rand - b.rand);
    var lookup = arr.map((a) => a.idx);
    var lookupInv = Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i += 1) {
      lookupInv[lookup[i]] = i;
    }
    var posMod = (m, n) => {
      const val = Math.floor(m / n) * n;
      return m - val;
    };
    var sigma = (x, y) => {
      const val = 256 * x + y;
      const idx = posMod(val, SIZE);
      const ret = [Math.floor(lookup[idx] / 256), lookup[idx] % 256];
      return ret;
    };
    var cyc = (m, n) => (r, s) => {
      const val = posMod(256 * (r + m) + (s + n), SIZE);
      const ret = [Math.floor(val / 256), val % 256];
      return ret;
    };
    var fakeHash = (planetRarity) => (x, y) => {
      const m = Math.floor(x / 256);
      const r = x - m * 256;
      const n = Math.floor(y / 256);
      const s = y - n * 256;
      const [mPrime, nPrime] = sigma(m, n);
      const [xPrime, yPrime] = sigma(...cyc(mPrime, nPrime)(...sigma(r, s)));
      const validPlanet = xPrime * 256 + yPrime < 256 * 256 / planetRarity;
      let hash = validPlanet ? "00000000" : "1eadbeef";
      const seed = 8 * (1e7 * x + y);
      for (let i = 0; i < 7; i += 1) {
        const rand = Math.floor(seededRandom(seed + i) * 2 ** 32);
        let append = rand.toString(16);
        while (append.length < 8) {
          append = "0" + append;
        }
        hash += append;
      }
      return (0, big_integer_1.default)(hash, 16);
    };
    exports.fakeHash = fakeHash;
  }
});

// node_modules/@darkforest_eth/hashing/dist/fractions/bigFraction.js
var require_bigFraction = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/fractions/bigFraction.js"(exports, module) {
    function errorConstructor() {
      const temp = Error.apply(this, arguments);
      temp["name"] = this["name"] = name;
      this["stack"] = temp["stack"];
      this["message"] = temp["message"];
    }
    try {
      (function(root) {
        "use strict";
        if (!BigInt)
          BigInt = function(n) {
            return n;
          };
        const C_ONE = BigInt(1);
        const C_ZERO2 = BigInt(0);
        const C_TEN = BigInt(10);
        const C_TWO = BigInt(2);
        const C_FIVE = BigInt(5);
        const MAX_CYCLE_LEN = BigInt(2e3);
        const P2 = {
          s: C_ONE,
          n: C_ZERO2,
          d: C_ONE
        };
        function createError(name2) {
          function IntermediateInheritor() {
          }
          IntermediateInheritor.prototype = Error.prototype;
          errorConstructor.prototype = new IntermediateInheritor();
          return errorConstructor;
        }
        const DivisionByZero = Fraction2["DivisionByZero"] = createError("DivisionByZero");
        const InvalidParameter = Fraction2["InvalidParameter"] = createError("InvalidParameter");
        function assign(n, s) {
          try {
            n = BigInt(n);
          } catch (e) {
            throw new InvalidParameter();
          }
          return n * s;
        }
        const parse2 = function(p1, p2) {
          let n = C_ZERO2, d = C_ONE, s = C_ONE;
          if (p1 === void 0 || p1 === null) {
          } else if (p2 !== void 0) {
            n = BigInt(p1);
            d = BigInt(p2);
            s = n * d;
          } else if (typeof p1 === "object") {
            if ("d" in p1 && "n" in p1) {
              n = BigInt(p1["n"]);
              d = BigInt(p1["d"]);
              if ("s" in p1)
                n *= BigInt(p1["s"]);
            } else if (0 in p1) {
              n = BigInt(p1[0]);
              if (1 in p1)
                d = BigInt(p1[1]);
            } else if (p1 instanceof BigInt) {
              n = BigInt(p1);
            } else {
              throw new InvalidParameter();
            }
            s = n * d;
          } else if (typeof p1 === "number") {
            if (isNaN(p1)) {
              throw new InvalidParameter();
            }
            if (p1 < 0) {
              s = -C_ONE;
              p1 = -p1;
            }
            if (p1 % 1 === 0) {
              n = BigInt(p1);
            } else if (p1 > 0) {
              let z = 1;
              let A = 0, B = 1;
              let C = 1, D = 1;
              let N = 1e7;
              if (p1 >= 1) {
                z = 10 ** Math.floor(1 + Math.log10(p1));
                p1 /= z;
              }
              while (B <= N && D <= N) {
                let M = (A + C) / (B + D);
                if (p1 === M) {
                  if (B + D <= N) {
                    n = A + C;
                    d = B + D;
                  } else if (D > B) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                  break;
                } else {
                  if (p1 > M) {
                    A += C;
                    B += D;
                  } else {
                    C += A;
                    D += B;
                  }
                  if (B > N) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                }
              }
              n = BigInt(n) * BigInt(z);
              d = BigInt(d);
            } else if (isNaN(p1)) {
              d = n = NaN;
            }
          } else if (typeof p1 === "string") {
            let ndx = 0;
            let v = C_ZERO2, w = C_ZERO2, x = C_ZERO2, y = C_ONE, z = C_ONE;
            let match = p1.match(/\d+|./g);
            if (match === null)
              throw new InvalidParameter();
            if (match[ndx] === "-") {
              s = -C_ONE;
              ndx++;
            } else if (match[ndx] === "+") {
              ndx++;
            }
            if (match.length === ndx + 1) {
              w = assign(match[ndx++], s);
            } else if (match[ndx + 1] === "." || match[ndx] === ".") {
              if (match[ndx] !== ".") {
                v = assign(match[ndx++], s);
              }
              ndx++;
              if (ndx + 1 === match.length || match[ndx + 1] === "(" && match[ndx + 3] === ")" || match[ndx + 1] === "'" && match[ndx + 3] === "'") {
                w = assign(match[ndx], s);
                y = C_TEN ** BigInt(match[ndx].length);
                ndx++;
              }
              if (match[ndx] === "(" && match[ndx + 2] === ")" || match[ndx] === "'" && match[ndx + 2] === "'") {
                x = assign(match[ndx + 1], s);
                z = C_TEN ** BigInt(match[ndx + 1].length) - C_ONE;
                ndx += 3;
              }
            } else if (match[ndx + 1] === "/" || match[ndx + 1] === ":") {
              w = assign(match[ndx], s);
              y = assign(match[ndx + 2], C_ONE);
              ndx += 3;
            } else if (match[ndx + 3] === "/" && match[ndx + 1] === " ") {
              v = assign(match[ndx], s);
              w = assign(match[ndx + 2], s);
              y = assign(match[ndx + 4], C_ONE);
              ndx += 5;
            }
            if (match.length <= ndx) {
              d = y * z;
              s = n = x + d * v + z * w;
            } else {
              throw new InvalidParameter();
            }
          } else {
            throw new InvalidParameter();
          }
          if (d === C_ZERO2) {
            throw new DivisionByZero();
          }
          P2["s"] = s < C_ZERO2 ? -C_ONE : C_ONE;
          P2["n"] = n < C_ZERO2 ? -n : n;
          P2["d"] = d < C_ZERO2 ? -d : d;
        };
        function modpow(b, e, m) {
          let r = C_ONE;
          for (; e > C_ZERO2; b = b * b % m, e >>= C_ONE) {
            if (e & C_ONE) {
              r = r * b % m;
            }
          }
          return r;
        }
        function cycleLen(n, d) {
          for (; d % C_TWO === C_ZERO2; d /= C_TWO) {
          }
          for (; d % C_FIVE === C_ZERO2; d /= C_FIVE) {
          }
          if (d === C_ONE)
            return C_ZERO2;
          let rem = C_TEN % d;
          let t = C_ONE;
          for (; rem !== C_ONE; t++) {
            rem = rem * C_TEN % d;
            if (t > MAX_CYCLE_LEN)
              return C_ZERO2;
          }
          return t;
        }
        function cycleStart(n, d, len) {
          let rem1 = C_ONE;
          let rem2 = modpow(C_TEN, len, d);
          for (let t = 0; t < 300; t++) {
            if (rem1 === rem2)
              return BigInt(t);
            rem1 = rem1 * C_TEN % d;
            rem2 = rem2 * C_TEN % d;
          }
          return 0;
        }
        function gcd2(a, b) {
          if (!a)
            return b;
          if (!b)
            return a;
          while (1) {
            a %= b;
            if (!a)
              return b;
            b %= a;
            if (!b)
              return a;
          }
        }
        function Fraction2(a, b) {
          if (!(this instanceof Fraction2)) {
            return new Fraction2(a, b);
          }
          parse2(a, b);
          a = gcd2(P2["d"], P2["n"]);
          this["s"] = P2["s"];
          this["n"] = P2["n"] / a | C_ZERO2;
          this["d"] = P2["d"] / a | C_ZERO2;
        }
        Fraction2.prototype = {
          s: C_ONE,
          n: C_ZERO2,
          d: C_ONE,
          abs: function() {
            return new Fraction2(this["n"], this["d"]);
          },
          neg: function() {
            return new Fraction2(-this["s"] * this["n"], this["d"]);
          },
          add: function(a, b) {
            parse2(a, b);
            return new Fraction2(this["s"] * this["n"] * P2["d"] + P2["s"] * this["d"] * P2["n"], this["d"] * P2["d"]);
          },
          sub: function(a, b) {
            parse2(a, b);
            return new Fraction2(this["s"] * this["n"] * P2["d"] - P2["s"] * this["d"] * P2["n"], this["d"] * P2["d"]);
          },
          mul: function(a, b) {
            parse2(a, b);
            return new Fraction2(this["s"] * P2["s"] * this["n"] * P2["n"], this["d"] * P2["d"]);
          },
          div: function(a, b) {
            parse2(a, b);
            return new Fraction2(this["s"] * P2["s"] * this["n"] * P2["d"], this["d"] * P2["n"]);
          },
          clone: function() {
            return new Fraction2(this);
          },
          mod: function(a, b) {
            if (a === void 0) {
              return new Fraction2(this["s"] * this["n"] % this["d"], 1);
            }
            parse2(a, b);
            if (P2["n"] === 0 && this["d"] === 0) {
              Fraction2(0, 0);
            }
            return new Fraction2(this["s"] * (P2["d"] * this["n"]) % (P2["n"] * this["d"]), P2["d"] * this["d"]);
          },
          gcd: function(a, b) {
            parse2(a, b);
            return new Fraction2(gcd2(P2["n"], this["n"]) * gcd2(P2["d"], this["d"]), P2["d"] * this["d"]);
          },
          lcm: function(a, b) {
            parse2(a, b);
            if (P2["n"] === C_ZERO2 && this["n"] === C_ZERO2) {
              return new Fraction2();
            }
            return new Fraction2(P2["n"] * this["n"], gcd2(P2["n"], this["n"]) * gcd2(P2["d"], this["d"]));
          },
          inverse: function() {
            return new Fraction2(this["s"] * this["d"], this["n"]);
          },
          pow: function(m) {
            if (m < 0) {
              return new Fraction2((this["s"] * this["d"]) ** BigInt(-m), this["n"] ** BigInt(-m));
            } else {
              return new Fraction2((this["s"] * this["n"]) ** BigInt(+m), this["d"] ** BigInt(+m));
            }
          },
          equals: function(a, b) {
            parse2(a, b);
            return this["s"] * this["n"] * P2["d"] === P2["s"] * P2["n"] * this["d"];
          },
          compare: function(a, b) {
            parse2(a, b);
            let t = this["s"] * this["n"] * P2["d"] - P2["s"] * P2["n"] * this["d"];
            return (C_ZERO2 < t) - (t < C_ZERO2);
          },
          ceil: function(places) {
            places = 10 ** Number(places || 0);
            return new Fraction2(Math.ceil(places * Number(this["s"] * this["n"]) / Number(this["d"])), places);
          },
          floor: function(places) {
            places = 10 ** Number(places || 0);
            return new Fraction2(Math.floor(places * Number(this["s"] * this["n"]) / Number(this["d"])), places);
          },
          round: function(places) {
            places = 10 ** Number(places || 0);
            return new Fraction2(Math.round(places * Number(this["s"] * this["n"]) / Number(this["d"])), places);
          },
          divisible: function(a, b) {
            parse2(a, b);
            return !(!(P2["n"] * this["d"]) || this["n"] * P2["d"] % (P2["n"] * this["d"]));
          },
          valueOf: function() {
            return Number(this["s"] * this["n"]) / Number(this["d"]);
          },
          toString: function(dec) {
            let g;
            let N = this["n"];
            let D = this["d"];
            dec = dec || 15;
            let cycLen = cycleLen(N, D);
            let cycOff = cycleStart(N, D, cycLen);
            let str = this["s"] < C_ZERO2 ? "-" : "";
            str += N / D | C_ZERO2;
            N %= D;
            N *= C_TEN;
            if (N)
              str += ".";
            if (cycLen) {
              for (let i = cycOff; i--; ) {
                str += N / D | C_ZERO2;
                N %= D;
                N *= C_TEN;
              }
              str += "(";
              for (let i = cycLen; i--; ) {
                str += N / D | C_ZERO2;
                N %= D;
                N *= C_TEN;
              }
              str += ")";
            } else {
              for (let i = dec; N && i--; ) {
                str += N / D | C_ZERO2;
                N %= D;
                N *= C_TEN;
              }
            }
            return str;
          },
          toFraction: function(excludeWhole) {
            let n = this["n"];
            let d = this["d"];
            let str = this["s"] < C_ZERO2 ? "-" : "";
            if (d === C_ONE) {
              str += n;
            } else {
              let whole = n / d | C_ZERO2;
              if (excludeWhole && whole > C_ZERO2) {
                str += whole;
                str += " ";
                n %= d;
              }
              str += n;
              str += "/";
              str += d;
            }
            return str;
          },
          toLatex: function(excludeWhole) {
            let n = this["n"];
            let d = this["d"];
            let str = this["s"] < C_ZERO2 ? "-" : "";
            if (d === C_ONE) {
              str += n;
            } else {
              let whole = n / d | C_ZERO2;
              if (excludeWhole && whole > C_ZERO2) {
                str += whole;
                n %= d;
              }
              str += "\\frac{";
              str += n;
              str += "}{";
              str += d;
              str += "}";
            }
            return str;
          },
          toContinued: function() {
            let a = this["n"];
            let b = this["d"];
            let res = [];
            do {
              res.push(a / b | C_ZERO2);
              let t = a % b;
              a = b;
              b = t;
            } while (a !== C_ONE);
            return res;
          },
          simplify: function(eps) {
            let cont = this["abs"]()["toContinued"]();
            eps = eps || 1e-3;
            function rec(a) {
              if (a.length === 1)
                return new Fraction2(a[0]);
              return rec(a.slice(1))["inverse"]()["add"](a[0]);
            }
            for (let i = 0; i < cont.length; i++) {
              let tmp = rec(cont.slice(0, i + 1));
              if (tmp["sub"](this["abs"]())["abs"]().valueOf() < eps) {
                return tmp["mul"](this["s"]);
              }
            }
            return this;
          }
        };
        if (typeof define === "function" && define["amd"]) {
          define([], function() {
            return { Fraction: Fraction2, errorConstructor };
          });
        } else if (typeof exports === "object") {
          Object.defineProperty(exports, "__esModule", { value: true });
          Fraction2["default"] = Fraction2;
          Fraction2["Fraction"] = Fraction2;
          module["exports"] = { Fraction: Fraction2, errorConstructor };
        } else {
          root["Fraction"] = Fraction2;
        }
      })(exports);
    } catch (error) {
      console.log("Browser does not support BigInt.");
    }
  }
});

// node_modules/@darkforest_eth/hashing/dist/mimc.js
var require_mimc = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/mimc.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.perlinRandHash = exports.mimcWithRounds = exports.modPBigIntNative = exports.modPBigInt = exports.p = void 0;
    var big_integer_1 = __importDefault(require_BigInteger());
    exports.p = (0, big_integer_1.default)("21888242871839275222246405745257275088548364400416034343698204186575808495617");
    var c = [
      "0",
      "7120861356467848435263064379192047478074060781135320967663101236819528304084",
      "5024705281721889198577876690145313457398658950011302225525409148828000436681",
      "17980351014018068290387269214713820287804403312720763401943303895585469787384",
      "19886576439381707240399940949310933992335779767309383709787331470398675714258",
      "1213715278223786725806155661738676903520350859678319590331207960381534602599",
      "18162138253399958831050545255414688239130588254891200470934232514682584734511",
      "7667462281466170157858259197976388676420847047604921256361474169980037581876",
      "7207551498477838452286210989212982851118089401128156132319807392460388436957",
      "9864183311657946807255900203841777810810224615118629957816193727554621093838",
      "4798196928559910300796064665904583125427459076060519468052008159779219347957",
      "17387238494588145257484818061490088963673275521250153686214197573695921400950",
      "10005334761930299057035055370088813230849810566234116771751925093634136574742",
      "11897542014760736209670863723231849628230383119798486487899539017466261308762",
      "16771780563523793011283273687253985566177232886900511371656074413362142152543",
      "749264854018824809464168489785113337925400687349357088413132714480582918506",
      "3683645737503705042628598550438395339383572464204988015434959428676652575331",
      "7556750851783822914673316211129907782679509728346361368978891584375551186255",
      "20391289379084797414557439284689954098721219201171527383291525676334308303023",
      "18146517657445423462330854383025300323335289319277199154920964274562014376193",
      "8080173465267536232534446836148661251987053305394647905212781979099916615292",
      "10796443006899450245502071131975731672911747129805343722228413358507805531141",
      "5404287610364961067658660283245291234008692303120470305032076412056764726509",
      "4623894483395123520243967718315330178025957095502546813929290333264120223168",
      "16845753148201777192406958674202574751725237939980634861948953189320362207797",
      "4622170486584704769521001011395820886029808520586507873417553166762370293671",
      "16688277490485052681847773549197928630624828392248424077804829676011512392564",
      "11878652861183667748838188993669912629573713271883125458838494308957689090959",
      "2436445725746972287496138382764643208791713986676129260589667864467010129482",
      "1888098689545151571063267806606510032698677328923740058080630641742325067877",
      "148924106504065664829055598316821983869409581623245780505601526786791681102",
      "18875020877782404439294079398043479420415331640996249745272087358069018086569",
      "15189693413320228845990326214136820307649565437237093707846682797649429515840",
      "19669450123472657781282985229369348220906547335081730205028099210442632534079",
      "5521922218264623411380547905210139511350706092570900075727555783240701821773",
      "4144769320246558352780591737261172907511489963810975650573703217887429086546",
      "10097732913112662248360143041019433907849917041759137293018029019134392559350",
      "1720059427972723034107765345743336447947522473310069975142483982753181038321",
      "6302388219880227251325608388535181451187131054211388356563634768253301290116",
      "6745410632962119604799318394592010194450845483518862700079921360015766217097",
      "10858157235265583624235850660462324469799552996870780238992046963007491306222",
      "20241898894740093733047052816576694435372877719072347814065227797906130857593",
      "10165780782761211520836029617746977303303335603838343292431760011576528327409",
      "2832093654883670345969792724123161241696170611611744759675180839473215203706",
      "153011722355526826233082383360057587249818749719433916258246100068258954737",
      "20196970640587451358539129330170636295243141659030208529338914906436009086943",
      "3180973917010545328313139835982464870638521890385603025657430208141494469656",
      "17198004293191777441573635123110935015228014028618868252989374962722329283022",
      "7642160509228669138628515458941659189680509753651629476399516332224325757132",
      "19346204940546791021518535594447257347218878114049998691060016493806845179755",
      "11501810868606870391127866188394535330696206817602260610801897042898616817272",
      "3113973447392053821824427670386252797811804954746053461397972968381571297505",
      "6545064306297957002139416752334741502722251869537551068239642131448768236585",
      "5203908808704813498389265425172875593837960384349653691918590736979872578408",
      "2246692432011290582160062129070762007374502637007107318105405626910313810224",
      "11760570435432189127645691249600821064883781677693087773459065574359292849137",
      "5543749482491340532547407723464609328207990784853381797689466144924198391839",
      "8837549193990558762776520822018694066937602576881497343584903902880277769302",
      "12855514863299373699594410385788943772765811961581749194183533625311486462501",
      "5363660674689121676875069134269386492382220935599781121306637800261912519729",
      "13162342403579303950549728848130828093497701266240457479693991108217307949435",
      "916941639326869583414469202910306428966657806899788970948781207501251816730",
      "15618589556584434434009868216186115416835494805174158488636000580759692174228",
      "8959562060028569701043973060670353733575345393653685776974948916988033453971",
      "16390754464333401712265575949874369157699293840516802426621216808905079127650",
      "168282396747788514908709091757591226095443902501365500003618183905496160435",
      "8327443473179334761744301768309008451162322941906921742120510244986704677004",
      "17213012626801210615058753489149961717422101711567228037597150941152495100640",
      "10394369641533736715250242399198097296122982486516256408681925424076248952280",
      "17784386835392322654196171115293700800825771210400152504776806618892170162248",
      "16533189939837087893364000390641148516479148564190420358849587959161226782982",
      "18725396114211370207078434315900726338547621160475533496863298091023511945076",
      "7132325028834551397904855671244375895110341505383911719294705267624034122405",
      "148317947440800089795933930720822493695520852448386394775371401743494965187",
      "19001050671757720352890779127693793630251266879994702723636759889378387053056",
      "18824274411769830274877839365728651108434404855803844568234862945613766611460",
      "12771414330193951156383998390424063470766226667986423961689712557338777174205",
      "11332046574800279729678603488745295198038913503395629790213378101166488244657",
      "9607550223176946388146938069307456967842408600269548190739947540821716354749",
      "8756385288462344550200229174435953103162307705310807828651304665320046782583",
      "176061952957067086877570020242717222844908281373122372938833890096257042779",
      "12200212977482648306758992405065921724409841940671166017620928947866825250857",
      "10868453624107875516866146499877130701929063632959660262366632833504750028858",
      "2016095394399807253596787752134573207202567875457560571095586743878953450738",
      "21815578223768330433802113452339488275704145896544481092014911825656390567514",
      "4923772847693564777744725640710197015181591950368494148029046443433103381621",
      "1813584943682214789802230765734821149202472893379265320098816901270224589984",
      "10810123816265612772922113403831964815724109728287572256602010709288980656498",
      "1153669123397255702524721206511185557982017410156956216465120456256288427021",
      "5007518659266430200134478928344522649876467369278722765097865662497773767152",
      "2511432546938591792036639990606464315121646668029252285288323664350666551637",
      "32883284540320451295484135704808083452381176816565850047310272290579727564",
      "10484856914279112612610993418405543310546746652738541161791501150994088679557",
      "2026733759645519472558796412979210009170379159866522399881566309631434814953",
      "14731806221235869882801331463708736361296174006732553130708107037190460654379",
      "14740327483193277147065845135561988641238516852487657117813536909482068950652",
      "18787428285295558781869865751953016580493190547148386433580291216673009884554",
      "3804047064713122820157099453648459188816376755739202017447862327783289895072",
      "16709604795697901641948603019242067672006293290826991671766611326262532802914",
      "11061717085931490100602849654034280576915102867237101935487893025907907250695",
      "2821730726367472966906149684046356272806484545281639696873240305052362149654",
      "17467794879902895769410571945152708684493991588672014763135370927880883292655",
      "1571520786233540988201616650622796363168031165456869481368085474420849243232",
      "10041051776251223165849354194892664881051125330236567356945669006147134614302",
      "3981753758468103976812813304477670033098707002886030847251581853700311567551",
      "4365864398105436789177703571412645548020537580493599380018290523813331678900",
      "2391801327305361293476178683853802679507598622000359948432171562543560193350",
      "214219368547551689972421167733597094823289857206402800635962137077096090722",
      "18192064100315141084242006659317257023098826945893371479835220462302399655674",
      "15487549757142039139328911515400805508248576685795694919457041092150651939253",
      "10142447197759703415402259672441315777933858467700579946665223821199077641122",
      "11246573086260753259993971254725613211193686683988426513880826148090811891866",
      "6574066859860991369704567902211886840188702386542112593710271426704432301235",
      "11311085442652291634822798307831431035776248927202286895207125867542470350078",
      "20977948360215259915441258687649465618185769343138135384346964466965010873779",
      "792781492853909872425531014397300057232399608769451037135936617996830018501",
      "5027602491523497423798779154966735896562099398367163998686335127580757861872",
      "14595204575654316237672764823862241845410365278802914304953002937313300553572",
      "13973538843621261113924259058427434053808430378163734641175100160836376897004",
      "16395063164993626722686882727042150241125309409717445381854913964674649318585",
      "8465768840047024550750516678171433288207841931251654898809033371655109266663",
      "21345603324471810861925019445720576814602636473739003852898308205213912255830",
      "21171984405852590343970239018692870799717057961108910523876770029017785940991",
      "10761027113757988230637066281488532903174559953630210849190212601991063767647",
      "6678298831065390834922566306988418588227382406175769592902974103663687992230",
      "4993662582188632374202316265508850988596880036291765531885657575099537176757",
      "18364168158495573675698600238443218434246806358811328083953887470513967121206",
      "3506345610354615013737144848471391553141006285964325596214723571988011984829",
      "248732676202643792226973868626360612151424823368345645514532870586234380100",
      "10090204501612803176317709245679152331057882187411777688746797044706063410969",
      "21297149835078365363970699581821844234354988617890041296044775371855432973500",
      "16729368143229828574342820060716366330476985824952922184463387490091156065099",
      "4467191506765339364971058668792642195242197133011672559453028147641428433293",
      "8677548159358013363291014307402600830078662555833653517843708051504582990832",
      "1022951765127126818581466247360193856197472064872288389992480993218645055345",
      "1888195070251580606973417065636430294417895423429240431595054184472931224452",
      "4221265384902749246920810956363310125115516771964522748896154428740238579824",
      "2825393571154632139467378429077438870179957021959813965940638905853993971879",
      "19171031072692942278056619599721228021635671304612437350119663236604712493093",
      "10780807212297131186617505517708903709488273075252405602261683478333331220733",
      "18230936781133176044598070768084230333433368654744509969087239465125979720995",
      "16901065971871379877929280081392692752968612240624985552337779093292740763381",
      "146494141603558321291767829522948454429758543710648402457451799015963102253",
      "2492729278659146790410698334997955258248120870028541691998279257260289595548",
      "2204224910006646535594933495262085193210692406133533679934843341237521233504",
      "16062117410185840274616925297332331018523844434907012275592638570193234893570",
      "5894928453677122829055071981254202951712129328678534592916926069506935491729",
      "4947482739415078212217504789923078546034438919537985740403824517728200332286",
      "16143265650645676880461646123844627780378251900510645261875867423498913438066",
      "397690828254561723549349897112473766901585444153303054845160673059519614409",
      "11272653598912269895509621181205395118899451234151664604248382803490621227687",
      "15566927854306879444693061574322104423426072650522411176731130806720753591030",
      "14222898219492484180162096141564251903058269177856173968147960855133048449557",
      "16690275395485630428127725067513114066329712673106153451801968992299636791385",
      "3667030990325966886479548860429670833692690972701471494757671819017808678584",
      "21280039024501430842616328642522421302481259067470872421086939673482530783142",
      "15895485136902450169492923978042129726601461603404514670348703312850236146328",
      "7733050956302327984762132317027414325566202380840692458138724610131603812560",
      "438123800976401478772659663183448617575635636575786782566035096946820525816",
      "814913922521637742587885320797606426167962526342166512693085292151314976633",
      "12368712287081330853637674140264759478736012797026621876924395982504369598764",
      "2494806857395134874309386694756263421445039103814920780777601708371037591569",
      "16101132301514338989512946061786320637179843435886825102406248183507106312877",
      "6252650284989960032925831409804233477770646333900692286731621844532438095656",
      "9277135875276787021836189566799935097400042171346561246305113339462708861695",
      "10493603554686607050979497281838644324893776154179810893893660722522945589063",
      "8673089750662709235894359384294076697329948991010184356091130382437645649279",
      "9558393272910366944245875920138649617479779893610128634419086981339060613250",
      "19012287860122586147374214541764572282814469237161122489573881644994964647218",
      "9783723818270121678386992630754842961728702994964214799008457449989291229500",
      "15550788416669474113213749561488122552422887538676036667630838378023479382689",
      "15016165746156232864069722572047169071786333815661109750860165034341572904221",
      "6506225705710197163670556961299945987488979904603689017479840649664564978574",
      "10796631184889302076168355684722130903785890709107732067446714470783437829037",
      "19871836214837460419845806980869387567383718044439891735114283113359312279540",
      "20871081766843466343749609089986071784031203517506781251203251608363835140622",
      "5100105771517691442278432864090229416166996183792075307747582375962855820797",
      "8777887112076272395250620301071581171386440850451972412060638225741125310886",
      "5300440870136391278944213332144327695659161151625757537632832724102670898756",
      "1205448543652932944633962232545707633928124666868453915721030884663332604536",
      "5542499997310181530432302492142574333860449305424174466698068685590909336771",
      "11028094245762332275225364962905938096659249161369092798505554939952525894293",
      "19187314764836593118404597958543112407224947638377479622725713735224279297009",
      "17047263688548829001253658727764731047114098556534482052135734487985276987385",
      "19914849528178967155534624144358541535306360577227460456855821557421213606310",
      "2929658084700714257515872921366736697080475676508114973627124569375444665664",
      "15092262360719700162343163278648422751610766427236295023221516498310468956361",
      "21578580340755653236050830649990190843552802306886938815497471545814130084980",
      "1258781501221760320019859066036073675029057285507345332959539295621677296991",
      "3819598418157732134449049289585680301176983019643974929528867686268702720163",
      "8653175945487997845203439345797943132543211416447757110963967501177317426221",
      "6614652990340435611114076169697104582524566019034036680161902142028967568142",
      "19212515502973904821995111796203064175854996071497099383090983975618035391558",
      "18664315914479294273286016871365663486061896605232511201418576829062292269769",
      "11498264615058604317482574216318586415670903094838791165247179252175768794889",
      "10814026414212439999107945133852431304483604215416531759535467355316227331774",
      "17566185590731088197064706533119299946752127014428399631467913813769853431107",
      "14016139747289624978792446847000951708158212463304817001882956166752906714332",
      "8242601581342441750402731523736202888792436665415852106196418942315563860366",
      "9244680976345080074252591214216060854998619670381671198295645618515047080988",
      "12216779172735125538689875667307129262237123728082657485828359100719208190116",
      "10702811721859145441471328511968332847175733707711670171718794132331147396634",
      "6479667912792222539919362076122453947926362746906450079329453150607427372979",
      "15117544653571553820496948522381772148324367479772362833334593000535648316185",
      "6842203153996907264167856337497139692895299874139131328642472698663046726780",
      "12732823292801537626009139514048596316076834307941224506504666470961250728055",
      "6936272626871035740815028148058841877090860312517423346335878088297448888663",
      "17297554111853491139852678417579991271009602631577069694853813331124433680030",
      "16641596134749940573104316021365063031319260205559553673368334842484345864859",
      "7400481189785154329569470986896455371037813715804007747228648863919991399081",
      "2273205422216987330510475127669563545720586464429614439716564154166712854048",
      "15162538063742142685306302282127534305212832649282186184583465569986719234456",
      "5628039096440332922248578319648483863204530861778160259559031331287721255522",
      "16085392195894691829567913404182676871326863890140775376809129785155092531260",
      "14227467863135365427954093998621993651369686288941275436795622973781503444257",
      "18224457394066545825553407391290108485121649197258948320896164404518684305122",
      "274945154732293792784580363548970818611304339008964723447672490026510689427",
      "11050822248291117548220126630860474473945266276626263036056336623671308219529",
      "2119542016932434047340813757208803962484943912710204325088879681995922344971",
      "0"
    ].map((n) => (0, big_integer_1.default)(n));
    var FeistelState = class {
      constructor(rounds, k) {
        this.l = (0, big_integer_1.default)(0);
        this.r = (0, big_integer_1.default)(0);
        this.rounds = rounds;
        this.k = k;
      }
      inject(elt) {
        this.l = this.l.add(elt).mod(exports.p);
      }
      mix() {
        for (let i = 0; i < this.rounds - 1; i++) {
          const t2 = this.k.add(this.l).add(c[i]).mod(exports.p);
          const lNew = t2.modPow(5, exports.p).add(this.r).mod(exports.p);
          this.r = this.l;
          this.l = lNew;
        }
        const t = this.k.add(this.l).mod(exports.p);
        this.r = t.modPow(5, exports.p).add(this.r).mod(exports.p);
      }
    };
    function mimcSponge(inputs, nOutputs, rounds, key) {
      const state = new FeistelState(rounds, (0, big_integer_1.default)(key));
      for (const elt of inputs) {
        state.inject(elt);
        state.mix();
      }
      const outputs = [state.l];
      for (let i = 0; i < nOutputs - 1; i++) {
        state.mix();
        outputs.push(state.l);
      }
      return outputs;
    }
    function modPBigInt(x) {
      let ret = (0, big_integer_1.default)(x).mod(exports.p);
      if (ret.lesser((0, big_integer_1.default)(0))) {
        ret = ret.add(exports.p);
      }
      return ret;
    }
    exports.modPBigInt = modPBigInt;
    function modPBigIntNative(x) {
      let ret = x.mod(exports.p);
      if (ret.lesser((0, big_integer_1.default)(0))) {
        ret = ret.add(exports.p);
      }
      return ret;
    }
    exports.modPBigIntNative = modPBigIntNative;
    var mimcWithRounds = (rounds, key) => (...inputs) => mimcSponge(inputs.map((n) => modPBigInt(n)), 1, rounds, key)[0];
    exports.mimcWithRounds = mimcWithRounds;
    function mimcHash(key) {
      return (0, exports.mimcWithRounds)(220, key);
    }
    var perlinRandHash = (key) => (0, exports.mimcWithRounds)(4, key);
    exports.perlinRandHash = perlinRandHash;
    exports.default = mimcHash;
  }
});

// node_modules/@darkforest_eth/hashing/dist/perlin.js
var require_perlin = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/perlin.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.perlin = exports.MAX_PERLIN_VALUE = exports.getRandomGradientAt = exports.rand = void 0;
    var big_integer_1 = __importDefault(require_BigInteger());
    var bigFraction_js_1 = require_bigFraction();
    var mimc_1 = require_mimc();
    var TRACK_LCM = false;
    var rand = (key) => (...args) => {
      return (0, mimc_1.perlinRandHash)(key)(...args).remainder(16).toJSNumber();
    };
    exports.rand = rand;
    var vecs;
    try {
      vecs = [
        [1e3, 0],
        [923, 382],
        [707, 707],
        [382, 923],
        [0, 1e3],
        [-383, 923],
        [-708, 707],
        [-924, 382],
        [-1e3, 0],
        [-924, -383],
        [-708, -708],
        [-383, -924],
        [-1, -1e3],
        [382, -924],
        [707, -708],
        [923, -383]
      ].map(([x, y]) => ({ x: new bigFraction_js_1.Fraction(x, 1e3), y: new bigFraction_js_1.Fraction(y, 1e3) }));
    } catch (err) {
      console.error("Browser does not support BigInt.", err);
    }
    var getRandomGradientAt = (point, scale, randFn) => {
      const val = vecs[randFn(point.x.valueOf(), point.y.valueOf(), scale.valueOf())];
      return val;
    };
    exports.getRandomGradientAt = getRandomGradientAt;
    var minus = (a, b) => {
      return {
        x: a.x.sub(b.x),
        y: a.y.sub(b.y)
      };
    };
    var dot = (a, b) => {
      return a.x.mul(b.x).add(a.y.mul(b.y));
    };
    var smoothStep = (x) => {
      return x;
    };
    var scalarMultiply = (s, v) => ({
      x: v.x.mul(s),
      y: v.y.mul(s)
    });
    var getWeight = (corner, p) => {
      return smoothStep(new bigFraction_js_1.Fraction(1).sub(p.x.sub(corner.x).abs())).mul(smoothStep(new bigFraction_js_1.Fraction(1).sub(p.y.sub(corner.y).abs())));
    };
    var perlinValue = (corners, scale, p) => {
      let ret = new bigFraction_js_1.Fraction(0);
      for (const corner of corners) {
        const distVec = minus(p, corner.coords);
        ret = ret.add(getWeight(scalarMultiply(scale.inverse(), corner.coords), scalarMultiply(scale.inverse(), p)).mul(dot(scalarMultiply(scale.inverse(), distVec), corner.gradient)));
      }
      return ret;
    };
    var runningLCM = (0, big_integer_1.default)(1);
    var updateLCM = (oldLCM, newValue) => {
      if (!TRACK_LCM) {
        return oldLCM;
      }
      const newLCM = big_integer_1.default.lcm(oldLCM, newValue);
      if (newLCM !== oldLCM) {
        console.log("LCM updated to ", newLCM);
      }
      return newLCM;
    };
    var realMod = (dividend, divisor) => {
      const temp = dividend.mod(divisor);
      if (temp.s.toString() === "-1") {
        return temp.add(divisor);
      }
      return temp;
    };
    var valueAt = (p, scale, randFn) => {
      const bottomLeftCoords = {
        x: p.x.sub(realMod(p.x, scale)),
        y: p.y.sub(realMod(p.y, scale))
      };
      const bottomRightCoords = {
        x: bottomLeftCoords.x.add(scale),
        y: bottomLeftCoords.y
      };
      const topLeftCoords = {
        x: bottomLeftCoords.x,
        y: bottomLeftCoords.y.add(scale)
      };
      const topRightCoords = {
        x: bottomLeftCoords.x.add(scale),
        y: bottomLeftCoords.y.add(scale)
      };
      const bottomLeftGrad = {
        coords: bottomLeftCoords,
        gradient: (0, exports.getRandomGradientAt)(bottomLeftCoords, scale, randFn)
      };
      const bottomRightGrad = {
        coords: bottomRightCoords,
        gradient: (0, exports.getRandomGradientAt)(bottomRightCoords, scale, randFn)
      };
      const topLeftGrad = {
        coords: topLeftCoords,
        gradient: (0, exports.getRandomGradientAt)(topLeftCoords, scale, randFn)
      };
      const topRightGrad = {
        coords: topRightCoords,
        gradient: (0, exports.getRandomGradientAt)(topRightCoords, scale, randFn)
      };
      const out = perlinValue([bottomLeftGrad, bottomRightGrad, topLeftGrad, topRightGrad], scale, p);
      return out;
    };
    exports.MAX_PERLIN_VALUE = 32;
    function perlin(coords, options) {
      let { x, y } = coords;
      if (options.mirrorY)
        x = Math.abs(x);
      if (options.mirrorX)
        y = Math.abs(y);
      const fractionalP = { x: new bigFraction_js_1.Fraction(x), y: new bigFraction_js_1.Fraction(y) };
      let ret = new bigFraction_js_1.Fraction(0);
      const pValues = [];
      for (let i = 0; i < 3; i += 1) {
        pValues.push(valueAt(fractionalP, new bigFraction_js_1.Fraction(options.scale * 2 ** i), (0, exports.rand)(options.key)));
      }
      ret = ret.add(pValues[0]);
      ret = ret.add(pValues[0]);
      ret = ret.add(pValues[1]);
      ret = ret.add(pValues[2]);
      ret = ret.div(4);
      runningLCM = updateLCM(runningLCM, (0, big_integer_1.default)(ret.d));
      ret = ret.mul(exports.MAX_PERLIN_VALUE / 2);
      if (options.floor)
        ret = ret.floor();
      ret = ret.add(exports.MAX_PERLIN_VALUE / 2);
      const out = ret.valueOf();
      return Math.floor(out * 100) / 100;
    }
    exports.perlin = perlin;
  }
});

// node_modules/@darkforest_eth/hashing/dist/index.js
var require_dist6 = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/index.js"(exports) {
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
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_PERLIN_VALUE = exports.Fraction = exports.seededRandom = exports.fakeHash = exports.modPBigIntNative = exports.modPBigInt = exports.getRandomGradientAt = exports.rand = exports.perlin = exports.mimcHash = void 0;
    var fakeHash_1 = require_fakeHash();
    Object.defineProperty(exports, "fakeHash", { enumerable: true, get: function() {
      return fakeHash_1.fakeHash;
    } });
    Object.defineProperty(exports, "seededRandom", { enumerable: true, get: function() {
      return fakeHash_1.seededRandom;
    } });
    var bigFraction_js_1 = require_bigFraction();
    Object.defineProperty(exports, "Fraction", { enumerable: true, get: function() {
      return bigFraction_js_1.Fraction;
    } });
    var mimc_1 = __importStar(require_mimc());
    exports.mimcHash = mimc_1.default;
    Object.defineProperty(exports, "modPBigInt", { enumerable: true, get: function() {
      return mimc_1.modPBigInt;
    } });
    Object.defineProperty(exports, "modPBigIntNative", { enumerable: true, get: function() {
      return mimc_1.modPBigIntNative;
    } });
    var perlin_1 = require_perlin();
    Object.defineProperty(exports, "getRandomGradientAt", { enumerable: true, get: function() {
      return perlin_1.getRandomGradientAt;
    } });
    Object.defineProperty(exports, "MAX_PERLIN_VALUE", { enumerable: true, get: function() {
      return perlin_1.MAX_PERLIN_VALUE;
    } });
    Object.defineProperty(exports, "perlin", { enumerable: true, get: function() {
      return perlin_1.perlin;
    } });
    Object.defineProperty(exports, "rand", { enumerable: true, get: function() {
      return perlin_1.rand;
    } });
  }
});

// node_modules/@darkforest_eth/procedural/dist/Noise.js
var require_Noise = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/Noise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Noise = class {
      constructor() {
        let module2 = {};
        function Grad(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        Grad.prototype.dot2 = function(x, y) {
          return this.x * x + this.y * y;
        };
        Grad.prototype.dot3 = function(x, y, z) {
          return this.x * x + this.y * y + this.z * z;
        };
        var grad3 = [
          new Grad(1, 1, 0),
          new Grad(-1, 1, 0),
          new Grad(1, -1, 0),
          new Grad(-1, -1, 0),
          new Grad(1, 0, 1),
          new Grad(-1, 0, 1),
          new Grad(1, 0, -1),
          new Grad(-1, 0, -1),
          new Grad(0, 1, 1),
          new Grad(0, -1, 1),
          new Grad(0, 1, -1),
          new Grad(0, -1, -1)
        ];
        var p = [
          151,
          160,
          137,
          91,
          90,
          15,
          131,
          13,
          201,
          95,
          96,
          53,
          194,
          233,
          7,
          225,
          140,
          36,
          103,
          30,
          69,
          142,
          8,
          99,
          37,
          240,
          21,
          10,
          23,
          190,
          6,
          148,
          247,
          120,
          234,
          75,
          0,
          26,
          197,
          62,
          94,
          252,
          219,
          203,
          117,
          35,
          11,
          32,
          57,
          177,
          33,
          88,
          237,
          149,
          56,
          87,
          174,
          20,
          125,
          136,
          171,
          168,
          68,
          175,
          74,
          165,
          71,
          134,
          139,
          48,
          27,
          166,
          77,
          146,
          158,
          231,
          83,
          111,
          229,
          122,
          60,
          211,
          133,
          230,
          220,
          105,
          92,
          41,
          55,
          46,
          245,
          40,
          244,
          102,
          143,
          54,
          65,
          25,
          63,
          161,
          1,
          216,
          80,
          73,
          209,
          76,
          132,
          187,
          208,
          89,
          18,
          169,
          200,
          196,
          135,
          130,
          116,
          188,
          159,
          86,
          164,
          100,
          109,
          198,
          173,
          186,
          3,
          64,
          52,
          217,
          226,
          250,
          124,
          123,
          5,
          202,
          38,
          147,
          118,
          126,
          255,
          82,
          85,
          212,
          207,
          206,
          59,
          227,
          47,
          16,
          58,
          17,
          182,
          189,
          28,
          42,
          223,
          183,
          170,
          213,
          119,
          248,
          152,
          2,
          44,
          154,
          163,
          70,
          221,
          153,
          101,
          155,
          167,
          43,
          172,
          9,
          129,
          22,
          39,
          253,
          19,
          98,
          108,
          110,
          79,
          113,
          224,
          232,
          178,
          185,
          112,
          104,
          218,
          246,
          97,
          228,
          251,
          34,
          242,
          193,
          238,
          210,
          144,
          12,
          191,
          179,
          162,
          241,
          81,
          51,
          145,
          235,
          249,
          14,
          239,
          107,
          49,
          192,
          214,
          31,
          181,
          199,
          106,
          157,
          184,
          84,
          204,
          176,
          115,
          121,
          50,
          45,
          127,
          4,
          150,
          254,
          138,
          236,
          205,
          93,
          222,
          114,
          67,
          29,
          24,
          72,
          243,
          141,
          128,
          195,
          78,
          66,
          215,
          61,
          156,
          180
        ];
        var perm = new Array(512);
        var gradP = new Array(512);
        module2.seed = function(seed) {
          if (seed > 0 && seed < 1) {
            seed *= 65536;
          }
          seed = Math.floor(seed);
          if (seed < 256) {
            seed |= seed << 8;
          }
          for (var i = 0; i < 256; i++) {
            var v;
            if (i & 1) {
              v = p[i] ^ seed & 255;
            } else {
              v = p[i] ^ seed >> 8 & 255;
            }
            perm[i] = perm[i + 256] = v;
            gradP[i] = gradP[i + 256] = grad3[v % 12];
          }
        };
        module2.seed(0);
        var F2 = 0.5 * (Math.sqrt(3) - 1);
        var G2 = (3 - Math.sqrt(3)) / 6;
        var F3 = 1 / 3;
        var G3 = 1 / 6;
        module2.simplex2 = function(xin, yin) {
          var n0, n1, n2;
          var s = (xin + yin) * F2;
          var i = Math.floor(xin + s);
          var j = Math.floor(yin + s);
          var t = (i + j) * G2;
          var x0 = xin - i + t;
          var y0 = yin - j + t;
          var i1, j1;
          if (x0 > y0) {
            i1 = 1;
            j1 = 0;
          } else {
            i1 = 0;
            j1 = 1;
          }
          var x1 = x0 - i1 + G2;
          var y1 = y0 - j1 + G2;
          var x2 = x0 - 1 + 2 * G2;
          var y2 = y0 - 1 + 2 * G2;
          i &= 255;
          j &= 255;
          var gi0 = gradP[i + perm[j]];
          var gi1 = gradP[i + i1 + perm[j + j1]];
          var gi2 = gradP[i + 1 + perm[j + 1]];
          var t0 = 0.5 - x0 * x0 - y0 * y0;
          if (t0 < 0) {
            n0 = 0;
          } else {
            t0 *= t0;
            n0 = t0 * t0 * gi0.dot2(x0, y0);
          }
          var t1 = 0.5 - x1 * x1 - y1 * y1;
          if (t1 < 0) {
            n1 = 0;
          } else {
            t1 *= t1;
            n1 = t1 * t1 * gi1.dot2(x1, y1);
          }
          var t2 = 0.5 - x2 * x2 - y2 * y2;
          if (t2 < 0) {
            n2 = 0;
          } else {
            t2 *= t2;
            n2 = t2 * t2 * gi2.dot2(x2, y2);
          }
          return 70 * (n0 + n1 + n2);
        };
        module2.simplex3 = function(xin, yin, zin) {
          var n0, n1, n2, n3;
          var s = (xin + yin + zin) * F3;
          var i = Math.floor(xin + s);
          var j = Math.floor(yin + s);
          var k = Math.floor(zin + s);
          var t = (i + j + k) * G3;
          var x0 = xin - i + t;
          var y0 = yin - j + t;
          var z0 = zin - k + t;
          var i1, j1, k1;
          var i2, j2, k2;
          if (x0 >= y0) {
            if (y0 >= z0) {
              i1 = 1;
              j1 = 0;
              k1 = 0;
              i2 = 1;
              j2 = 1;
              k2 = 0;
            } else if (x0 >= z0) {
              i1 = 1;
              j1 = 0;
              k1 = 0;
              i2 = 1;
              j2 = 0;
              k2 = 1;
            } else {
              i1 = 0;
              j1 = 0;
              k1 = 1;
              i2 = 1;
              j2 = 0;
              k2 = 1;
            }
          } else {
            if (y0 < z0) {
              i1 = 0;
              j1 = 0;
              k1 = 1;
              i2 = 0;
              j2 = 1;
              k2 = 1;
            } else if (x0 < z0) {
              i1 = 0;
              j1 = 1;
              k1 = 0;
              i2 = 0;
              j2 = 1;
              k2 = 1;
            } else {
              i1 = 0;
              j1 = 1;
              k1 = 0;
              i2 = 1;
              j2 = 1;
              k2 = 0;
            }
          }
          var x1 = x0 - i1 + G3;
          var y1 = y0 - j1 + G3;
          var z1 = z0 - k1 + G3;
          var x2 = x0 - i2 + 2 * G3;
          var y2 = y0 - j2 + 2 * G3;
          var z2 = z0 - k2 + 2 * G3;
          var x3 = x0 - 1 + 3 * G3;
          var y3 = y0 - 1 + 3 * G3;
          var z3 = z0 - 1 + 3 * G3;
          i &= 255;
          j &= 255;
          k &= 255;
          var gi0 = gradP[i + perm[j + perm[k]]];
          var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
          var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
          var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
          var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
          if (t0 < 0) {
            n0 = 0;
          } else {
            t0 *= t0;
            n0 = t0 * t0 * gi0.dot3(x0, y0, z0);
          }
          var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
          if (t1 < 0) {
            n1 = 0;
          } else {
            t1 *= t1;
            n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
          }
          var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
          if (t2 < 0) {
            n2 = 0;
          } else {
            t2 *= t2;
            n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
          }
          var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
          if (t3 < 0) {
            n3 = 0;
          } else {
            t3 *= t3;
            n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
          }
          return 32 * (n0 + n1 + n2 + n3);
        };
        function fade(t) {
          return t * t * t * (t * (t * 6 - 15) + 10);
        }
        function lerp(a, b, t) {
          return (1 - t) * a + t * b;
        }
        module2.perlin2 = function(x, y) {
          var X = Math.floor(x), Y = Math.floor(y);
          x = x - X;
          y = y - Y;
          X = X & 255;
          Y = Y & 255;
          var n00 = gradP[X + perm[Y]].dot2(x, y);
          var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
          var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
          var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
          var u = fade(x);
          return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
        };
        module2.perlin3 = function(x, y, z) {
          var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
          x = x - X;
          y = y - Y;
          z = z - Z;
          X = X & 255;
          Y = Y & 255;
          Z = Z & 255;
          var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
          var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
          var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
          var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
          var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
          var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
          var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
          var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
          var u = fade(x);
          var v = fade(y);
          var w = fade(z);
          return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
        };
        this.noise = module2;
      }
      static initialize() {
        if (!!Noise.instance) {
          throw new Error("Noise has already been initialized");
        }
        const myNoise = new Noise();
        Noise.instance = myNoise;
        return myNoise;
      }
      static getInstance() {
        if (!Noise.instance) {
          Noise.initialize();
        }
        return Noise.instance;
      }
      simplex2(x, y) {
        return Noise.instance.noise.simplex2(x, y);
      }
    };
    exports.default = Noise;
  }
});

// node_modules/@darkforest_eth/procedural/dist/ProcgenConsts.js
var require_ProcgenConsts = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/ProcgenConsts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.blurb2grammar = exports.blurbGrammar = exports.planetTagNoun = exports.planetTagAdj = exports.planetNameWords = void 0;
    var genericVerb = [
      "ruin",
      "snow",
      "ban",
      "blot",
      "disappear",
      "scare",
      "relax",
      "tug",
      "sigh",
      "rub",
      "float",
      "entertain",
      "tap",
      "taste",
      "gather",
      "tour",
      "place",
      "treat",
      "program",
      "try",
      "depend",
      "puncture",
      "cheat",
      "whine",
      "tame",
      "check",
      "employ",
      "heap",
      "flower",
      "perform",
      "unite",
      "guarantee",
      "delight",
      "expand",
      "double",
      "fit",
      "ignore",
      "phone",
      "regret",
      "question",
      "jog",
      "attract",
      "learn",
      "twist",
      "drip",
      "remind",
      "slap",
      "knock",
      "train",
      "part",
      "groan",
      "compete",
      "excite",
      "calculate",
      "trouble",
      "shrug",
      "whip",
      "prevent",
      "object",
      "return",
      "scribble",
      "practise",
      "carve",
      "possess",
      "irritate",
      "park",
      "stamp",
      "warm",
      "imagine",
      "fade",
      "admire",
      "hang",
      "unlock",
      "obtain",
      "smash",
      "queue",
      "develop",
      "end",
      "pine",
      "balance",
      "fold",
      "bat",
      "crawl",
      "frighten",
      "dry",
      "approve",
      "rhyme",
      "contain",
      "sip",
      "battle",
      "peel",
      "trick",
      "chop",
      "heat",
      "wreck",
      "please",
      "preach",
      "risk",
      "kiss",
      "test",
      "thaw",
      "wander",
      "bless",
      "walk",
      "cover",
      "form",
      "seal",
      "reduce",
      "wave",
      "support",
      "coach",
      "spoil",
      "sniff",
      "borrow",
      "zoom",
      "obey",
      "worry",
      "shock",
      "suffer",
      "cry",
      "heal",
      "harm",
      "suspect",
      "raise",
      "remove",
      "deliver",
      "ski",
      "blink",
      "clear",
      "tire",
      "protect",
      "tick",
      "shop",
      "pray",
      "correct",
      "receive",
      "brake",
      "bomb",
      "describe",
      "mend",
      "squeeze",
      "open",
      "welcome",
      "whisper",
      "fear",
      "pack",
      "settle",
      "scatter",
      "rob",
      "hand",
      "exist",
      "zip",
      "wish",
      "separate",
      "fix",
      "pedal",
      "tempt",
      "kneel",
      "sail",
      "observe",
      "replace",
      "answer",
      "laugh",
      "play",
      "multiply",
      "repeat",
      "trust",
      "inject",
      "wrestle",
      "argue",
      "guess",
      "decide",
      "deceive",
      "dare",
      "book",
      "wait",
      "grease",
      "glow",
      "step",
      "allow",
      "steer",
      "gaze",
      "rain",
      "cause",
      "clap",
      "peep",
      "wriggle",
      "explode",
      "rush",
      "bolt",
      "announce",
      "match",
      "concern",
      "colour",
      "type",
      "spill",
      "exercise",
      "pick",
      "delay",
      "nail",
      "screw",
      "slow",
      "ask",
      "shiver",
      "add",
      "dream",
      "warn",
      "kick",
      "plan",
      "memorise",
      "bump",
      "arrive",
      "intend",
      "polish",
      "trip",
      "subtract",
      "include",
      "trace",
      "handle",
      "strip",
      "spot",
      "fry",
      "flash",
      "man",
      "visit",
      "squeak",
      "copy",
      "reflect",
      "comb",
      "reign",
      "scream",
      "chew",
      "fetch",
      "rule",
      "label",
      "invite",
      "transport",
      "present",
      "sneeze",
      "provide",
      "look",
      "haunt",
      "fail",
      "push",
      "point",
      "stain",
      "interfere",
      "cheer",
      "afford",
      "blind",
      "flow",
      "shelter",
      "glue",
      "amuse",
      "accept",
      "bruise",
      "post",
      "live",
      "fasten",
      "mark",
      "escape",
      "hum",
      "curve",
      "follow",
      "land",
      "dust",
      "stay",
      "occur",
      "boil",
      "scratch",
      "dislike",
      "pat",
      "dress",
      "turn",
      "promise",
      "offer",
      "challenge",
      "drown",
      "slip",
      "trap",
      "pop",
      "mess up",
      "force",
      "stuff",
      "roll",
      "care",
      "consist",
      "jump",
      "level",
      "hop",
      "bathe",
      "wobble",
      "consider",
      "murder",
      "excuse",
      "avoid",
      "disagree",
      "back",
      "frame",
      "shave",
      "charge",
      "pump",
      "instruct",
      "tickle",
      "travel",
      "moan",
      "peck",
      "nest",
      "drag",
      "fire",
      "explain",
      "scold",
      "attach",
      "carry",
      "suit",
      "paint",
      "applaud",
      "breathe",
      "saw",
      "report",
      "attack",
      "marry",
      "complain",
      "communicate",
      "own",
      "hunt",
      "retire",
      "spray",
      "complete",
      "admit",
      "store",
      "water",
      "request",
      "extend",
      "grate",
      "drum",
      "call",
      "fill",
      "bore",
      "punish",
      "moor",
      "punch",
      "save",
      "fool",
      "dam",
      "bow",
      "love",
      "increase",
      "start",
      "listen",
      "hammer",
      "mourn",
      "want",
      "appear",
      "smile",
      "suppose",
      "march",
      "continue",
      "buzz",
      "wink",
      "apologise",
      "face",
      "clip",
      "close",
      "flap",
      "owe",
      "rely",
      "supply",
      "dance",
      "attempt",
      "blush",
      "wipe",
      "share",
      "burn",
      "bubble",
      "empty",
      "disarm",
      "cross",
      "search",
      "soak",
      "agree",
      "launch",
      "surround",
      "plant",
      "pour",
      "lighten",
      "destroy",
      "detect"
    ];
    var genericNoun = [
      "adjustment",
      "straw",
      "person",
      "pipe",
      "coach",
      "distribution",
      "bite",
      "can",
      "snail",
      "plane",
      "flock",
      "dog",
      "grandfather",
      "achiever",
      "act",
      "beds",
      "trains",
      "wall",
      "school",
      "minute",
      "clam",
      "rat",
      "notebook",
      "sister",
      "power",
      "government",
      "tomatoes",
      "week",
      "river",
      "quiet",
      "move",
      "rose",
      "crate",
      "bubble",
      "loss",
      "laugh",
      "camera",
      "mouth",
      "development",
      "flag",
      "appliance",
      "slave",
      "match",
      "trucks",
      "bead",
      "screw",
      "hot",
      "sidewalk",
      "minister",
      "bell",
      "lamp",
      "coat",
      "queen",
      "cherries",
      "temper",
      "lip",
      "suit",
      "partner",
      "voice",
      "cave",
      "plough",
      "wind",
      "harbor",
      "tub",
      "dock",
      "hands",
      "van",
      "calculator",
      "cause",
      "history",
      "effect",
      "hour",
      "experience",
      "back",
      "bucket",
      "chickens",
      "aunt",
      "death",
      "friction",
      "amount",
      "fuel",
      "stem",
      "sisters",
      "yam",
      "event",
      "tooth",
      "discussion",
      "maid",
      "guitar",
      "bit",
      "chance",
      "time",
      "fairies",
      "key",
      "trail",
      "spot",
      "tank",
      "oranges",
      "attraction",
      "range",
      "ants",
      "boot",
      "education",
      "letters",
      "iron",
      "kitty",
      "belief",
      "noise",
      "acoustics",
      "cheese",
      "fire",
      "foot",
      "chicken",
      "rest",
      "bikes",
      "hope",
      "stop",
      "shade",
      "quiver",
      "sand",
      "farm",
      "zoo",
      "cabbage",
      "oil",
      "deer",
      "throne",
      "look",
      "rainstorm",
      "talk",
      "linen",
      "pigs",
      "wound",
      "liquid",
      "badge",
      "vase",
      "button",
      "order",
      "bath",
      "airport",
      "business",
      "cow",
      "visitor",
      "committee",
      "base",
      "book",
      "cemetery",
      "ice",
      "zinc",
      "afterthought",
      "zipper",
      "size",
      "frogs",
      "wren",
      "chess",
      "sneeze",
      "robin",
      "lake",
      "bomb",
      "memory",
      "snakes",
      "decision",
      "head",
      "receipt",
      "toothbrush",
      "humor",
      "war",
      "cats",
      "pull",
      "industry",
      "offer",
      "insurance",
      "test",
      "spy",
      "hat",
      "north",
      "behavior",
      "battle",
      "parcel",
      "grade",
      "dinosaurs",
      "substance",
      "window",
      "gate",
      "side",
      "houses",
      "view",
      "cap",
      "agreement",
      "honey",
      "plate",
      "pest",
      "fish",
      "cannon",
      "yarn",
      "bed",
      "mom",
      "writer",
      "interest",
      "record",
      "scissors",
      "rod",
      "guide",
      "furniture",
      "credit",
      "gold",
      "spoon",
      "activity",
      "club",
      "theory",
      "coal",
      "sponge",
      "knot",
      "mass",
      "house",
      "bone",
      "mailbox",
      "drink",
      "burst",
      "water",
      "cherry",
      "flavor",
      "sky",
      "coast",
      "island",
      "son",
      "smoke",
      "birthday",
      "babies",
      "self",
      "planes",
      "impulse",
      "metal",
      "thought",
      "salt",
      "pollution",
      "table",
      "surprise",
      "scene",
      "health",
      "rifle",
      "shock",
      "picture",
      "plastic",
      "arithmetic",
      "border",
      "army",
      "place",
      "oven",
      "marble",
      "skate",
      "voyage",
      "question",
      "cobweb",
      "mark",
      "shoe",
      "beginner",
      "star",
      "porter",
      "magic",
      "collar",
      "team",
      "sofa",
      "moon",
      "chalk",
      "sink",
      "lettuce",
      "turkey",
      "doll",
      "land",
      "brake",
      "existence",
      "smile",
      "thing",
      "car",
      "loaf",
      "jellyfish",
      "play",
      "swing",
      "sign",
      "cook",
      "horses",
      "laborer",
      "company",
      "office",
      "snake",
      "volleyball",
      "fly",
      "thumb",
      "top",
      "division",
      "celery",
      "pie",
      "measure",
      "oatmeal",
      "name",
      "toes",
      "limit",
      "veil",
      "hill",
      "driving",
      "jam",
      "quilt",
      "horse",
      "secretary",
      "pleasure",
      "squirrel",
      "wire",
      "finger",
      "peace",
      "roof",
      "structure",
      "curve",
      "zebra",
      "rings",
      "alarm",
      "cushion",
      "monkey",
      "grip",
      "treatment",
      "balance",
      "flower",
      "mitten",
      "crow",
      "twig",
      "glove",
      "advice",
      "song",
      "weather",
      "bird",
      "governor",
      "science",
      "seashore",
      "pot",
      "sort",
      "berry",
      "zephyr",
      "basket",
      "value",
      "expansion",
      "arm",
      "cub",
      "pump",
      "things",
      "competition",
      "wheel",
      "toy",
      "kick",
      "cloth",
      "step",
      "respect",
      "church",
      "writing",
      "push",
      "milk",
      "jar",
      "low",
      "geese",
      "meat",
      "tree",
      "songs",
      "dress",
      "party",
      "heat",
      "selection",
      "wash",
      "nerve",
      "rain",
      "amusement",
      "mice",
      "error",
      "rock",
      "caption",
      "desire",
      "edge",
      "start",
      "children",
      "wealth",
      "neck",
      "nose",
      "playground",
      "nation",
      "coil",
      "pan",
      "donkey",
      "field",
      "approval",
      "canvas",
      "position",
      "note",
      "ray",
      "cat",
      "library"
    ];
    var genericAdj = [
      "tedious",
      "therapeutic",
      "acid",
      "crooked",
      "available",
      "tasty",
      "real",
      "kind",
      "fancy",
      "solid",
      "brash",
      "unaccountable",
      "late",
      "necessary",
      "electric",
      "one",
      "zealous",
      "versed",
      "exciting",
      "keen",
      "tasteful",
      "ugliest",
      "adjoining",
      "questionable",
      "tasteless",
      "productive",
      "worthless",
      "evasive",
      "square",
      "separate",
      "upset",
      "typical",
      "mighty",
      "plant",
      "hushed",
      "helpless",
      "smooth",
      "colossal",
      "infamous",
      "scandalous",
      "pointless",
      "lethal",
      "melodic",
      "terrific",
      "inexpensive",
      "salty",
      "puzzling",
      "seemly",
      "learned",
      "venomous",
      "vagabond",
      "puny",
      "mere",
      "unkempt",
      "private",
      "breezy",
      "tremendous",
      "exultant",
      "ugly",
      "chunky",
      "teeny-tiny",
      "snobbish",
      "entertaining",
      "friendly",
      "opposite",
      "pumped",
      "fascinated",
      "picayune",
      "wanting",
      "subsequent",
      "abrasive",
      "uttermost",
      "abiding",
      "narrow",
      "holistic",
      "slow",
      "murky",
      "probable",
      "mountainous",
      "bouncy",
      "upbeat",
      "foamy",
      "sophisticated",
      "furry",
      "nonchalant",
      "warlike",
      "rightful",
      "extra-large",
      "calculating",
      "aspiring",
      "volatile",
      "vague",
      "icy",
      "frightening",
      "historical",
      "complete",
      "enormous",
      "swift",
      "grumpy",
      "empty",
      "knowing",
      "adventurous",
      "ruthless",
      "hypnotic",
      "remarkable",
      "understood",
      "feeble",
      "pushy",
      "mature",
      "paltry",
      "next",
      "shivering",
      "flagrant",
      "worried",
      "dead",
      "needless",
      "natural",
      "curly",
      "coherent",
      "abusive",
      "tart",
      "tough",
      "chief",
      "concerned",
      "physical",
      "whimsical",
      "useful",
      "exotic",
      "nimble",
      "hallowed",
      "smelly",
      "internal",
      "meek",
      "tested",
      "hurried",
      "marked",
      "jittery",
      "crowded",
      "gaudy",
      "proud",
      "used",
      "last",
      "incompetent",
      "fumbling",
      "nosy",
      "possessive",
      "puffy",
      "workable",
      "fretful",
      "sweet",
      "disastrous",
      "dramatic",
      "capable",
      "courageous",
      "heady",
      "shrill",
      "vulgar",
      "kindhearted",
      "cagey",
      "parsimonious",
      "abaft",
      "ethereal",
      "talented",
      "noxious",
      "raspy",
      "frantic",
      "doubtful",
      "fantastic",
      "tan",
      "screeching",
      "abnormal",
      "rustic",
      "recondite",
      "cut",
      "annoyed",
      "chemical",
      "ossified",
      "cluttered",
      "stupid",
      "clumsy",
      "clean",
      "exuberant",
      "cumbersome",
      "enchanted",
      "plain",
      "malicious",
      "romantic",
      "itchy",
      "light",
      "scintillating",
      "grouchy",
      "gainful",
      "four",
      "pricey",
      "three",
      "ambitious",
      "brown",
      "healthy",
      "willing",
      "new",
      "jazzy",
      "soggy",
      "oval",
      "madly",
      "nutritious",
      "unused",
      "kaput",
      "straight",
      "defective",
      "ripe",
      "wide",
      "whole",
      "insidious",
      "foregoing",
      "poised",
      "unusual",
      "smoggy",
      "optimal",
      "voiceless",
      "curved",
      "statuesque",
      "slim",
      "hard",
      "numberless",
      "successful",
      "brawny",
      "ratty",
      "ultra",
      "accurate",
      "rigid",
      "impossible",
      "ajar",
      "elegant",
      "heavy",
      "ablaze",
      "lackadaisical",
      "moldy",
      "lopsided",
      "black",
      "reflective",
      "mushy",
      "wholesale",
      "quarrelsome",
      "closed",
      "equal",
      "awake",
      "wide-eyed",
      "unwieldy",
      "mellow",
      "squealing",
      "shallow",
      "foolish",
      "measly",
      "poor",
      "cloistered",
      "calm",
      "shy",
      "clammy",
      "damaged",
      "jaded",
      "unable",
      "painstaking",
      "overjoyed",
      "faint",
      "steadfast",
      "brave",
      "receptive",
      "filthy",
      "amuck",
      "tacit",
      "living",
      "normal",
      "useless",
      "beneficial",
      "protective",
      "adaptable",
      "diligent",
      "uncovered",
      "meaty",
      "political",
      "rude",
      "stale",
      "nasty",
      "demonic",
      "perpetual",
      "fragile",
      "right",
      "striped",
      "rare",
      "guarded",
      "decorous",
      "wrathful",
      "strange",
      "daffy",
      "wealthy",
      "humdrum",
      "familiar",
      "animated",
      "aware",
      "silly",
      "oafish",
      "selfish",
      "royal",
      "skillful",
      "excellent",
      "wry",
      "flippant",
      "obeisant",
      "mammoth",
      "milky",
      "substantial",
      "modern",
      "huge",
      "bustling",
      "unequaled",
      "adamant",
      "green",
      "confused",
      "hapless",
      "ceaseless",
      "spotty",
      "dangerous",
      "defeated",
      "dull",
      "silky",
      "wet",
      "hurt",
      "efficacious",
      "best",
      "humorous",
      "magnificent",
      "faulty",
      "ruddy",
      "accessible",
      "second",
      "languid",
      "uptight",
      "small",
      "odd",
      "detailed",
      "didactic",
      "cute",
      "steep",
      "mixed",
      "squeamish",
      "truculent",
      "aboard",
      "deadpan",
      "sweltering",
      "stupendous",
      "overwrought",
      "precious",
      "pink",
      "afraid",
      "bitter",
      "husky",
      "wacky",
      "gruesome",
      "plucky",
      "scrawny",
      "famous",
      "old-fashioned",
      "fabulous",
      "obscene",
      "repulsive",
      "boundless",
      "handy",
      "greasy",
      "irritating",
      "roomy",
      "somber",
      "stormy",
      "two",
      "nippy",
      "half",
      "imperfect",
      "shaky",
      "nifty",
      "succinct",
      "hollow",
      "lonely",
      "sturdy",
      "giant",
      "fierce",
      "lazy",
      "bright",
      "maddening",
      "lamentable",
      "subdued",
      "tawdry",
      "crabby"
    ];
    exports.planetNameWords = [
      "abandon",
      "abate",
      "aberrant",
      "blaze",
      "abounding",
      "absorb",
      "acoustic",
      "harmony",
      "act",
      "action",
      "actor",
      "add",
      "addition",
      "adjustment",
      "admit",
      "advice",
      "advise",
      "afraid",
      "aggressive",
      "agonizing",
      "ahead",
      "airplane",
      "airport",
      "alight",
      "alike",
      "aloof",
      "ambitious",
      "amuck",
      "amusement",
      "anger",
      "animated",
      "annoyed",
      "anxious",
      "apparel",
      "applaud",
      "apple",
      "apples",
      "apply",
      "aquatic",
      "argument",
      "aromatic",
      "arrest",
      "assert",
      "assert",
      "attempt",
      "audacious",
      "auspicious",
      "authority",
      "avoid",
      "awake",
      "badge",
      "bait",
      "ball",
      "band",
      "band",
      "banish",
      "barbarous",
      "base",
      "base",
      "baseball",
      "basket",
      "bat",
      "bawdy",
      "bead",
      "bear",
      "beast",
      "beast",
      "beautify",
      "beds",
      "befall",
      "befitting",
      "behold",
      "believe",
      "bell",
      "bells",
      "bend",
      "berserk",
      "beseech",
      "big",
      "birthday",
      "bite",
      "bite",
      "blade",
      "blow",
      "blush",
      "bone",
      "books",
      "books",
      "boot",
      "bottle",
      "bouncy",
      "boundary",
      "bow",
      "brainy",
      "brass",
      "breath",
      "breathe",
      "bridge",
      "bright",
      "bring",
      "broadcast",
      "brother",
      "brothers",
      "bulb",
      "burly",
      "burst",
      "bury",
      "bushes",
      "busy",
      "button",
      "cabbage",
      "cagey",
      "calculating",
      "callous",
      "calm",
      "can",
      "canvas",
      "capable",
      "careless",
      "carriage",
      "cars",
      "cast",
      "catch",
      "cease",
      "celebrate",
      "cent",
      "chain",
      "chairs",
      "change",
      "changeable",
      "channel",
      "charge",
      "charming",
      "chat",
      "cheese",
      "cherries",
      "chide",
      "chief",
      "children",
      "chip",
      "choke",
      "clean",
      "cleave",
      "clocks",
      "closed",
      "clutch",
      "cluttered",
      "coast",
      "collapse",
      "collapse",
      "collar",
      "colour",
      "combative",
      "comfortable",
      "competition",
      "complain",
      "complete",
      "complex",
      "condition",
      "confuse",
      "connection",
      "connote",
      "conserve",
      "conspire",
      "constitute",
      "constrain",
      "contribute",
      "convene",
      "converge",
      "convict",
      "convince",
      "coo",
      "cooing",
      "cool",
      "cooperative",
      "copper",
      "cork",
      "corrod",
      "cough",
      "country",
      "cow",
      "cowardly",
      "crabby",
      "cracker",
      "crashing",
      "creep",
      "crib",
      "cry",
      "cub",
      "cumbersome",
      "cup",
      "cure",
      "curly",
      "curve",
      "cut",
      "cute",
      "cute",
      "daffy",
      "daffy",
      "daily",
      "dance",
      "dark",
      "daughter",
      "dazzling",
      "deafening",
      "debonair",
      "decision",
      "declare",
      "decorous",
      "defiant",
      "degree",
      "delay",
      "delicate",
      "delirious",
      "depend",
      "desire",
      "destruction",
      "develop",
      "die",
      "different",
      "digestion",
      "diligent",
      "dim",
      "diminish",
      "dinner",
      "direct",
      "dirty",
      "disgusted",
      "dispensable",
      "display",
      "display",
      "distinct",
      "dive",
      "dive",
      "divide",
      "dock",
      "doctor",
      "dog",
      "doll",
      "drain",
      "draw",
      "dream",
      "dreary",
      "drink",
      "drive",
      "drop",
      "dry",
      "dull",
      "dust",
      "dynamic",
      "dysfunctional",
      "earn",
      "earthy",
      "eatable",
      "edge",
      "education",
      "efficacious",
      "egg",
      "eggnog",
      "elephant",
      "elite",
      "elite",
      "eminent",
      "empower",
      "empty",
      "enchanting",
      "encourage",
      "end",
      "end",
      "endorse",
      "enjoy",
      "enlighten",
      "enormous",
      "enthusiastic",
      "envious",
      "erratic",
      "escape",
      "evasive",
      "event",
      "excited",
      "exclusive",
      "expensive",
      "expert",
      "extend",
      "extra-large",
      "extra-small",
      "eyes",
      "fabulous",
      "fair",
      "fall",
      "fan",
      "far",
      "fascinated",
      "fast",
      "fear",
      "feather",
      "feed",
      "feet",
      "field",
      "fight",
      "finger",
      "flaky",
      "flame",
      "flap",
      "flee",
      "flesh",
      "flock",
      "floor",
      "flop",
      "flower",
      "fly",
      "fly",
      "fog",
      "fold",
      "follow",
      "foregoing",
      "four",
      "freeze",
      "friend",
      "frighten",
      "frightened",
      "fulfil",
      "funny",
      "garrulous",
      "gash",
      "gentle",
      "gentle",
      "giant",
      "giant",
      "gigantic",
      "giraffe",
      "glamorous",
      "glass",
      "glass",
      "glib",
      "glorious",
      "glove",
      "glow",
      "godly",
      "golden",
      "govern",
      "grade",
      "grape",
      "grass",
      "green",
      "green",
      "grind",
      "ground",
      "group",
      "grow",
      "growth",
      "gruesome",
      "grumpy",
      "guarded",
      "guess",
      "guide",
      "gusty",
      "haircut",
      "hallowed",
      "halting",
      "handsome",
      "hang",
      "happy",
      "harbor",
      "harm",
      "harmonious",
      "hat",
      "heal",
      "hearing",
      "heart",
      "heat",
      "hiss",
      "honey",
      "hope",
      "hose",
      "hospitable",
      "humorous",
      "hurt",
      "hurt",
      "hush",
      "hustle",
      "hydrant",
      "hypnotic",
      "hypnotize",
      "ice",
      "idealize",
      "ill-fated",
      "illustrate",
      "imaginary",
      "imagine",
      "imminent",
      "immolate",
      "impart",
      "impartial",
      "impend",
      "impend",
      "imperfect",
      "imperil",
      "imperil",
      "implant",
      "implicate",
      "impolite",
      "imported",
      "income",
      "incompetent",
      "increase",
      "incredible",
      "indicate",
      "induce",
      "indulge",
      "industry",
      "infect",
      "inherit",
      "initiate",
      "innocent",
      "inspire",
      "insult",
      "insurance",
      "invent",
      "invention",
      "iron",
      "jaded",
      "jail",
      "jam",
      "jealous",
      "jeans",
      "jellyfish",
      "jobless",
      "jumbled",
      "kill",
      "kiss",
      "knot",
      "knowing",
      "lade",
      "ladybug",
      "lamentable",
      "lamp",
      "languid",
      "latch",
      "laugh",
      "lavish",
      "lead",
      "leak",
      "lean",
      "leather",
      "lend",
      "let",
      "letters",
      "lick",
      "lift",
      "lip",
      "list",
      "listen",
      "listen",
      "lively",
      "lock",
      "lock",
      "locket",
      "lonely",
      "longing",
      "look",
      "loose",
      "lose",
      "love",
      "low",
      "lowly",
      "ludicrous",
      "lumpy",
      "lunch",
      "lyrical",
      "maddening",
      "magnificent",
      "mailbox",
      "make",
      "manage",
      "manager",
      "marble",
      "mass",
      "materialistic",
      "meal",
      "measly",
      "measure",
      "meat",
      "meek",
      "meet",
      "mellow",
      "mere",
      "mind",
      "mine",
      "miniature",
      "minister",
      "mint",
      "miscreant",
      "motionless",
      "motivate",
      "mountain",
      "multiply",
      "mundane",
      "mushy",
      "music",
      "nappy",
      "need",
      "nerve",
      "nest",
      "news",
      "next",
      "nifty",
      "nimble",
      "noise",
      "noiseless",
      "noisy",
      "nostalgic",
      "notify",
      "notify",
      "null",
      "nut",
      "oatmeal",
      "oatmeal",
      "observation",
      "oceanic",
      "odd",
      "old-fashioned",
      "onerous",
      "open",
      "operation",
      "opinion",
      "oranges",
      "order",
      "ordinary",
      "organization",
      "originate",
      "outgoing",
      "output",
      "outrageous",
      "outstanding",
      "oven",
      "overflow",
      "overrated",
      "owe",
      "own",
      "pacify",
      "pain",
      "pale",
      "pale",
      "paltry",
      "pan",
      "paper",
      "partake",
      "participate",
      "party",
      "passenger",
      "past",
      "patch",
      "pay",
      "peace",
      "peaceful",
      "penitent",
      "permissible",
      "pet",
      "phone",
      "physical",
      "pink",
      "piquant",
      "place",
      "plain",
      "plan",
      "please",
      "pointless",
      "poison",
      "police",
      "ponder",
      "poor",
      "possessive",
      "praise",
      "precious",
      "premium",
      "prescribe",
      "preserve",
      "preset",
      "prickly",
      "probable",
      "proceed",
      "protect",
      "public",
      "pull",
      "pull",
      "punish",
      "puny",
      "purpose",
      "push",
      "puzzling",
      "quack",
      "qualify",
      "quarrel",
      "quilt",
      "quince",
      "quirky",
      "quit",
      "quiver",
      "quixotic",
      "ragged",
      "rain",
      "rapid",
      "rate",
      "ratty",
      "reach",
      "reaction",
      "read",
      "rebel",
      "recall",
      "receipt",
      "receptive",
      "recondite",
      "redo",
      "refer",
      "reflective",
      "refuse",
      "regret",
      "regular",
      "relate",
      "relation",
      "rend",
      "renew",
      "repair",
      "repeat",
      "reply",
      "resell",
      "resolve",
      "resolve",
      "respect",
      "respect",
      "review",
      "rhythm",
      "rifle",
      "ring",
      "ring",
      "river",
      "roar",
      "roasted",
      "rob",
      "rob",
      "rock",
      "rock",
      "roomy",
      "rose",
      "rotten",
      "route",
      "rush",
      "sable",
      "sag",
      "salt",
      "salve",
      "same",
      "sample",
      "sanctify",
      "sash",
      "sassy",
      "satirise",
      "savor",
      "saw",
      "say",
      "scar",
      "scarf",
      "scarify",
      "scary",
      "school",
      "scientific",
      "scold",
      "scorch",
      "scrawl",
      "scrawny",
      "sea",
      "search",
      "seashore",
      "seat",
      "secretive",
      "sedate",
      "seemly",
      "sense",
      "sentence",
      "sever",
      "sew",
      "shake",
      "sharp",
      "shear",
      "shed",
      "sheet",
      "ship",
      "shivering",
      "shock",
      "shun",
      "shy",
      "side",
      "sight",
      "signify",
      "silky",
      "silly",
      "silver",
      "simple",
      "sing",
      "sink",
      "sit",
      "six",
      "skid",
      "skillful",
      "sleep",
      "sleepy",
      "slide",
      "slim",
      "slink",
      "slip",
      "slippery",
      "slow",
      "smell",
      "smooth",
      "snail",
      "snake",
      "snap",
      "sneeze",
      "soap",
      "sob",
      "society",
      "soda",
      "soggy",
      "solicit",
      "sore",
      "sorrow",
      "sound",
      "soup",
      "sour",
      "spade",
      "spark",
      "spectacular",
      "spill",
      "spiteful",
      "splendid",
      "spotted",
      "spotty",
      "spray",
      "spring",
      "square",
      "squeamish",
      "standing",
      "stare",
      "statuesque",
      "steady",
      "step",
      "sticky",
      "stir",
      "stitch",
      "stomach",
      "store",
      "story",
      "straight",
      "strain",
      "straw",
      "stream",
      "street",
      "strew",
      "strive",
      "strong",
      "stupendous",
      "submit",
      "succeed",
      "suck",
      "suggest",
      "summon",
      "sun",
      "superb",
      "superficial",
      "suppose",
      "surround",
      "survive",
      "swallow",
      "sway",
      "sweet",
      "swim",
      "swing",
      "tail",
      "talented",
      "talk",
      "tall",
      "tan",
      "tart",
      "taste",
      "tasteless",
      "tax",
      "teach",
      "tearful",
      "teeth",
      "tense",
      "terminate",
      "terrible",
      "terrific",
      "terrify",
      "testy",
      "thankful",
      "theory",
      "therapeutic",
      "thing",
      "think",
      "thinkable",
      "third",
      "thought",
      "throne",
      "thumb",
      "ticket",
      "tie",
      "tiger",
      "tiger",
      "tightfisted",
      "time",
      "time",
      "time",
      "tired",
      "tongue",
      "toothbrush",
      "toothsome",
      "toss",
      "town",
      "toys",
      "trample",
      "transfer",
      "tray",
      "tree",
      "tremble",
      "tremendous",
      "tricky",
      "triumph",
      "trouble",
      "truculent",
      "trust",
      "try",
      "tub",
      "turn",
      "twig",
      "twist",
      "two",
      "type",
      "ugliest",
      "ugly",
      "ultra",
      "umbrella",
      "undesirable",
      "undo",
      "unequaled",
      "unkempt",
      "unsightly",
      "unsuitable",
      "upset",
      "used",
      "utopian",
      "utter",
      "vacation",
      "vacation",
      "vanish",
      "vengeful",
      "verify",
      "vessel",
      "vigorous",
      "walk",
      "wander",
      "warn",
      "wasteful",
      "watch",
      "water",
      "waylay",
      "weak",
      "weigh",
      "welcome",
      "wheel",
      "whistle",
      "wide-eyed",
      "wing",
      "witty",
      "wool",
      "wrench",
      "write",
      "wry",
      "xenology",
      "yarn",
      "year",
      "yield",
      "yoke",
      "zephyr",
      "zipper",
      "zippy",
      "otter",
      "llama",
      "aardvark",
      "aggravated",
      "luck",
      "luxury",
      "satisfaction",
      "trust",
      "wisdom",
      "worry",
      "pride",
      "sin",
      "sloth",
      "greed",
      "opinion",
      "movement",
      "infancy",
      "envy",
      "evil",
      "failure",
      "success",
      "birth",
      "calm",
      "shallow",
      "insect",
      "fox",
      "panda",
      "penguin",
      "lodge",
      "town",
      "awareness",
      "childhood",
      "chaos"
    ];
    exports.planetTagAdj = [
      "vast",
      "frigid",
      "boiling",
      "cold",
      "immense",
      "gaseous",
      "alluring",
      "groovy",
      "scattered",
      "frightening",
      "wacky",
      "lush",
      "green",
      "empty",
      "elastic",
      "calm",
      "fragile",
      "guarded",
      "various",
      "nebulous",
      "electronic",
      "heavenly",
      "cheerful",
      "delicious",
      "silky",
      "ritzy",
      "perfect",
      "pristine",
      "damaged",
      "unruly",
      "unsightly",
      "mysterious",
      "shallow",
      "deep",
      "trite",
      "noxious",
      "spectacular",
      "furtive",
      "jittery",
      "pleasant",
      "craggy",
      "overgrown",
      "wonderful",
      "dynamic",
      "harmonious",
      "deafening"
    ];
    exports.planetTagNoun = [
      "tundra",
      "desert",
      "oasis",
      "wasteland",
      "garden",
      "ocean",
      "savannah",
      "tropic",
      "shrubland",
      "forest",
      "jungle",
      "biosphere",
      "ecoregion",
      "delta",
      "ruin",
      "abyss",
      "hydrotherm",
      "marsh",
      "benthic",
      "ptuitary",
      "panda",
      "bear",
      "Vitalik",
      "cyrptokitty",
      "bitcoin"
    ];
    exports.blurbGrammar = {
      geography: [
        "mountains",
        "hills",
        "rivers",
        "oceans",
        "forests",
        "grasslands",
        "plains",
        "alienscapes",
        "tetraspheres",
        "ruins",
        "tropics",
        "crags",
        "cliffs",
        "icebergs",
        "volcanoes",
        ...Array(7).fill("#geography# and #geography#")
      ],
      populates: ["#stretch# across the #landscape# as far as #eyecansee#"],
      landscape: [
        "landscape",
        "horizon",
        "view",
        "surface",
        "skyline",
        "sky",
        "sea",
        "scenery",
        "topography",
        "topology"
      ],
      stretch: ["reach", "stretch", "extend", "spread"],
      noun: genericNoun,
      verb: genericVerb,
      adj: genericAdj,
      eyecansee: [
        "the eye can see",
        "a cow can run",
        "a bear can walk",
        "a network request can reach",
        ...Array(2).fill("#adj.a# #noun# can #verb#")
      ],
      air: ["atmosphere", "air", "weather", "gaseous composition"],
      fruit: [
        "magno",
        "blueberry",
        "raspberry",
        "pomelo",
        "pineapple",
        "apple",
        "orange",
        "watermelon"
      ],
      colors: [
        "in many colors",
        "pervasively",
        "sparingly",
        "in full abundance",
        "in small amounts",
        "like #noun.a# might #verb# #noun.a#",
        "across the horizon",
        "over the land"
      ],
      habitat: [
        "rainforest",
        "jungles",
        "ocean",
        "icy landscape",
        "deserts",
        "sky",
        "magma pools",
        "acid puddles"
      ],
      populate: [
        "populate",
        "pervade",
        "fill",
        "inhabit",
        "reside in",
        "occupy",
        "hunt in",
        "hunt #species# in",
        "gather #flora# in"
      ],
      species: ["fish", "mammal", "bird", "amphibian", "quadruped", "biped"],
      many: [
        "many",
        "a few",
        "a single",
        "two common",
        "an uncannily human-like",
        "a seemingly robotic",
        "a silicon-based"
      ],
      bloom: [
        "pervade",
        "bloom",
        "grow",
        "spread",
        "peek out",
        "pepper the landscape",
        "#stretch# out",
        "flourish",
        "meekly survive",
        "dot the barren land"
      ],
      flora: [
        "flowers",
        "trees",
        "tall grasses",
        "#fruit#-like fruit",
        "marsh mallows",
        "deciduous forestry",
        "massive fungi",
        "fields of mold",
        "wheat-like crops",
        "mysterious fruits"
      ],
      descair: [
        "hot",
        "cold",
        "heavy",
        "warm",
        "dense",
        "viscous",
        "nitrogen-dense",
        "toxic",
        "nauseating",
        "frigid",
        "icy",
        "humid",
        "saturated",
        "dry",
        ...Array(10).fill("#descair# and #descair#")
      ],
      gravity: ["heavy", "light", "strong", "unusual, somehow"],
      funfact: [
        "the gravity seems #gravity#",
        "it smells like #noun.s#",
        "there are fruits on the trees. They look like #noun.s#",
        "the soil is #adj#. Perhaps that's why the plants look like #noun.s#"
      ]
    };
    var dflaunch = new Date("August 8, 2020 00:00:00");
    exports.blurb2grammar = {
      learned: [
        "discovered ways",
        "researched methods",
        "trained in the mountains in order",
        "found ancient texts describing how"
      ],
      live: [
        "live",
        "farm",
        "grow",
        "thrive",
        "develop economies",
        "raise bears",
        "trade ETH",
        "buy cryptokitties"
      ],
      sun: [
        "sun",
        "mothers",
        "bears",
        "core",
        "oceans",
        "fauna",
        "tectonic plates",
        "volcanos",
        "toxic gases"
      ],
      flock: ["flock", "army", "fleet", "ensemble", "barrage", "array", "aggregation", "mixture"],
      bads: [
        "solar flares",
        "polar bears",
        "foxes",
        "in-browser miners",
        "toxic gas",
        "evil ducks",
        "man-eating plants",
        "radioactive minerals",
        "neutrino rays",
        "eigenstates",
        "sidechains",
        "51% attacks"
      ],
      sends: [
        "sends",
        "generates",
        "publicises",
        "causes",
        "births",
        "spawns",
        "produces",
        "provokes",
        "kindles",
        "fosters",
        "sparks",
        "throws",
        "delivers"
      ],
      sometimes: [
        "every day",
        "every minute",
        "periodically",
        "whenever @VitalikButerin tweets",
        "when Jim feels like it",
        "every second",
        "every four seconds",
        "every Planck length",
        "every quantum nanostate",
        "every decade",
        `every ${Math.floor(50 + Math.random() * 100)} galactic time-units`
      ],
      years: [
        "years",
        "seconds",
        "days",
        `${Date.now() - dflaunch}ms since the Dark Forest universe began`
      ],
      removed: [
        "defended against",
        "removed",
        "bribed",
        "nullified",
        "eliminated",
        "exiled",
        "dark realm-ed",
        "destroyed"
      ],
      throwing: ["throwing", "tossing", "firing", "launching"],
      warbears: [
        "warbears",
        "drones",
        "guided missiles",
        "ICBMs",
        "spiral energy",
        "smaller galaxies",
        "storybooks",
        "laser beams"
      ],
      lesson: [
        "#friends#",
        "#chocolates#",
        "#willway#"
      ],
      friends: ["the real #treasure# was the #friend.s# we #made# #alongtheway#"],
      alongtheway: ["along the way", "on the way to school", "in our childhood"],
      treasure: [
        "treasure",
        "gift",
        "joy",
        "lesson",
        "battle",
        "money",
        "decentralized platform",
        "bear",
        "planet",
        "space war",
        "flux capacitor",
        "layer 2 scaling solution",
        "metaverse"
      ],
      friend: [
        "friend",
        "bear",
        "books",
        "bird",
        "toy",
        "restaurant",
        "computer",
        "spaceship",
        "asteroid",
        "metaverse"
      ],
      made: [
        "made",
        "ate",
        "gained",
        "lost",
        "identified",
        "organized",
        "found",
        "destroyed",
        "educated",
        "confirmed"
      ],
      chocolates: [
        "#life# is like a #box# of #chocolate.s# - you never #know# what you're gonna #get#"
      ],
      life: [
        "ethereum",
        "blockchain",
        "life",
        "dating",
        "college",
        "space warfare",
        "colonizing mars",
        "loving bears",
        "liking yourself"
      ],
      box: ["box", "container", "flock", "group", "squabble", "flamboyance", "classroom"],
      chocolate: ["teacher", "chocolate", "candy", "meat log"],
      know: ["know", "realize", "anticipate", "enjoy", "find"],
      get: ["find", "eat", "enjoy", "delete from your browser history"],
      willway: [`#when# #theres# #will.a#, #theres# #way.a#`],
      when: [
        "when",
        "if",
        "sometimes when",
        "if Jim says",
        "when",
        "if",
        "when",
        "when",
        "when",
        "if",
        "if",
        "if",
        "where"
      ],
      theres: [`there's`, "there is never", `there isn't`],
      will: [
        "will",
        "way",
        "$50 ETH gas price",
        "decentralized hair salon",
        "strong desire to minimize self-actualization",
        "bear",
        "bad chance",
        "desire",
        "yearning",
        "determination",
        "sufficiently strong love",
        "wish"
      ],
      way: [
        "way",
        "will",
        "bear",
        "good chance",
        "bad chance",
        'book that says "#willway#"',
        "way to make it come true",
        "nothing impossible",
        "someone who will take it away from you",
        "way to lose it",
        "way to gain it",
        'life lesson: "#lesson#"'
      ]
    };
  }
});

// node_modules/@darkforest_eth/procedural/dist/tracery.js
var require_tracery = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/tracery.js"(exports, module) {
    "use strict";
    var tracery = function() {
      var rng = Math.random;
      var setRng = function setRng2(newRng) {
        rng = newRng;
      };
      var TraceryNode = function(parent, childIndex, settings) {
        this.errors = [];
        if (settings.raw === void 0) {
          this.errors.push("Empty input for node");
          settings.raw = "";
        }
        if (parent instanceof tracery.Grammar) {
          this.grammar = parent;
          this.parent = null;
          this.depth = 0;
          this.childIndex = 0;
        } else {
          this.grammar = parent.grammar;
          this.parent = parent;
          this.depth = parent.depth + 1;
          this.childIndex = childIndex;
        }
        this.raw = settings.raw;
        this.type = settings.type;
        this.isExpanded = false;
        if (!this.grammar) {
          console.warn("No grammar specified for this node", this);
        }
      };
      TraceryNode.prototype.toString = function() {
        return "Node('" + this.raw + "' " + this.type + " d:" + this.depth + ")";
      };
      TraceryNode.prototype.expandChildren = function(childRule, preventRecursion) {
        this.children = [];
        this.finishedText = "";
        this.childRule = childRule;
        if (this.childRule !== void 0) {
          var sections = tracery.parse(childRule);
          if (sections.errors.length > 0) {
            this.errors = this.errors.concat(sections.errors);
          }
          for (var i = 0; i < sections.length; i++) {
            this.children[i] = new TraceryNode(this, i, sections[i]);
            if (!preventRecursion)
              this.children[i].expand(preventRecursion);
            this.finishedText += this.children[i].finishedText;
          }
        } else {
          this.errors.push("No child rule provided, can't expand children");
          console.warn("No child rule provided, can't expand children");
        }
      };
      TraceryNode.prototype.expand = function(preventRecursion) {
        if (!this.isExpanded) {
          this.isExpanded = true;
          this.expansionErrors = [];
          switch (this.type) {
            case -1:
              this.expandChildren(this.raw, preventRecursion);
              break;
            case 0:
              this.finishedText = this.raw;
              break;
            case 1:
              this.preactions = [];
              this.postactions = [];
              var parsed = tracery.parseTag(this.raw);
              this.symbol = parsed.symbol;
              this.modifiers = parsed.modifiers;
              for (var i = 0; i < parsed.preactions.length; i++) {
                this.preactions[i] = new NodeAction(this, parsed.preactions[i].raw);
              }
              for (var i = 0; i < parsed.postactions.length; i++) {
              }
              for (var i = 0; i < this.preactions.length; i++) {
                if (this.preactions[i].type === 0)
                  this.postactions.push(this.preactions[i].createUndo());
              }
              for (var i = 0; i < this.preactions.length; i++) {
                this.preactions[i].activate();
              }
              this.finishedText = this.raw;
              var selectedRule = this.grammar.selectRule(this.symbol, this, this.errors);
              this.expandChildren(selectedRule, preventRecursion);
              for (var i = 0; i < this.modifiers.length; i++) {
                var modName = this.modifiers[i];
                var modParams = [];
                if (modName.indexOf("(") > 0) {
                  var regExp = /\(([^)]+)\)/;
                  var results = regExp.exec(this.modifiers[i]);
                  if (!results || results.length < 2) {
                  } else {
                    var modParams = results[1].split(",");
                    modName = this.modifiers[i].substring(0, modName.indexOf("("));
                  }
                }
                var mod = this.grammar.modifiers[modName];
                if (!mod) {
                  this.errors.push("Missing modifier " + modName);
                  this.finishedText += "((." + modName + "))";
                } else {
                  this.finishedText = mod(this.finishedText, modParams);
                }
              }
              for (var i = 0; i < this.postactions.length; i++) {
                this.postactions[i].activate();
              }
              break;
            case 2:
              this.action = new NodeAction(this, this.raw);
              this.action.activate();
              this.finishedText = "";
              break;
          }
        } else {
        }
      };
      TraceryNode.prototype.clearEscapeChars = function() {
        this.finishedText = this.finishedText.replace(/\\\\/g, "DOUBLEBACKSLASH").replace(/\\/g, "").replace(/DOUBLEBACKSLASH/g, "\\");
      };
      function NodeAction(node, raw) {
        this.node = node;
        var sections = raw.split(":");
        this.target = sections[0];
        if (sections.length === 1) {
          this.type = 2;
        } else {
          this.rule = sections[1];
          if (this.rule === "POP") {
            this.type = 1;
          } else {
            this.type = 0;
          }
        }
      }
      NodeAction.prototype.createUndo = function() {
        if (this.type === 0) {
          return new NodeAction(this.node, this.target + ":POP");
        }
        return null;
      };
      NodeAction.prototype.activate = function() {
        var grammar = this.node.grammar;
        switch (this.type) {
          case 0:
            this.ruleSections = this.rule.split(",");
            this.finishedRules = [];
            this.ruleNodes = [];
            for (var i = 0; i < this.ruleSections.length; i++) {
              var n = new TraceryNode(grammar, 0, {
                type: -1,
                raw: this.ruleSections[i]
              });
              n.expand();
              this.finishedRules.push(n.finishedText);
            }
            grammar.pushRules(this.target, this.finishedRules, this);
            break;
          case 1:
            grammar.popRules(this.target);
            break;
          case 2:
            grammar.flatten(this.target, true);
            break;
        }
      };
      NodeAction.prototype.toText = function() {
        switch (this.type) {
          case 0:
            return this.target + ":" + this.rule;
          case 1:
            return this.target + ":POP";
          case 2:
            return "((some function))";
          default:
            return "((Unknown Action))";
        }
      };
      function RuleSet(grammar, raw) {
        this.raw = raw;
        this.grammar = grammar;
        this.falloff = 1;
        if (Array.isArray(raw)) {
          this.defaultRules = raw;
        } else if (typeof raw === "string" || raw instanceof String) {
          this.defaultRules = [raw];
        } else if (raw === "object") {
        }
      }
      RuleSet.prototype.selectRule = function(errors) {
        if (this.conditionalRule) {
          var value = this.grammar.expand(this.conditionalRule, true);
          if (this.conditionalValues[value]) {
            var v = this.conditionalValues[value].selectRule(errors);
            if (v !== null && v !== void 0)
              return v;
          }
        }
        if (this.ranking) {
          for (var i = 0; i < this.ranking.length; i++) {
            var v = this.ranking.selectRule();
            if (v !== null && v !== void 0)
              return v;
          }
        }
        if (this.defaultRules !== void 0) {
          var index = 0;
          var distribution = this.distribution;
          if (!distribution)
            distribution = this.grammar.distribution;
          switch (distribution) {
            case "shuffle":
              if (!this.shuffledDeck || this.shuffledDeck.length === 0) {
                this.shuffledDeck = fyshuffle(Array.apply(null, {
                  length: this.defaultRules.length
                }).map(Number.call, Number), this.falloff);
              }
              index = this.shuffledDeck.pop();
              break;
            case "weighted":
              errors.push("Weighted distribution not yet implemented");
              break;
            case "falloff":
              errors.push("Falloff distribution not yet implemented");
              break;
            default:
              index = Math.floor(Math.pow(rng(), this.falloff) * this.defaultRules.length);
              break;
          }
          if (!this.defaultUses)
            this.defaultUses = [];
          this.defaultUses[index] = ++this.defaultUses[index] || 1;
          return this.defaultRules[index];
        }
        errors.push("No default rules defined for " + this);
        return null;
      };
      RuleSet.prototype.clearState = function() {
        if (this.defaultUses) {
          this.defaultUses = [];
        }
      };
      function fyshuffle(array, falloff) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(rng() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      var Symbol = function(grammar, key, rawRules) {
        this.key = key;
        this.grammar = grammar;
        this.rawRules = rawRules;
        this.baseRules = new RuleSet(this.grammar, rawRules);
        this.clearState();
      };
      Symbol.prototype.clearState = function() {
        this.stack = [this.baseRules];
        this.uses = [];
        this.baseRules.clearState();
      };
      Symbol.prototype.pushRules = function(rawRules) {
        var rules = new RuleSet(this.grammar, rawRules);
        this.stack.push(rules);
      };
      Symbol.prototype.popRules = function() {
        this.stack.pop();
      };
      Symbol.prototype.selectRule = function(node, errors) {
        this.uses.push({
          node
        });
        if (this.stack.length === 0) {
          errors.push("The rule stack for '" + this.key + "' is empty, too many pops?");
          return "((" + this.key + "))";
        }
        return this.stack[this.stack.length - 1].selectRule();
      };
      Symbol.prototype.getActiveRules = function() {
        if (this.stack.length === 0) {
          return null;
        }
        return this.stack[this.stack.length - 1].selectRule();
      };
      Symbol.prototype.rulesToJSON = function() {
        return JSON.stringify(this.rawRules);
      };
      var Grammar = function(raw, settings) {
        this.modifiers = {};
        this.loadFromRawObj(raw);
      };
      Grammar.prototype.clearState = function() {
        var keys = Object.keys(this.symbols);
        for (var i = 0; i < keys.length; i++) {
          this.symbols[keys[i]].clearState();
        }
      };
      Grammar.prototype.addModifiers = function(mods) {
        for (var key in mods) {
          if (mods.hasOwnProperty(key)) {
            this.modifiers[key] = mods[key];
          }
        }
      };
      Grammar.prototype.loadFromRawObj = function(raw) {
        this.raw = raw;
        this.symbols = {};
        this.subgrammars = [];
        if (this.raw) {
          for (var key in this.raw) {
            if (this.raw.hasOwnProperty(key)) {
              this.symbols[key] = new Symbol(this, key, this.raw[key]);
            }
          }
        }
      };
      Grammar.prototype.createRoot = function(rule) {
        var root = new TraceryNode(this, 0, {
          type: -1,
          raw: rule
        });
        return root;
      };
      Grammar.prototype.expand = function(rule, allowEscapeChars) {
        var root = this.createRoot(rule);
        root.expand();
        if (!allowEscapeChars)
          root.clearEscapeChars();
        return root;
      };
      Grammar.prototype.flatten = function(rule, allowEscapeChars) {
        var root = this.expand(rule, allowEscapeChars);
        return root.finishedText;
      };
      Grammar.prototype.toJSON = function() {
        var keys = Object.keys(this.symbols);
        var symbolJSON = [];
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          symbolJSON.push(' "' + key + '" : ' + this.symbols[key].rulesToJSON());
        }
        return "{\n" + symbolJSON.join(",\n") + "\n}";
      };
      Grammar.prototype.pushRules = function(key, rawRules, sourceAction) {
        if (this.symbols[key] === void 0) {
          this.symbols[key] = new Symbol(this, key, rawRules);
          if (sourceAction)
            this.symbols[key].isDynamic = true;
        } else {
          this.symbols[key].pushRules(rawRules);
        }
      };
      Grammar.prototype.popRules = function(key) {
        if (!this.symbols[key])
          this.errors.push("Can't pop: no symbol for key " + key);
        this.symbols[key].popRules();
      };
      Grammar.prototype.selectRule = function(key, node, errors) {
        if (this.symbols[key]) {
          var rule = this.symbols[key].selectRule(node, errors);
          return rule;
        }
        for (var i = 0; i < this.subgrammars.length; i++) {
          if (this.subgrammars[i].symbols[key])
            return this.subgrammars[i].symbols[key].selectRule();
        }
        errors.push("No symbol for '" + key + "'");
        return "((" + key + "))";
      };
      tracery = {
        createGrammar: function(raw) {
          return new Grammar(raw);
        },
        parseTag: function(tagContents) {
          var parsed = {
            symbol: void 0,
            preactions: [],
            postactions: [],
            modifiers: []
          };
          var sections = tracery.parse(tagContents);
          var symbolSection = void 0;
          for (var i = 0; i < sections.length; i++) {
            if (sections[i].type === 0) {
              if (symbolSection === void 0) {
                symbolSection = sections[i].raw;
              } else {
                throw "multiple main sections in " + tagContents;
              }
            } else {
              parsed.preactions.push(sections[i]);
            }
          }
          if (symbolSection === void 0) {
          } else {
            var components = symbolSection.split(".");
            parsed.symbol = components[0];
            parsed.modifiers = components.slice(1);
          }
          return parsed;
        },
        parse: function(rule) {
          var depth = 0;
          var inTag = false;
          var sections = [];
          var escaped = false;
          var errors = [];
          var start = 0;
          var escapedSubstring = "";
          var lastEscapedChar = void 0;
          if (rule === null) {
            var sections = [];
            sections.errors = errors;
            return sections;
          }
          function createSection(start2, end, type) {
            if (end - start2 < 1) {
              if (type === 1)
                errors.push(start2 + ": empty tag");
              if (type === 2)
                errors.push(start2 + ": empty action");
            }
            var rawSubstring;
            if (lastEscapedChar !== void 0) {
              rawSubstring = escapedSubstring + "\\" + rule.substring(lastEscapedChar + 1, end);
            } else {
              rawSubstring = rule.substring(start2, end);
            }
            sections.push({
              type,
              raw: rawSubstring
            });
            lastEscapedChar = void 0;
            escapedSubstring = "";
          }
          for (var i = 0; i < rule.length; i++) {
            if (!escaped) {
              var c = rule.charAt(i);
              switch (c) {
                case "[":
                  if (depth === 0 && !inTag) {
                    if (start < i)
                      createSection(start, i, 0);
                    start = i + 1;
                  }
                  depth++;
                  break;
                case "]":
                  depth--;
                  if (depth === 0 && !inTag) {
                    createSection(start, i, 2);
                    start = i + 1;
                  }
                  break;
                case "#":
                  if (depth === 0) {
                    if (inTag) {
                      createSection(start, i, 1);
                      start = i + 1;
                    } else {
                      if (start < i)
                        createSection(start, i, 0);
                      start = i + 1;
                    }
                    inTag = !inTag;
                  }
                  break;
                case "\\":
                  escaped = true;
                  escapedSubstring = escapedSubstring + rule.substring(start, i);
                  start = i + 1;
                  lastEscapedChar = i;
                  break;
              }
            } else {
              escaped = false;
            }
          }
          if (start < rule.length)
            createSection(start, rule.length, 0);
          if (inTag) {
            errors.push("Unclosed tag");
          }
          if (depth > 0) {
            errors.push("Too many [");
          }
          if (depth < 0) {
            errors.push("Too many ]");
          }
          sections = sections.filter(function(section) {
            if (section.type === 0 && section.raw.length === 0)
              return false;
            return true;
          });
          sections.errors = errors;
          return sections;
        }
      };
      tracery.TraceryNode = TraceryNode;
      tracery.Grammar = Grammar;
      tracery.Symbol = Symbol;
      tracery.RuleSet = RuleSet;
      tracery.setRng = setRng;
      return tracery;
    }();
    module.exports = tracery;
  }
});

// node_modules/@darkforest_eth/procedural/dist/tracery-modifiers.js
var require_tracery_modifiers = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/tracery-modifiers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.baseEngModifiers = void 0;
    function isVowel(c) {
      var c2 = c.toLowerCase();
      return c2 === "a" || c2 === "e" || c2 === "i" || c2 === "o" || c2 === "u";
    }
    function isAlphaNum(c) {
      return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9";
    }
    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    exports.baseEngModifiers = {
      replace: function(s, params) {
        return s.replace(new RegExp(escapeRegExp(params[0]), "g"), params[1]);
      },
      capitalizeAll: function(s) {
        var s2 = "";
        var capNext = true;
        for (var i = 0; i < s.length; i++) {
          if (!isAlphaNum(s.charAt(i))) {
            capNext = true;
            s2 += s.charAt(i);
          } else {
            if (!capNext) {
              s2 += s.charAt(i);
            } else {
              s2 += s.charAt(i).toUpperCase();
              capNext = false;
            }
          }
        }
        return s2;
      },
      capitalize: function(s) {
        return s.charAt(0).toUpperCase() + s.substring(1);
      },
      a: function(s) {
        if (s.length > 0) {
          if (s.charAt(0).toLowerCase() === "u") {
            if (s.length > 2) {
              if (s.charAt(2).toLowerCase() === "i")
                return "a " + s;
            }
          }
          if (isVowel(s.charAt(0))) {
            return "an " + s;
          }
        }
        return "a " + s;
      },
      firstS: function(s) {
        console.log(s);
        var s2 = s.split(" ");
        var finished = exports.baseEngModifiers.s(s2[0]) + " " + s2.slice(1).join(" ");
        console.log(finished);
        return finished;
      },
      s: function(s) {
        switch (s.charAt(s.length - 1)) {
          case "s":
            return s + "es";
            break;
          case "h":
            return s + "es";
            break;
          case "x":
            return s + "es";
            break;
          case "y":
            if (!isVowel(s.charAt(s.length - 2)))
              return s.substring(0, s.length - 1) + "ies";
            else
              return s + "s";
            break;
          default:
            return s + "s";
        }
      },
      ed: function(s) {
        switch (s.charAt(s.length - 1)) {
          case "s":
            return s + "ed";
            break;
          case "e":
            return s + "d";
            break;
          case "h":
            return s + "ed";
            break;
          case "x":
            return s + "ed";
            break;
          case "y":
            if (!isVowel(s.charAt(s.length - 2)))
              return s.substring(0, s.length - 1) + "ied";
            else
              return s + "d";
            break;
          default:
            return s + "ed";
        }
      }
    };
  }
});

// node_modules/@darkforest_eth/procedural/dist/ProcgenUtils.js
var require_ProcgenUtils = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/ProcgenUtils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHatSizeName = exports.getPlanetBlurb2 = exports.getPlanetBlurb = exports.getPlanetTagline = exports.getPlanetNameHash = exports.getPlanetName = exports.getPlanetTitle = exports.getPlanetCosmetic = exports.getRuinsInfo = exports.artifactRandomInt = exports.artifactRandom = exports.planetRandomInt = exports.planetRandom = exports.planetPerlin = exports.getPlanetClass = exports.getOwnerColor = exports.getOwnerColorVec = exports.getPlayerColorVec = exports.getPlayerColor = exports.hashToHue = exports.hslToRgb = exports.rgbStr = exports.hslStr = exports.hatTypeFromHash = exports.grayColors = exports.getBiomeRgbStr = exports.titleCase = void 0;
    var constants_1 = require_dist2();
    var gamelogic_1 = require_dist5();
    var hashing_1 = require_dist6();
    var serde_1 = require_dist4();
    var types_1 = require_dist();
    var Noise_1 = __importDefault(require_Noise());
    var ProcgenConsts_1 = require_ProcgenConsts();
    var tracery_1 = __importDefault(require_tracery());
    var tracery_modifiers_1 = require_tracery_modifiers();
    var titleCase = (title) => title.split(/ /g).map((word, i) => {
      if (i !== 0 && ["of", "the"].includes(word))
        return word;
      return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
    }).join(" ");
    exports.titleCase = titleCase;
    var blurbsById = new Map();
    var blurbs2ById = new Map();
    var cosmeticByLocId = new Map();
    var baseByBiome = {
      [types_1.Biome.UNKNOWN]: [0, 0, 0],
      [types_1.Biome.OCEAN]: [213, 100, 50],
      [types_1.Biome.FOREST]: [135, 96, 63],
      [types_1.Biome.GRASSLAND]: [82, 80, 76],
      [types_1.Biome.TUNDRA]: [339, 95, 70],
      [types_1.Biome.SWAMP]: [44, 81, 33],
      [types_1.Biome.DESERT]: [51, 78, 60],
      [types_1.Biome.ICE]: [198, 78, 77],
      [types_1.Biome.WASTELAND]: [0, 0, 18],
      [types_1.Biome.LAVA]: [19, 100, 50],
      [types_1.Biome.CORRUPTED]: [100, 80, 54]
    };
    var oceanByBiome = {
      [types_1.Biome.UNKNOWN]: [0, 0, 0],
      [types_1.Biome.OCEAN]: [213, 89, 35],
      [types_1.Biome.FOREST]: [193, 96, 43],
      [types_1.Biome.GRASSLAND]: [185, 78, 70],
      [types_1.Biome.TUNDRA]: [201, 95, 70],
      [types_1.Biome.SWAMP]: [285, 81, 33],
      [types_1.Biome.DESERT]: [27, 78, 60],
      [types_1.Biome.ICE]: [198, 90, 85],
      [types_1.Biome.WASTELAND]: [0, 98, 42],
      [types_1.Biome.LAVA]: [12, 92, 39],
      [types_1.Biome.CORRUPTED]: [128, 90, 63]
    };
    var strByBiome = new Map();
    function getBiomeRgbStr(biome) {
      if (biome === types_1.Biome.WASTELAND)
        return "#888";
      const s = strByBiome.get(biome);
      if (s)
        return s;
      const str = rgbStr(hslToRgb(baseByBiome[biome]));
      strByBiome.set(biome, str);
      return str;
    }
    exports.getBiomeRgbStr = getBiomeRgbStr;
    exports.grayColors = {
      baseHue: 0,
      baseStr: "#888",
      bgStr: "#888",
      baseColor: [120, 120, 120],
      baseColor2: [120, 120, 120],
      baseColor3: [120, 120, 120],
      mtnColor: [120, 120, 120],
      mtnColor2: [120, 120, 120],
      mtnColor3: [120, 120, 120],
      backgroundColor: [120, 120, 120],
      previewColor: [120, 120, 120],
      landRgb: [0, 0, 0],
      oceanRgb: [0, 0, 0],
      beachRgb: [0, 0, 0],
      asteroidHsl: [0, 0, 0],
      seed: 0,
      spacetime1: [0, 0, 0],
      spacetime2: [0, 0, 0],
      spacetime3: [0, 0, 0],
      ruins: void 0,
      hatType: types_1.HatType.GraduationCap
    };
    var namesById = new Map();
    var taglinesById = new Map();
    var huesByHash = new Map();
    var rgbsByHash = new Map();
    function hatTypeFromHash(hash) {
      const rand = planetRandomInt(hash);
      if (rand() % 69 === 0)
        return types_1.HatType.Fish;
      if (rand() % 16 === 0)
        return types_1.HatType.SantaHat;
      const mod = rand() % 8;
      switch (mod) {
        case 0:
          return types_1.HatType.GraduationCap;
        case 1:
          return types_1.HatType.PartyHat;
        case 2:
          return types_1.HatType.Squid;
        case 3:
          return types_1.HatType.TopHat;
        case 4:
          return types_1.HatType.Fez;
        case 5:
          return types_1.HatType.ChefHat;
        case 6:
          return types_1.HatType.CowboyHat;
        case 7:
          return types_1.HatType.PopeHat;
        default:
          return types_1.HatType.GraduationCap;
      }
    }
    exports.hatTypeFromHash = hatTypeFromHash;
    function hslStr(h, s, l) {
      return `hsl(${h % 360},${s}%,${l}%)`;
    }
    exports.hslStr = hslStr;
    function rgbStr(rgb) {
      const [r, g, b] = rgb;
      return `rgb(${r}, ${g}, ${b})`;
    }
    exports.rgbStr = rgbStr;
    function hslToRgb([h, s, l]) {
      s = Math.max(Math.min(s, 100), 0);
      l = Math.max(Math.min(l, 100), 0);
      s /= 100;
      l /= 100;
      const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = l - c / 2;
      let r = 0, g = 0, b = 0;
      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      return [r, g, b];
    }
    exports.hslToRgb = hslToRgb;
    function hashToHue(hash) {
      if (huesByHash.has(hash)) {
        return huesByHash.get(hash) || 0;
      }
      const baseHue = (0, serde_1.hashToInt)(hash) % 360;
      huesByHash.set(hash, baseHue);
      return baseHue;
    }
    exports.hashToHue = hashToHue;
    function getPlayerColor(player) {
      return hslStr(hashToHue(player.slice(2)), 100, 70);
    }
    exports.getPlayerColor = getPlayerColor;
    function getPlayerColorVec(player) {
      if (!rgbsByHash.has(player)) {
        const noAlpha = hslToRgb([hashToHue(player.slice(2)), 100, 70]);
        const withAlpha = [...noAlpha, 1];
        rgbsByHash.set(player, withAlpha);
      }
      return rgbsByHash.get(player);
    }
    exports.getPlayerColorVec = getPlayerColorVec;
    function getOwnerColorVec(planet) {
      if (planet.owner === constants_1.EMPTY_ADDRESS)
        return [153, 153, 102, 255];
      return getPlayerColorVec(planet.owner);
    }
    exports.getOwnerColorVec = getOwnerColorVec;
    function getOwnerColor(planet) {
      if (planet.owner === constants_1.EMPTY_ADDRESS)
        return "#996666";
      return getPlayerColor(planet.owner);
    }
    exports.getOwnerColor = getOwnerColor;
    function getPlanetClass(planet) {
      const upgrade = planet.upgradeState;
      let maxIdx = 0;
      let maxVal = -1;
      for (let i = 0; i < upgrade.length; i++) {
        if (upgrade[i] > maxVal) {
          maxIdx = i;
          maxVal = upgrade[i];
        }
      }
      return maxIdx;
    }
    exports.getPlanetClass = getPlanetClass;
    function planetPerlin(loc) {
      const realHash = loc.substring(4, loc.length);
      const noise = Noise_1.default.getInstance();
      const offset = parseInt("0x" + realHash.substring(0, 10));
      const t = (num) => num / 100 + offset;
      return (coords) => {
        const ret = noise.simplex2(t(coords.x), t(coords.y));
        return ret;
      };
    }
    exports.planetPerlin = planetPerlin;
    function planetRandom(loc) {
      const realHash = loc.substring(4, loc.length);
      let count = 0;
      const countOffset = parseInt("0x" + realHash.substring(0, 10));
      return () => {
        count++;
        const ret = (0, hashing_1.seededRandom)(count + countOffset);
        return ret;
      };
    }
    exports.planetRandom = planetRandom;
    function planetRandomInt(loc) {
      const rand = planetRandom(loc);
      return () => Math.floor(rand() * 2 ** 24);
    }
    exports.planetRandomInt = planetRandomInt;
    function artifactRandom(loc) {
      const realHash = loc.substring(4, loc.length);
      let count = 0;
      const countOffset = parseInt("0x" + realHash.substring(0, 10));
      return () => {
        count++;
        const ret = (0, hashing_1.seededRandom)(count + countOffset);
        return ret;
      };
    }
    exports.artifactRandom = artifactRandom;
    function artifactRandomInt(loc) {
      const rand = artifactRandom(loc);
      return () => Math.floor(rand() * 2 ** 24);
    }
    exports.artifactRandomInt = artifactRandomInt;
    function getRuinsInfo(loc) {
      const myInfo = {};
      const rand = planetRandom(loc);
      const randInt = planetRandomInt(loc);
      for (let i = constants_1.MIN_PLANET_LEVEL; i <= constants_1.MAX_PLANET_LEVEL; i++) {
        const blooms = randInt() % 4 + 1;
        const reflect = randInt() % 2;
        const vel = -1 + rand() * 2;
        const w1 = rand();
        const w2 = rand();
        const w3 = rand();
        const w4 = rand();
        const sum = w1 + w2 + w3 + w4;
        myInfo[i] = {
          weights: [w1 / sum, w2 / sum, w3 / sum, w4 / sum],
          props: [blooms, reflect, vel, 0]
        };
      }
      return myInfo;
    }
    exports.getRuinsInfo = getRuinsInfo;
    function getPlanetCosmetic(planet) {
      if (!planet)
        return exports.grayColors;
      if (cosmeticByLocId.has(planet.locationId)) {
        return cosmeticByLocId.get(planet.locationId) || exports.grayColors;
      }
      const baseColor = (0, gamelogic_1.isLocatable)(planet) ? baseByBiome[planet.biome] : [0, 0, 50];
      const oceanColor = (0, gamelogic_1.isLocatable)(planet) ? oceanByBiome[planet.biome] : [0, 0, 20];
      const baseHue = hashToHue(planet.locationId);
      const seed = parseInt("0x" + planet.locationId.substring(0, 9));
      const bL = Math.min(baseColor[2] + 20, 92);
      const baseColor2 = [baseColor[0], baseColor[1], bL - 10];
      const baseColor3 = [baseColor[0], baseColor[1], bL];
      const sL = Math.max(0, baseColor[2] - 30);
      const sS = baseColor[1] - 10;
      const secondaryColor = [baseColor[0], sS, sL];
      const secondaryColor2 = [baseColor[0], sS, sL + 10];
      const secondaryColor3 = [baseColor[0], sS, sL + 20];
      const beachColor = [
        baseColor[0] + 10,
        baseColor[1] - 30,
        Math.min(baseColor[2] + 23, 100)
      ];
      const asteroidHsl = (0, gamelogic_1.isLocatable)(planet) && planet.biome === types_1.Biome.WASTELAND ? [0, 0, 40] : baseColor;
      const spacetime1 = [baseHue, 75, 70];
      const spacetime2 = [baseHue + 15, 70, 55];
      const spacetime3 = [baseHue - 15, 65, 60];
      const colors = {
        baseStr: hslStr(...baseColor),
        bgStr: hslStr(oceanColor[0], Math.min(oceanColor[1] + 30, 100), 80),
        baseHue,
        baseColor: hslToRgb(baseColor),
        baseColor2: hslToRgb(baseColor2),
        baseColor3: hslToRgb(baseColor3),
        mtnColor: hslToRgb(secondaryColor),
        mtnColor2: hslToRgb(secondaryColor2),
        mtnColor3: hslToRgb(secondaryColor3),
        backgroundColor: hslToRgb(oceanColor),
        previewColor: hslToRgb(baseColor),
        landRgb: hslToRgb(baseColor),
        oceanRgb: hslToRgb(oceanColor),
        beachRgb: hslToRgb(beachColor),
        spacetime1: hslToRgb(spacetime1),
        spacetime2: hslToRgb(spacetime2),
        spacetime3: hslToRgb(spacetime3),
        asteroidHsl,
        seed,
        hatType: hatTypeFromHash(planet.locationId),
        ruins: getRuinsInfo(planet.locationId)
      };
      cosmeticByLocId.set(planet.locationId, colors);
      return colors;
    }
    exports.getPlanetCosmetic = getPlanetCosmetic;
    function getPlanetTitle(planet) {
      if (!planet)
        return "Unknown";
      const myRank = (0, gamelogic_1.getPlanetRank)(planet);
      let ret = "Planet";
      if (myRank === 1) {
        ret = "Settlement";
      } else if (myRank === 2) {
        ret = "Colony";
      } else if (myRank === 3) {
        ret = "Spaceport";
      } else if (myRank === 4) {
        ret = "Stronghold";
      } else if (myRank === 5) {
        ret = "Galactic Stronghold";
      }
      return ret;
    }
    exports.getPlanetTitle = getPlanetTitle;
    function getPlanetName2(planet) {
      if (!planet)
        return "Unknown";
      return getPlanetNameHash(planet.locationId);
    }
    exports.getPlanetName = getPlanetName2;
    function getPlanetNameHash(locId) {
      const name2 = namesById.get(locId);
      if (name2)
        return name2;
      let planetName = "";
      const randInt = planetRandomInt(locId);
      if (randInt() % 1024 === 0) {
        planetName = "Clown Town";
      } else {
        const word1 = ProcgenConsts_1.planetNameWords[randInt() % ProcgenConsts_1.planetNameWords.length];
        const word2 = ProcgenConsts_1.planetNameWords[randInt() % ProcgenConsts_1.planetNameWords.length];
        planetName = (0, exports.titleCase)(`${word1} ${word2}`);
      }
      namesById.set(locId, planetName);
      return planetName;
    }
    exports.getPlanetNameHash = getPlanetNameHash;
    function getPlanetTagline(planet) {
      if (!planet)
        return "The empty unknown";
      const tagline = taglinesById.get(planet.locationId);
      if (tagline)
        return tagline;
      let myTagline = "";
      if (getPlanetName2(planet) === "Clown Town") {
        myTagline = `A town of clowns`;
      } else {
        const randInt = planetRandomInt(planet.locationId);
        const adj1 = ProcgenConsts_1.planetTagAdj[randInt() % ProcgenConsts_1.planetTagAdj.length];
        const adj2 = ProcgenConsts_1.planetTagAdj[randInt() % ProcgenConsts_1.planetTagAdj.length];
        const noun = ProcgenConsts_1.planetTagNoun[randInt() % ProcgenConsts_1.planetTagNoun.length];
        myTagline = `A ${adj1}, ${adj2} ${noun}`;
      }
      taglinesById.set(planet.locationId, myTagline);
      return myTagline;
    }
    exports.getPlanetTagline = getPlanetTagline;
    function getPlanetBlurb(planet) {
      if (!planet)
        return "The vast, empty unknown of space contains worlds of infinite possibilities. Select a planet to learn more...";
      const myBlurb = blurbsById.get(planet.locationId);
      if (myBlurb)
        return myBlurb;
      let append = "";
      if (getPlanetName2(planet) === "Clown Town") {
        append = `Founded in 1998 by Brian Gu, who remains the CEO of Clown Town to this day. `;
      }
      tracery_1.default.setRng(planetRandom(planet.locationId));
      const myGrammar = {
        story: [
          `#geography.capitalize# #populates#. The #air# is #descair#. #myflora.capitalize# #bloom# #colors#. #many.capitalize# species of #species# #populate# the #habitat#. #funfact.capitalize#.`
        ],
        origin: ["#[myflora:#flora#]story#"]
      };
      const grammar = tracery_1.default.createGrammar({ ...ProcgenConsts_1.blurbGrammar, ...myGrammar });
      grammar.addModifiers(tracery_modifiers_1.baseEngModifiers);
      const blurb = append + grammar.flatten("#origin#");
      blurbsById.set(planet.locationId, blurb);
      return blurb;
    }
    exports.getPlanetBlurb = getPlanetBlurb;
    function getPlanetBlurb2(planet) {
      if (!planet)
        return "";
      const myBlurb = blurbs2ById.get(planet.locationId);
      if (myBlurb)
        return myBlurb;
      const name2 = getPlanetName2(planet);
      const tagline = getPlanetTagline(planet);
      const myGrammar = {
        story: [
          `The people of ${name2} have #learned# to #live# in a ${tagline}. ${name2}'s #mysun# #sends# an #flock# of #bads# #sometimes#. Over the #years#, they've #removed# the #mysun# by #throwing# #warbears#. In doing so, they've learned that #lesson#.`
        ],
        origin: [`#[mysun:#sun#]story#`]
      };
      tracery_1.default.setRng(planetRandom(planet.locationId));
      const grammar = tracery_1.default.createGrammar({ ...ProcgenConsts_1.blurb2grammar, ...myGrammar });
      grammar.addModifiers(tracery_modifiers_1.baseEngModifiers);
      const blurb = grammar.flatten("#origin#");
      blurbs2ById.set(planet.locationId, blurb);
      return blurb;
    }
    exports.getPlanetBlurb2 = getPlanetBlurb2;
    function getHatSizeName(planet) {
      const maxHat = constants_1.HAT_SIZES.length;
      const lv = planet.hatLevel;
      if (lv < maxHat)
        return constants_1.HAT_SIZES[lv];
      else
        return "H" + "A".repeat(4 * 2 ** (lv - maxHat + 1)) + "T";
    }
    exports.getHatSizeName = getHatSizeName;
  }
});

// node_modules/@darkforest_eth/procedural/dist/index.js
var require_dist7 = __commonJS({
  "node_modules/@darkforest_eth/procedural/dist/index.js"(exports) {
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
    __exportStar(require_ArtifactProcgen(), exports);
    __exportStar(require_ProcgenUtils(), exports);
  }
});

// plugins/SendFromMothership.ts
var import_procedural = __toModule(require_dist7());

// embedded_plugins/views/basics.ts
var Button = (innerHTML, onClick) => {
  let button = document.createElement("button");
  button.style.marginBottom = "10px";
  button.innerHTML = innerHTML;
  button.onclick = onClick;
  return button;
};
var Text = (innerHTML) => {
  let text = document.createElement("p");
  text.innerHTML = innerHTML;
  return text;
};
var LineBreak = () => document.createElement("br");

// plugins/SendFromMothership.ts
var MOTHERSHIP_ID = "000026100002a129b93550ffd73470da9ae9b8db6bd18d5d3a49b53a5d45a01e";
var MOTHERSHIP_CUTOFF = 25;
function getArrivalsForPlanet(planetId) {
  return df.getAllVoyages().filter((arrival) => arrival.toPlanet === planetId).filter((p) => p.arrivalTime > Date.now() / 1e3);
}
function distance(from, to) {
  return Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
}
function getInvaderArrivals(target, invader) {
  const arrivalsForPlanet = getArrivalsForPlanet(target.locationId);
  var invaderArrivals = [];
  if (arrivalsForPlanet) {
    invaderArrivals = arrivalsForPlanet.filter((a) => df.getPlanetWithId(a.fromPlanet)?.owner === invader.owner);
  }
  console.log(`Does ${(0, import_procedural.getPlanetName)(target)} have invader arrivals?`, invaderArrivals);
  return invaderArrivals;
}
var Mommy = class {
  constructor() {
    this.mothershipId = MOTHERSHIP_ID;
    this.crawl = false;
    this.timeLevel = 10;
    this.dry = false;
  }
  crawlMother() {
    if (!this.crawl)
      return;
    const wormholes = df.getWormholes();
    const momId = this.mothershipId;
    var mothership = df.getPlanetWithId(momId);
    this.crawlStatus.innerHTML = `Starting distribution capture from ${(0, import_procedural.getPlanetName)(mothership)}`;
    if (!mothership)
      throw new Error("Mother not found");
    console.log(`Mothership has ${mothership.energy / 1e3}k`);
    if (mothership.energy < mothership.energyCap * 0.75) {
      this.crawlStatus.innerHTML = `Mother ship does't have 75% energy ...`;
      return;
    }
    for (const hole of wormholes) {
      if (hole.to === momId) {
        const holeFrom = df.getPlanetWithId(hole.from);
        if (!holeFrom)
          continue;
        if (getInvaderArrivals(holeFrom, mothership).length > 0) {
          this.crawlStatus.innerHTML = `${(0, import_procedural.getPlanetName)(holeFrom)} has a move on the way, moving on ...`;
          continue;
        }
        ;
        if (holeFrom.energy >= holeFrom.energyCap * 0.9) {
          this.crawlStatus.innerHTML = `${(0, import_procedural.getPlanetName)(holeFrom)} is full or near full moving on ...`;
          continue;
        }
        const energySending = Math.floor(mothership.energy - mothership.energyCap * MOTHERSHIP_CUTOFF / 100);
        const dist = distance(mothership.location.coords, holeFrom.location.coords);
        const energyNeeded = Math.ceil(df.getEnergyArrivingForMove(momId, hole.from, dist, energySending));
        if (energyNeeded <= 0) {
          this.crawlStatus.innerHTML = `Mother ship can't send enough energy to ${(0, import_procedural.getPlanetName)(holeFrom)} ...`;
          continue;
        }
        this.crawlStatus.innerHTML = `moving to ${(0, import_procedural.getPlanetName)(holeFrom)} with ${Math.floor(energySending / 1e3)}k energy`;
        if (!this.dry) {
          df.move(momId, hole.from, energySending, 0);
          return;
        }
      }
    }
  }
  clearSendTimer() {
    console.log("check clear timer");
    clearInterval(this.sendTimer);
    if (this.sendTimer) {
      console.log("clearing interval");
      clearInterval(this.sendTimer);
    }
  }
  async render(container) {
    this.crawlStatus = Text(`Crawl status: `);
    this.startCrawl = Button("Crawl from Mother. Click to start and stop (dont close plugin)", () => {
      this.crawl = true;
      console.log(`Starting crawl...`);
      this.crawlMother();
      this.sendTimer = setInterval(() => {
        this.crawlStatus.innerHTML = `Crawl status: in crawl interval...`;
        this.crawlMother();
      }, 1e3 * this.timeLevel);
      console.log(`setInterval interval`, this.sendTimer);
    });
    this.clearTimer = Button("Stop crawler", () => {
      this.crawlStatus.innerHTML = `Crawl status: not crawling`;
      this.clearSendTimer();
    });
    container.append(this.startCrawl);
    container.append(this.crawlStatus);
    container.append(LineBreak());
    container.append(this.clearTimer);
  }
  destroy() {
    this.clearSendTimer();
  }
};
var SendFromMothership_default = Mommy;
export {
  SendFromMothership_default as default
};
/**
 * @license Fraction.js v4.0.12 09/09/2015
 * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/