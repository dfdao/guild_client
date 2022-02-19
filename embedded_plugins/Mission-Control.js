var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "node_modules/big-integer/BigInteger.js"(exports, module) {
    var bigInt = function(undefined2) {
      "use strict";
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v3, radix, alphabet, caseSensitive) {
        if (typeof v3 === "undefined")
          return Integer[0];
        if (typeof radix !== "undefined")
          return +radix === 10 && !alphabet ? parseValue(v3) : parseBase(v3, radix, alphabet, caseSensitive);
        return parseValue(v3);
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
      function isPrecise(n2) {
        return -MAX_INT < n2 && n2 < MAX_INT;
      }
      function smallToArray(n2) {
        if (n2 < 1e7)
          return [n2];
        if (n2 < 1e14)
          return [n2 % 1e7, Math.floor(n2 / 1e7)];
        return [n2 % 1e7, Math.floor(n2 / 1e7) % 1e7, Math.floor(n2 / 1e14)];
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
      function trim(v3) {
        var i4 = v3.length;
        while (v3[--i4] === 0)
          ;
        v3.length = i4 + 1;
      }
      function createArray(length) {
        var x3 = new Array(length);
        var i4 = -1;
        while (++i4 < length) {
          x3[i4] = 0;
        }
        return x3;
      }
      function truncate(n2) {
        if (n2 > 0)
          return Math.floor(n2);
        return Math.ceil(n2);
      }
      function add(a3, b3) {
        var l_a = a3.length, l_b = b3.length, r3 = new Array(l_a), carry = 0, base = BASE, sum, i4;
        for (i4 = 0; i4 < l_b; i4++) {
          sum = a3[i4] + b3[i4] + carry;
          carry = sum >= base ? 1 : 0;
          r3[i4] = sum - carry * base;
        }
        while (i4 < l_a) {
          sum = a3[i4] + carry;
          carry = sum === base ? 1 : 0;
          r3[i4++] = sum - carry * base;
        }
        if (carry > 0)
          r3.push(carry);
        return r3;
      }
      function addAny(a3, b3) {
        if (a3.length >= b3.length)
          return add(a3, b3);
        return add(b3, a3);
      }
      function addSmall(a3, carry) {
        var l3 = a3.length, r3 = new Array(l3), base = BASE, sum, i4;
        for (i4 = 0; i4 < l3; i4++) {
          sum = a3[i4] - base + carry;
          carry = Math.floor(sum / base);
          r3[i4] = sum - carry * base;
          carry += 1;
        }
        while (carry > 0) {
          r3[i4++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r3;
      }
      BigInteger.prototype.add = function(v3) {
        var n2 = parseValue(v3);
        if (this.sign !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var a3 = this.value, b3 = n2.value;
        if (n2.isSmall) {
          return new BigInteger(addSmall(a3, Math.abs(b3)), this.sign);
        }
        return new BigInteger(addAny(a3, b3), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;
      SmallInteger.prototype.add = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value;
        if (a3 < 0 !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var b3 = n2.value;
        if (n2.isSmall) {
          if (isPrecise(a3 + b3))
            return new SmallInteger(a3 + b3);
          b3 = smallToArray(Math.abs(b3));
        }
        return new BigInteger(addSmall(b3, Math.abs(a3)), a3 < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v3) {
        return new NativeBigInt(this.value + parseValue(v3).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a3, b3) {
        var a_l = a3.length, b_l = b3.length, r3 = new Array(a_l), borrow = 0, base = BASE, i4, difference;
        for (i4 = 0; i4 < b_l; i4++) {
          difference = a3[i4] - borrow - b3[i4];
          if (difference < 0) {
            difference += base;
            borrow = 1;
          } else
            borrow = 0;
          r3[i4] = difference;
        }
        for (i4 = b_l; i4 < a_l; i4++) {
          difference = a3[i4] - borrow;
          if (difference < 0)
            difference += base;
          else {
            r3[i4++] = difference;
            break;
          }
          r3[i4] = difference;
        }
        for (; i4 < a_l; i4++) {
          r3[i4] = a3[i4];
        }
        trim(r3);
        return r3;
      }
      function subtractAny(a3, b3, sign) {
        var value;
        if (compareAbs(a3, b3) >= 0) {
          value = subtract(a3, b3);
        } else {
          value = subtract(b3, a3);
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
      function subtractSmall(a3, b3, sign) {
        var l3 = a3.length, r3 = new Array(l3), carry = -b3, base = BASE, i4, difference;
        for (i4 = 0; i4 < l3; i4++) {
          difference = a3[i4] + carry;
          carry = Math.floor(difference / base);
          difference %= base;
          r3[i4] = difference < 0 ? difference + base : difference;
        }
        r3 = arrayToSmall(r3);
        if (typeof r3 === "number") {
          if (sign)
            r3 = -r3;
          return new SmallInteger(r3);
        }
        return new BigInteger(r3, sign);
      }
      BigInteger.prototype.subtract = function(v3) {
        var n2 = parseValue(v3);
        if (this.sign !== n2.sign) {
          return this.add(n2.negate());
        }
        var a3 = this.value, b3 = n2.value;
        if (n2.isSmall)
          return subtractSmall(a3, Math.abs(b3), this.sign);
        return subtractAny(a3, b3, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;
      SmallInteger.prototype.subtract = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value;
        if (a3 < 0 !== n2.sign) {
          return this.add(n2.negate());
        }
        var b3 = n2.value;
        if (n2.isSmall) {
          return new SmallInteger(a3 - b3);
        }
        return subtractSmall(b3, Math.abs(a3), a3 >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v3) {
        return new NativeBigInt(this.value - parseValue(v3).value);
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
      function multiplyLong(a3, b3) {
        var a_l = a3.length, b_l = b3.length, l3 = a_l + b_l, r3 = createArray(l3), base = BASE, product, carry, i4, a_i, b_j;
        for (i4 = 0; i4 < a_l; ++i4) {
          a_i = a3[i4];
          for (var j3 = 0; j3 < b_l; ++j3) {
            b_j = b3[j3];
            product = a_i * b_j + r3[i4 + j3];
            carry = Math.floor(product / base);
            r3[i4 + j3] = product - carry * base;
            r3[i4 + j3 + 1] += carry;
          }
        }
        trim(r3);
        return r3;
      }
      function multiplySmall(a3, b3) {
        var l3 = a3.length, r3 = new Array(l3), base = BASE, carry = 0, product, i4;
        for (i4 = 0; i4 < l3; i4++) {
          product = a3[i4] * b3 + carry;
          carry = Math.floor(product / base);
          r3[i4] = product - carry * base;
        }
        while (carry > 0) {
          r3[i4++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r3;
      }
      function shiftLeft(x3, n2) {
        var r3 = [];
        while (n2-- > 0)
          r3.push(0);
        return r3.concat(x3);
      }
      function multiplyKaratsuba(x3, y3) {
        var n2 = Math.max(x3.length, y3.length);
        if (n2 <= 30)
          return multiplyLong(x3, y3);
        n2 = Math.ceil(n2 / 2);
        var b3 = x3.slice(n2), a3 = x3.slice(0, n2), d3 = y3.slice(n2), c3 = y3.slice(0, n2);
        var ac = multiplyKaratsuba(a3, c3), bd = multiplyKaratsuba(b3, d3), abcd = multiplyKaratsuba(addAny(a3, b3), addAny(c3, d3));
        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n2)), shiftLeft(bd, 2 * n2));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l22) {
        return -0.012 * l1 - 0.012 * l22 + 15e-6 * l1 * l22 > 0;
      }
      BigInteger.prototype.multiply = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value, sign = this.sign !== n2.sign, abs;
        if (n2.isSmall) {
          if (b3 === 0)
            return Integer[0];
          if (b3 === 1)
            return this;
          if (b3 === -1)
            return this.negate();
          abs = Math.abs(b3);
          if (abs < BASE) {
            return new BigInteger(multiplySmall(a3, abs), sign);
          }
          b3 = smallToArray(abs);
        }
        if (useKaratsuba(a3.length, b3.length))
          return new BigInteger(multiplyKaratsuba(a3, b3), sign);
        return new BigInteger(multiplyLong(a3, b3), sign);
      };
      BigInteger.prototype.times = BigInteger.prototype.multiply;
      function multiplySmallAndArray(a3, b3, sign) {
        if (a3 < BASE) {
          return new BigInteger(multiplySmall(b3, a3), sign);
        }
        return new BigInteger(multiplyLong(b3, smallToArray(a3)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function(a3) {
        if (isPrecise(a3.value * this.value)) {
          return new SmallInteger(a3.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a3.value), smallToArray(Math.abs(this.value)), this.sign !== a3.sign);
      };
      BigInteger.prototype._multiplyBySmall = function(a3) {
        if (a3.value === 0)
          return Integer[0];
        if (a3.value === 1)
          return this;
        if (a3.value === -1)
          return this.negate();
        return multiplySmallAndArray(Math.abs(a3.value), this.value, this.sign !== a3.sign);
      };
      SmallInteger.prototype.multiply = function(v3) {
        return parseValue(v3)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v3) {
        return new NativeBigInt(this.value * parseValue(v3).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a3) {
        var l3 = a3.length, r3 = createArray(l3 + l3), base = BASE, product, carry, i4, a_i, a_j;
        for (i4 = 0; i4 < l3; i4++) {
          a_i = a3[i4];
          carry = 0 - a_i * a_i;
          for (var j3 = i4; j3 < l3; j3++) {
            a_j = a3[j3];
            product = 2 * (a_i * a_j) + r3[i4 + j3] + carry;
            carry = Math.floor(product / base);
            r3[i4 + j3] = product - carry * base;
          }
          r3[i4 + l3] = carry;
        }
        trim(r3);
        return r3;
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
      NativeBigInt.prototype.square = function(v3) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a3, b3) {
        var a_l = a3.length, b_l = b3.length, base = BASE, result = createArray(b3.length), divisorMostSignificantDigit = b3[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a3, lambda), divisor = multiplySmall(b3, lambda), quotientDigit, shift, carry, borrow, i4, l3, q;
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
          l3 = divisor.length;
          for (i4 = 0; i4 < l3; i4++) {
            carry += quotientDigit * divisor[i4];
            q = Math.floor(carry / base);
            borrow += remainder[shift + i4] - (carry - q * base);
            carry = q;
            if (borrow < 0) {
              remainder[shift + i4] = borrow + base;
              borrow = -1;
            } else {
              remainder[shift + i4] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i4 = 0; i4 < l3; i4++) {
              carry += remainder[shift + i4] - base + divisor[i4];
              if (carry < 0) {
                remainder[shift + i4] = carry + base;
                carry = 0;
              } else {
                remainder[shift + i4] = carry;
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
      function divMod2(a3, b3) {
        var a_l = a3.length, b_l = b3.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a3[--a_l]);
          trim(part);
          if (compareAbs(part, b3) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base + part[xlen - 2];
          highy = b3[b_l - 1] * base + b3[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b3, guess);
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
        var length = value.length, quotient = createArray(length), base = BASE, i4, q, remainder, divisor;
        remainder = 0;
        for (i4 = length - 1; i4 >= 0; --i4) {
          divisor = remainder * base + value[i4];
          q = truncate(divisor / lambda);
          remainder = divisor - q * lambda;
          quotient[i4] = q | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self, v3) {
        var value, n2 = parseValue(v3);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self.value / n2.value), new NativeBigInt(self.value % n2.value)];
        }
        var a3 = self.value, b3 = n2.value;
        var quotient;
        if (b3 === 0)
          throw new Error("Cannot divide by zero");
        if (self.isSmall) {
          if (n2.isSmall) {
            return [new SmallInteger(truncate(a3 / b3)), new SmallInteger(a3 % b3)];
          }
          return [Integer[0], self];
        }
        if (n2.isSmall) {
          if (b3 === 1)
            return [self, Integer[0]];
          if (b3 == -1)
            return [self.negate(), Integer[0]];
          var abs = Math.abs(b3);
          if (abs < BASE) {
            value = divModSmall(a3, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self.sign)
              remainder = -remainder;
            if (typeof quotient === "number") {
              if (self.sign !== n2.sign)
                quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self.sign !== n2.sign), new SmallInteger(remainder)];
          }
          b3 = smallToArray(abs);
        }
        var comparison = compareAbs(a3, b3);
        if (comparison === -1)
          return [Integer[0], self];
        if (comparison === 0)
          return [Integer[self.sign === n2.sign ? 1 : -1], Integer[0]];
        if (a3.length + b3.length <= 200)
          value = divMod1(a3, b3);
        else
          value = divMod2(a3, b3);
        quotient = value[0];
        var qSign = self.sign !== n2.sign, mod = value[1], mSign = self.sign;
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
      BigInteger.prototype.divmod = function(v3) {
        var result = divModAny(this, v3);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
      BigInteger.prototype.divide = function(v3) {
        return divModAny(this, v3)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v3) {
        return new NativeBigInt(this.value / parseValue(v3).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
      BigInteger.prototype.mod = function(v3) {
        return divModAny(this, v3)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v3) {
        return new NativeBigInt(this.value % parseValue(v3).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
      BigInteger.prototype.pow = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value, value, x3, y3;
        if (b3 === 0)
          return Integer[1];
        if (a3 === 0)
          return Integer[0];
        if (a3 === 1)
          return Integer[1];
        if (a3 === -1)
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.sign) {
          return Integer[0];
        }
        if (!n2.isSmall)
          throw new Error("The exponent " + n2.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a3, b3)))
            return new SmallInteger(truncate(value));
        }
        x3 = this;
        y3 = Integer[1];
        while (true) {
          if (b3 & true) {
            y3 = y3.times(x3);
            --b3;
          }
          if (b3 === 0)
            break;
          b3 /= 2;
          x3 = x3.square();
        }
        return y3;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;
      NativeBigInt.prototype.pow = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value, b3 = n2.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b3 === _0)
          return Integer[1];
        if (a3 === _0)
          return Integer[0];
        if (a3 === _1)
          return Integer[1];
        if (a3 === BigInt(-1))
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.isNegative())
          return new NativeBigInt(_0);
        var x3 = this;
        var y3 = Integer[1];
        while (true) {
          if ((b3 & _1) === _1) {
            y3 = y3.times(x3);
            --b3;
          }
          if (b3 === _0)
            break;
          b3 /= _2;
          x3 = x3.square();
        }
        return y3;
      };
      BigInteger.prototype.modPow = function(exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero())
          throw new Error("Cannot take modPow with modulus 0");
        var r3 = Integer[1], base = this.mod(mod);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base = base.modInv(mod);
        }
        while (exp.isPositive()) {
          if (base.isZero())
            return Integer[0];
          if (exp.isOdd())
            r3 = r3.multiply(base).mod(mod);
          exp = exp.divide(2);
          base = base.square().mod(mod);
        }
        return r3;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
      function compareAbs(a3, b3) {
        if (a3.length !== b3.length) {
          return a3.length > b3.length ? 1 : -1;
        }
        for (var i4 = a3.length - 1; i4 >= 0; i4--) {
          if (a3[i4] !== b3[i4])
            return a3[i4] > b3[i4] ? 1 : -1;
        }
        return 0;
      }
      BigInteger.prototype.compareAbs = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (n2.isSmall)
          return 1;
        return compareAbs(a3, b3);
      };
      SmallInteger.prototype.compareAbs = function(v3) {
        var n2 = parseValue(v3), a3 = Math.abs(this.value), b3 = n2.value;
        if (n2.isSmall) {
          b3 = Math.abs(b3);
          return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v3) {
        var a3 = this.value;
        var b3 = parseValue(v3).value;
        a3 = a3 >= 0 ? a3 : -a3;
        b3 = b3 >= 0 ? b3 : -b3;
        return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
      };
      BigInteger.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (this.sign !== n2.sign) {
          return n2.sign ? 1 : -1;
        }
        if (n2.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a3, b3) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;
      SmallInteger.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (n2.isSmall) {
          return a3 == b3 ? 0 : a3 > b3 ? 1 : -1;
        }
        if (a3 < 0 !== n2.sign) {
          return a3 < 0 ? -1 : 1;
        }
        return a3 < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var a3 = this.value;
        var b3 = parseValue(v3).value;
        return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger.prototype.equals = function(v3) {
        return this.compare(v3) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
      BigInteger.prototype.notEquals = function(v3) {
        return this.compare(v3) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
      BigInteger.prototype.greater = function(v3) {
        return this.compare(v3) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
      BigInteger.prototype.lesser = function(v3) {
        return this.compare(v3) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
      BigInteger.prototype.greaterOrEquals = function(v3) {
        return this.compare(v3) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
      BigInteger.prototype.lesserOrEquals = function(v3) {
        return this.compare(v3) <= 0;
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
      BigInteger.prototype.isDivisibleBy = function(v3) {
        var n2 = parseValue(v3);
        if (n2.isZero())
          return false;
        if (n2.isUnit())
          return true;
        if (n2.compareAbs(2) === 0)
          return this.isEven();
        return this.mod(n2).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
      function isBasicPrime(v3) {
        var n2 = v3.abs();
        if (n2.isUnit())
          return false;
        if (n2.equals(2) || n2.equals(3) || n2.equals(5))
          return true;
        if (n2.isEven() || n2.isDivisibleBy(3) || n2.isDivisibleBy(5))
          return false;
        if (n2.lesser(49))
          return true;
      }
      function millerRabinTest(n2, a3) {
        var nPrev = n2.prev(), b3 = nPrev, r3 = 0, d3, t3, i4, x3;
        while (b3.isEven())
          b3 = b3.divide(2), r3++;
        next:
          for (i4 = 0; i4 < a3.length; i4++) {
            if (n2.lesser(a3[i4]))
              continue;
            x3 = bigInt(a3[i4]).modPow(b3, n2);
            if (x3.isUnit() || x3.equals(nPrev))
              continue;
            for (d3 = r3 - 1; d3 != 0; d3--) {
              x3 = x3.square().mod(n2);
              if (x3.isUnit())
                return false;
              if (x3.equals(nPrev))
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
        var n2 = this.abs();
        var bits = n2.bitLength();
        if (bits <= 64)
          return millerRabinTest(n2, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t3 = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a3 = [], i4 = 0; i4 < t3; i4++) {
          a3.push(bigInt(i4 + 2));
        }
        return millerRabinTest(n2, a3);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
      BigInteger.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2)
          return isPrime;
        var n2 = this.abs();
        var t3 = iterations === undefined2 ? 5 : iterations;
        for (var a3 = [], i4 = 0; i4 < t3; i4++) {
          a3.push(bigInt.randBetween(2, n2.minus(2), rng));
        }
        return millerRabinTest(n2, a3);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
      BigInteger.prototype.modInv = function(n2) {
        var t3 = bigInt.zero, newT = bigInt.one, r3 = parseValue(n2), newR = this.abs(), q, lastT, lastR;
        while (!newR.isZero()) {
          q = r3.divide(newR);
          lastT = t3;
          lastR = r3;
          t3 = newT;
          r3 = newR;
          newT = lastT.subtract(q.multiply(newT));
          newR = lastR.subtract(q.multiply(newR));
        }
        if (!r3.isUnit())
          throw new Error(this.toString() + " and " + n2.toString() + " are not co-prime");
        if (t3.compare(0) === -1) {
          t3 = t3.add(n2);
        }
        if (this.isNegative()) {
          return t3.negate();
        }
        return t3;
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
      function shift_isSmall(n2) {
        return Math.abs(n2) <= BASE;
      }
      BigInteger.prototype.shiftLeft = function(v3) {
        var n2 = parseValue(v3).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftRight(-n2);
        var result = this;
        if (result.isZero())
          return result;
        while (n2 >= powers2Length) {
          result = result.multiply(highestPower2);
          n2 -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n2]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
      BigInteger.prototype.shiftRight = function(v3) {
        var remQuo;
        var n2 = parseValue(v3).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftLeft(-n2);
        var result = this;
        while (n2 >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit())
            return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n2 -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n2]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
      function bitwise(x3, y3, fn) {
        y3 = parseValue(y3);
        var xSign = x3.isNegative(), ySign = y3.isNegative();
        var xRem = xSign ? x3.not() : x3, yRem = ySign ? y3.not() : y3;
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
        for (var i4 = result.length - 1; i4 >= 0; i4 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt(result[i4]));
        }
        return sum;
      }
      BigInteger.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
      BigInteger.prototype.and = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 & b3;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
      BigInteger.prototype.or = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 | b3;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
      BigInteger.prototype.xor = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 ^ b3;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n2) {
        var v3 = n2.value, x3 = typeof v3 === "number" ? v3 | LOBMASK_I : typeof v3 === "bigint" ? v3 | BigInt(LOBMASK_I) : v3[0] + v3[1] * BASE | LOBMASK_BI;
        return x3 & -x3;
      }
      function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base.square(base));
          var p2 = tmp.p;
          var e3 = tmp.e;
          var t3 = p2.multiply(base);
          return t3.compareTo(value) <= 0 ? { p: t3, e: e3 * 2 + 1 } : { p: p2, e: e3 * 2 };
        }
        return { p: bigInt(1), e: 0 };
      }
      BigInteger.prototype.bitLength = function() {
        var n2 = this;
        if (n2.compareTo(bigInt(0)) < 0) {
          n2 = n2.negate().subtract(bigInt(1));
        }
        if (n2.compareTo(bigInt(0)) === 0) {
          return bigInt(0);
        }
        return bigInt(integerLogarithm(n2, bigInt(2)).e).add(bigInt(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
      function max(a3, b3) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        return a3.greater(b3) ? a3 : b3;
      }
      function min(a3, b3) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        return a3.lesser(b3) ? a3 : b3;
      }
      function gcd2(a3, b3) {
        a3 = parseValue(a3).abs();
        b3 = parseValue(b3).abs();
        if (a3.equals(b3))
          return a3;
        if (a3.isZero())
          return b3;
        if (b3.isZero())
          return a3;
        var c3 = Integer[1], d3, t3;
        while (a3.isEven() && b3.isEven()) {
          d3 = min(roughLOB(a3), roughLOB(b3));
          a3 = a3.divide(d3);
          b3 = b3.divide(d3);
          c3 = c3.multiply(d3);
        }
        while (a3.isEven()) {
          a3 = a3.divide(roughLOB(a3));
        }
        do {
          while (b3.isEven()) {
            b3 = b3.divide(roughLOB(b3));
          }
          if (a3.greater(b3)) {
            t3 = b3;
            b3 = a3;
            a3 = t3;
          }
          b3 = b3.subtract(a3);
        } while (!b3.isZero());
        return c3.isUnit() ? a3 : a3.multiply(c3);
      }
      function lcm(a3, b3) {
        a3 = parseValue(a3).abs();
        b3 = parseValue(b3).abs();
        return a3.divide(gcd2(a3, b3)).multiply(b3);
      }
      function randBetween(a3, b3, rng) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        var usedRNG = rng || Math.random;
        var low = min(a3, b3), high = max(a3, b3);
        var range = high.subtract(low).add(1);
        if (range.isSmall)
          return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i4 = 0; i4 < digits.length; i4++) {
          var top = restricted ? digits[i4] + (i4 + 1 < digits.length ? digits[i4 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i4])
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
        var i4;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i4 = 0; i4 < alphabet.length; i4++) {
          alphabetValues[alphabet[i4]] = i4;
        }
        for (i4 = 0; i4 < length; i4++) {
          var c3 = text[i4];
          if (c3 === "-")
            continue;
          if (c3 in alphabetValues) {
            if (alphabetValues[c3] >= absBase) {
              if (c3 === "1" && absBase === 1)
                continue;
              throw new Error(c3 + " is not a valid digit in base " + base + ".");
            }
          }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i4 = isNegative ? 1 : 0; i4 < text.length; i4++) {
          var c3 = text[i4];
          if (c3 in alphabetValues)
            digits.push(parseValue(alphabetValues[c3]));
          else if (c3 === "<") {
            var start = i4;
            do {
              i4++;
            } while (text[i4] !== ">" && i4 < text.length);
            digits.push(parseValue(text.slice(start + 1, i4)));
          } else
            throw new Error(c3 + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
      };
      function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i4;
        for (i4 = digits.length - 1; i4 >= 0; i4--) {
          val = val.add(digits[i4].times(pow));
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
      function toBase(n2, base) {
        base = bigInt(base);
        if (base.isZero()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          if (n2.isNegative())
            return {
              value: [].concat.apply([], Array.apply(null, Array(-n2.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n2.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n2.isNegative() && base.isPositive()) {
          neg = true;
          n2 = n2.abs();
        }
        if (base.isUnit()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n2.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n2, divmod;
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
      function toBaseString(n2, base, alphabet) {
        var arr = toBase(n2, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x3) {
          return stringify(x3, alphabet);
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
        var v3 = this.value, l3 = v3.length, str = String(v3[--l3]), zeros = "0000000", digit;
        while (--l3 >= 0) {
          digit = String(v3[l3]);
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
      function parseStringValue(v3) {
        if (isPrecise(+v3)) {
          var x3 = +v3;
          if (x3 === truncate(x3))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x3)) : new SmallInteger(x3);
          throw new Error("Invalid integer: " + v3);
        }
        var sign = v3[0] === "-";
        if (sign)
          v3 = v3.slice(1);
        var split = v3.split(/e/i);
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
          v3 = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v3);
        if (!isValid)
          throw new Error("Invalid integer: " + v3);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign ? "-" + v3 : v3));
        }
        var r3 = [], max2 = v3.length, l3 = LOG_BASE, min2 = max2 - l3;
        while (max2 > 0) {
          r3.push(+v3.slice(min2, max2));
          min2 -= l3;
          if (min2 < 0)
            min2 = 0;
          max2 -= l3;
        }
        trim(r3);
        return new BigInteger(r3, sign);
      }
      function parseNumberValue(v3) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v3));
        }
        if (isPrecise(v3)) {
          if (v3 !== truncate(v3))
            throw new Error(v3 + " is not an integer.");
          return new SmallInteger(v3);
        }
        return parseStringValue(v3.toString());
      }
      function parseValue(v3) {
        if (typeof v3 === "number") {
          return parseNumberValue(v3);
        }
        if (typeof v3 === "string") {
          return parseStringValue(v3);
        }
        if (typeof v3 === "bigint") {
          return new NativeBigInt(v3);
        }
        return v3;
      }
      for (var i3 = 0; i3 < 1e3; i3++) {
        Integer[i3] = parseValue(i3);
        if (i3 > 0)
          Integer[-i3] = parseValue(-i3);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd2;
      Integer.lcm = lcm;
      Integer.isInstance = function(x3) {
        return x3 instanceof BigInteger || x3 instanceof SmallInteger || x3 instanceof NativeBigInt;
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
      const x3 = Math.sin(seed) * 1e4;
      return x3 - Math.floor(x3);
    }
    exports.seededRandom = seededRandom;
    var SIZE = 65536;
    var globalSeed = 1;
    var globalRandom = () => {
      return seededRandom(globalSeed++);
    };
    var arr = [];
    for (let i3 = 0; i3 < SIZE; i3 += 1) {
      arr.push({
        idx: i3,
        rand: globalRandom()
      });
    }
    arr.sort((a3, b3) => a3.rand - b3.rand);
    var lookup = arr.map((a3) => a3.idx);
    var lookupInv = Array(SIZE).fill(0);
    for (let i3 = 0; i3 < SIZE; i3 += 1) {
      lookupInv[lookup[i3]] = i3;
    }
    var posMod = (m3, n2) => {
      const val = Math.floor(m3 / n2) * n2;
      return m3 - val;
    };
    var sigma = (x3, y3) => {
      const val = 256 * x3 + y3;
      const idx = posMod(val, SIZE);
      const ret = [Math.floor(lookup[idx] / 256), lookup[idx] % 256];
      return ret;
    };
    var cyc = (m3, n2) => (r3, s2) => {
      const val = posMod(256 * (r3 + m3) + (s2 + n2), SIZE);
      const ret = [Math.floor(val / 256), val % 256];
      return ret;
    };
    var fakeHash = (x3, y3) => {
      const m3 = Math.floor(x3 / 256);
      const r3 = x3 - m3 * 256;
      const n2 = Math.floor(y3 / 256);
      const s2 = y3 - n2 * 256;
      const [mPrime, nPrime] = sigma(m3, n2);
      const [xPrime, yPrime] = sigma(...cyc(mPrime, nPrime)(...sigma(r3, s2)));
      const validPlanet = xPrime === 0 && yPrime < 4;
      let hash = validPlanet ? "00000000" : "1eadbeef";
      const seed = 8 * (1e7 * x3 + y3);
      for (let i3 = 0; i3 < 7; i3 += 1) {
        const rand = Math.floor(seededRandom(seed + i3) * 2 ** 32);
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
          BigInt = function(n2) {
            return n2;
          };
        const C_ONE = BigInt(1);
        const C_ZERO2 = BigInt(0);
        const C_TEN = BigInt(10);
        const C_TWO = BigInt(2);
        const C_FIVE = BigInt(5);
        const MAX_CYCLE_LEN = BigInt(2e3);
        const P3 = {
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
        function assign(n2, s2) {
          try {
            n2 = BigInt(n2);
          } catch (e3) {
            throw new InvalidParameter();
          }
          return n2 * s2;
        }
        const parse2 = function(p1, p2) {
          let n2 = C_ZERO2, d3 = C_ONE, s2 = C_ONE;
          if (p1 === void 0 || p1 === null) {
          } else if (p2 !== void 0) {
            n2 = BigInt(p1);
            d3 = BigInt(p2);
            s2 = n2 * d3;
          } else if (typeof p1 === "object") {
            if ("d" in p1 && "n" in p1) {
              n2 = BigInt(p1["n"]);
              d3 = BigInt(p1["d"]);
              if ("s" in p1)
                n2 *= BigInt(p1["s"]);
            } else if (0 in p1) {
              n2 = BigInt(p1[0]);
              if (1 in p1)
                d3 = BigInt(p1[1]);
            } else if (p1 instanceof BigInt) {
              n2 = BigInt(p1);
            } else {
              throw new InvalidParameter();
            }
            s2 = n2 * d3;
          } else if (typeof p1 === "number") {
            if (isNaN(p1)) {
              throw new InvalidParameter();
            }
            if (p1 < 0) {
              s2 = -C_ONE;
              p1 = -p1;
            }
            if (p1 % 1 === 0) {
              n2 = BigInt(p1);
            } else if (p1 > 0) {
              let z2 = 1;
              let A2 = 0, B = 1;
              let C2 = 1, D = 1;
              let N2 = 1e7;
              if (p1 >= 1) {
                z2 = 10 ** Math.floor(1 + Math.log10(p1));
                p1 /= z2;
              }
              while (B <= N2 && D <= N2) {
                let M2 = (A2 + C2) / (B + D);
                if (p1 === M2) {
                  if (B + D <= N2) {
                    n2 = A2 + C2;
                    d3 = B + D;
                  } else if (D > B) {
                    n2 = C2;
                    d3 = D;
                  } else {
                    n2 = A2;
                    d3 = B;
                  }
                  break;
                } else {
                  if (p1 > M2) {
                    A2 += C2;
                    B += D;
                  } else {
                    C2 += A2;
                    D += B;
                  }
                  if (B > N2) {
                    n2 = C2;
                    d3 = D;
                  } else {
                    n2 = A2;
                    d3 = B;
                  }
                }
              }
              n2 = BigInt(n2) * BigInt(z2);
              d3 = BigInt(d3);
            } else if (isNaN(p1)) {
              d3 = n2 = NaN;
            }
          } else if (typeof p1 === "string") {
            let ndx = 0;
            let v3 = C_ZERO2, w3 = C_ZERO2, x3 = C_ZERO2, y3 = C_ONE, z2 = C_ONE;
            let match = p1.match(/\d+|./g);
            if (match === null)
              throw new InvalidParameter();
            if (match[ndx] === "-") {
              s2 = -C_ONE;
              ndx++;
            } else if (match[ndx] === "+") {
              ndx++;
            }
            if (match.length === ndx + 1) {
              w3 = assign(match[ndx++], s2);
            } else if (match[ndx + 1] === "." || match[ndx] === ".") {
              if (match[ndx] !== ".") {
                v3 = assign(match[ndx++], s2);
              }
              ndx++;
              if (ndx + 1 === match.length || match[ndx + 1] === "(" && match[ndx + 3] === ")" || match[ndx + 1] === "'" && match[ndx + 3] === "'") {
                w3 = assign(match[ndx], s2);
                y3 = C_TEN ** BigInt(match[ndx].length);
                ndx++;
              }
              if (match[ndx] === "(" && match[ndx + 2] === ")" || match[ndx] === "'" && match[ndx + 2] === "'") {
                x3 = assign(match[ndx + 1], s2);
                z2 = C_TEN ** BigInt(match[ndx + 1].length) - C_ONE;
                ndx += 3;
              }
            } else if (match[ndx + 1] === "/" || match[ndx + 1] === ":") {
              w3 = assign(match[ndx], s2);
              y3 = assign(match[ndx + 2], C_ONE);
              ndx += 3;
            } else if (match[ndx + 3] === "/" && match[ndx + 1] === " ") {
              v3 = assign(match[ndx], s2);
              w3 = assign(match[ndx + 2], s2);
              y3 = assign(match[ndx + 4], C_ONE);
              ndx += 5;
            }
            if (match.length <= ndx) {
              d3 = y3 * z2;
              s2 = n2 = x3 + d3 * v3 + z2 * w3;
            } else {
              throw new InvalidParameter();
            }
          } else {
            throw new InvalidParameter();
          }
          if (d3 === C_ZERO2) {
            throw new DivisionByZero();
          }
          P3["s"] = s2 < C_ZERO2 ? -C_ONE : C_ONE;
          P3["n"] = n2 < C_ZERO2 ? -n2 : n2;
          P3["d"] = d3 < C_ZERO2 ? -d3 : d3;
        };
        function modpow(b3, e3, m3) {
          let r3 = C_ONE;
          for (; e3 > C_ZERO2; b3 = b3 * b3 % m3, e3 >>= C_ONE) {
            if (e3 & C_ONE) {
              r3 = r3 * b3 % m3;
            }
          }
          return r3;
        }
        function cycleLen(n2, d3) {
          for (; d3 % C_TWO === C_ZERO2; d3 /= C_TWO) {
          }
          for (; d3 % C_FIVE === C_ZERO2; d3 /= C_FIVE) {
          }
          if (d3 === C_ONE)
            return C_ZERO2;
          let rem = C_TEN % d3;
          let t3 = C_ONE;
          for (; rem !== C_ONE; t3++) {
            rem = rem * C_TEN % d3;
            if (t3 > MAX_CYCLE_LEN)
              return C_ZERO2;
          }
          return t3;
        }
        function cycleStart(n2, d3, len) {
          let rem1 = C_ONE;
          let rem2 = modpow(C_TEN, len, d3);
          for (let t3 = 0; t3 < 300; t3++) {
            if (rem1 === rem2)
              return BigInt(t3);
            rem1 = rem1 * C_TEN % d3;
            rem2 = rem2 * C_TEN % d3;
          }
          return 0;
        }
        function gcd2(a3, b3) {
          if (!a3)
            return b3;
          if (!b3)
            return a3;
          while (1) {
            a3 %= b3;
            if (!a3)
              return b3;
            b3 %= a3;
            if (!b3)
              return a3;
          }
        }
        function Fraction2(a3, b3) {
          if (!(this instanceof Fraction2)) {
            return new Fraction2(a3, b3);
          }
          parse2(a3, b3);
          a3 = gcd2(P3["d"], P3["n"]);
          this["s"] = P3["s"];
          this["n"] = P3["n"] / a3 | C_ZERO2;
          this["d"] = P3["d"] / a3 | C_ZERO2;
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
          add: function(a3, b3) {
            parse2(a3, b3);
            return new Fraction2(this["s"] * this["n"] * P3["d"] + P3["s"] * this["d"] * P3["n"], this["d"] * P3["d"]);
          },
          sub: function(a3, b3) {
            parse2(a3, b3);
            return new Fraction2(this["s"] * this["n"] * P3["d"] - P3["s"] * this["d"] * P3["n"], this["d"] * P3["d"]);
          },
          mul: function(a3, b3) {
            parse2(a3, b3);
            return new Fraction2(this["s"] * P3["s"] * this["n"] * P3["n"], this["d"] * P3["d"]);
          },
          div: function(a3, b3) {
            parse2(a3, b3);
            return new Fraction2(this["s"] * P3["s"] * this["n"] * P3["d"], this["d"] * P3["n"]);
          },
          clone: function() {
            return new Fraction2(this);
          },
          mod: function(a3, b3) {
            if (a3 === void 0) {
              return new Fraction2(this["s"] * this["n"] % this["d"], 1);
            }
            parse2(a3, b3);
            if (P3["n"] === 0 && this["d"] === 0) {
              Fraction2(0, 0);
            }
            return new Fraction2(this["s"] * (P3["d"] * this["n"]) % (P3["n"] * this["d"]), P3["d"] * this["d"]);
          },
          gcd: function(a3, b3) {
            parse2(a3, b3);
            return new Fraction2(gcd2(P3["n"], this["n"]) * gcd2(P3["d"], this["d"]), P3["d"] * this["d"]);
          },
          lcm: function(a3, b3) {
            parse2(a3, b3);
            if (P3["n"] === C_ZERO2 && this["n"] === C_ZERO2) {
              return new Fraction2();
            }
            return new Fraction2(P3["n"] * this["n"], gcd2(P3["n"], this["n"]) * gcd2(P3["d"], this["d"]));
          },
          inverse: function() {
            return new Fraction2(this["s"] * this["d"], this["n"]);
          },
          pow: function(m3) {
            if (m3 < 0) {
              return new Fraction2((this["s"] * this["d"]) ** BigInt(-m3), this["n"] ** BigInt(-m3));
            } else {
              return new Fraction2((this["s"] * this["n"]) ** BigInt(+m3), this["d"] ** BigInt(+m3));
            }
          },
          equals: function(a3, b3) {
            parse2(a3, b3);
            return this["s"] * this["n"] * P3["d"] === P3["s"] * P3["n"] * this["d"];
          },
          compare: function(a3, b3) {
            parse2(a3, b3);
            let t3 = this["s"] * this["n"] * P3["d"] - P3["s"] * P3["n"] * this["d"];
            return (C_ZERO2 < t3) - (t3 < C_ZERO2);
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
          divisible: function(a3, b3) {
            parse2(a3, b3);
            return !(!(P3["n"] * this["d"]) || this["n"] * P3["d"] % (P3["n"] * this["d"]));
          },
          valueOf: function() {
            return Number(this["s"] * this["n"]) / Number(this["d"]);
          },
          toString: function(dec) {
            let g3;
            let N2 = this["n"];
            let D = this["d"];
            dec = dec || 15;
            let cycLen = cycleLen(N2, D);
            let cycOff = cycleStart(N2, D, cycLen);
            let str = this["s"] < C_ZERO2 ? "-" : "";
            str += N2 / D | C_ZERO2;
            N2 %= D;
            N2 *= C_TEN;
            if (N2)
              str += ".";
            if (cycLen) {
              for (let i3 = cycOff; i3--; ) {
                str += N2 / D | C_ZERO2;
                N2 %= D;
                N2 *= C_TEN;
              }
              str += "(";
              for (let i3 = cycLen; i3--; ) {
                str += N2 / D | C_ZERO2;
                N2 %= D;
                N2 *= C_TEN;
              }
              str += ")";
            } else {
              for (let i3 = dec; N2 && i3--; ) {
                str += N2 / D | C_ZERO2;
                N2 %= D;
                N2 *= C_TEN;
              }
            }
            return str;
          },
          toFraction: function(excludeWhole) {
            let n2 = this["n"];
            let d3 = this["d"];
            let str = this["s"] < C_ZERO2 ? "-" : "";
            if (d3 === C_ONE) {
              str += n2;
            } else {
              let whole = n2 / d3 | C_ZERO2;
              if (excludeWhole && whole > C_ZERO2) {
                str += whole;
                str += " ";
                n2 %= d3;
              }
              str += n2;
              str += "/";
              str += d3;
            }
            return str;
          },
          toLatex: function(excludeWhole) {
            let n2 = this["n"];
            let d3 = this["d"];
            let str = this["s"] < C_ZERO2 ? "-" : "";
            if (d3 === C_ONE) {
              str += n2;
            } else {
              let whole = n2 / d3 | C_ZERO2;
              if (excludeWhole && whole > C_ZERO2) {
                str += whole;
                n2 %= d3;
              }
              str += "\\frac{";
              str += n2;
              str += "}{";
              str += d3;
              str += "}";
            }
            return str;
          },
          toContinued: function() {
            let a3 = this["n"];
            let b3 = this["d"];
            let res = [];
            do {
              res.push(a3 / b3 | C_ZERO2);
              let t3 = a3 % b3;
              a3 = b3;
              b3 = t3;
            } while (a3 !== C_ONE);
            return res;
          },
          simplify: function(eps) {
            let cont = this["abs"]()["toContinued"]();
            eps = eps || 1e-3;
            function rec(a3) {
              if (a3.length === 1)
                return new Fraction2(a3[0]);
              return rec(a3.slice(1))["inverse"]()["add"](a3[0]);
            }
            for (let i3 = 0; i3 < cont.length; i3++) {
              let tmp = rec(cont.slice(0, i3 + 1));
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
    var c3 = [
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
    ].map((n2) => (0, big_integer_1.default)(n2));
    var FeistelState = class {
      constructor(rounds, k3) {
        this.l = (0, big_integer_1.default)(0);
        this.r = (0, big_integer_1.default)(0);
        this.rounds = rounds;
        this.k = k3;
      }
      inject(elt) {
        this.l = this.l.add(elt).mod(exports.p);
      }
      mix() {
        for (let i3 = 0; i3 < this.rounds - 1; i3++) {
          const t4 = this.k.add(this.l).add(c3[i3]).mod(exports.p);
          const lNew = t4.modPow(5, exports.p).add(this.r).mod(exports.p);
          this.r = this.l;
          this.l = lNew;
        }
        const t3 = this.k.add(this.l).mod(exports.p);
        this.r = t3.modPow(5, exports.p).add(this.r).mod(exports.p);
      }
    };
    function mimcSponge(inputs, nOutputs, rounds, key) {
      const state = new FeistelState(rounds, (0, big_integer_1.default)(key));
      for (const elt of inputs) {
        state.inject(elt);
        state.mix();
      }
      const outputs = [state.l];
      for (let i3 = 0; i3 < nOutputs - 1; i3++) {
        state.mix();
        outputs.push(state.l);
      }
      return outputs;
    }
    function modPBigInt(x3) {
      let ret = (0, big_integer_1.default)(x3).mod(exports.p);
      if (ret.lesser((0, big_integer_1.default)(0))) {
        ret = ret.add(exports.p);
      }
      return ret;
    }
    exports.modPBigInt = modPBigInt;
    function modPBigIntNative(x3) {
      let ret = x3.mod(exports.p);
      if (ret.lesser((0, big_integer_1.default)(0))) {
        ret = ret.add(exports.p);
      }
      return ret;
    }
    exports.modPBigIntNative = modPBigIntNative;
    var mimcWithRounds = (rounds, key) => (...inputs) => mimcSponge(inputs.map((n2) => modPBigInt(n2)), 1, rounds, key)[0];
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
      ].map(([x3, y3]) => ({ x: new bigFraction_js_1.Fraction(x3, 1e3), y: new bigFraction_js_1.Fraction(y3, 1e3) }));
    } catch (err) {
      console.error("Browser does not support BigInt.", err);
    }
    var getRandomGradientAt = (point, scale, randFn) => {
      const val = vecs[randFn(point.x.valueOf(), point.y.valueOf(), scale.valueOf())];
      return val;
    };
    exports.getRandomGradientAt = getRandomGradientAt;
    var minus = (a3, b3) => {
      return {
        x: a3.x.sub(b3.x),
        y: a3.y.sub(b3.y)
      };
    };
    var dot = (a3, b3) => {
      return a3.x.mul(b3.x).add(a3.y.mul(b3.y));
    };
    var smoothStep = (x3) => {
      return x3;
    };
    var scalarMultiply = (s2, v3) => ({
      x: v3.x.mul(s2),
      y: v3.y.mul(s2)
    });
    var getWeight = (corner, p2) => {
      return smoothStep(new bigFraction_js_1.Fraction(1).sub(p2.x.sub(corner.x).abs())).mul(smoothStep(new bigFraction_js_1.Fraction(1).sub(p2.y.sub(corner.y).abs())));
    };
    var perlinValue = (corners, scale, p2) => {
      let ret = new bigFraction_js_1.Fraction(0);
      for (const corner of corners) {
        const distVec = minus(p2, corner.coords);
        ret = ret.add(getWeight(scalarMultiply(scale.inverse(), corner.coords), scalarMultiply(scale.inverse(), p2)).mul(dot(scalarMultiply(scale.inverse(), distVec), corner.gradient)));
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
    var valueAt = (p2, scale, randFn) => {
      const bottomLeftCoords = {
        x: p2.x.sub(realMod(p2.x, scale)),
        y: p2.y.sub(realMod(p2.y, scale))
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
      const out = perlinValue([bottomLeftGrad, bottomRightGrad, topLeftGrad, topRightGrad], scale, p2);
      return out;
    };
    exports.MAX_PERLIN_VALUE = 32;
    function perlin2(coords, options) {
      let { x: x3, y: y3 } = coords;
      if (options.mirrorY)
        x3 = Math.abs(x3);
      if (options.mirrorX)
        y3 = Math.abs(y3);
      const fractionalP = { x: new bigFraction_js_1.Fraction(x3), y: new bigFraction_js_1.Fraction(y3) };
      let ret = new bigFraction_js_1.Fraction(0);
      const pValues = [];
      for (let i3 = 0; i3 < 3; i3 += 1) {
        pValues.push(valueAt(fractionalP, new bigFraction_js_1.Fraction(options.scale * 2 ** i3), (0, exports.rand)(options.key)));
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
    exports.perlin = perlin2;
  }
});

// node_modules/@darkforest_eth/hashing/dist/index.js
var require_dist = __commonJS({
  "node_modules/@darkforest_eth/hashing/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o3, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o3, v3) {
      Object.defineProperty(o3, "default", { enumerable: true, value: v3 });
    } : function(o3, v3) {
      o3["default"] = v3;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k3 in mod)
          if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
            __createBinding(result, mod, k3);
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

// node_modules/@darkforest_eth/serde/dist/address.js
var require_address = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/address.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.address = void 0;
    function address(str) {
      let ret = str.toLowerCase();
      if (ret.slice(0, 2) === "0x") {
        ret = ret.slice(2);
      }
      for (const c3 of ret) {
        if ("0123456789abcdef".indexOf(c3) === -1)
          throw new Error("not a valid address");
      }
      if (ret.length !== 40)
        throw new Error("not a valid address");
      return `0x${ret}`;
    }
    exports.address = address;
  }
});

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
      BlackDomain: 9
    };
    exports.ArtifactTypeNames = {
      [exports.ArtifactType.Unknown]: "Unknown",
      [exports.ArtifactType.Monolith]: "Monolith",
      [exports.ArtifactType.Colossus]: "Colossus",
      [exports.ArtifactType.Spaceship]: "Spaceship",
      [exports.ArtifactType.Pyramid]: "Pyramid",
      [exports.ArtifactType.Wormhole]: "Wormhole",
      [exports.ArtifactType.PlanetaryShield]: "Planetary Shield",
      [exports.ArtifactType.PhotoidCannon]: "Photoid Cannon",
      [exports.ArtifactType.BloomFilter]: "Bloom Filter",
      [exports.ArtifactType.BlackDomain]: "Black Domain"
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

// node_modules/@darkforest_eth/types/dist/gpt_types.js
var require_gpt_types = __commonJS({
  "node_modules/@darkforest_eth/types/dist/gpt_types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@darkforest_eth/types/dist/identifier.js
var require_identifier = __commonJS({
  "node_modules/@darkforest_eth/types/dist/identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.AutoGasSetting = void 0;
    exports.AutoGasSetting = {
      Slow: "Slow",
      Average: "Average",
      Fast: "Fast"
    };
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

// node_modules/@darkforest_eth/types/dist/world.js
var require_world = __commonJS({
  "node_modules/@darkforest_eth/types/dist/world.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@darkforest_eth/types/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@darkforest_eth/types/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o3, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p2 in m3)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m3, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_arrival(), exports);
    __exportStar(require_artifact(), exports);
    __exportStar(require_claim(), exports);
    __exportStar(require_database_types(), exports);
    __exportStar(require_diagnostics(), exports);
    __exportStar(require_event(), exports);
    __exportStar(require_game_types(), exports);
    __exportStar(require_gas_prices(), exports);
    __exportStar(require_gpt_types(), exports);
    __exportStar(require_identifier(), exports);
    __exportStar(require_planet(), exports);
    __exportStar(require_planetmessage(), exports);
    __exportStar(require_player(), exports);
    __exportStar(require_reveal(), exports);
    __exportStar(require_setting(), exports);
    __exportStar(require_transactions(), exports);
    __exportStar(require_upgrade(), exports);
    __exportStar(require_utility(), exports);
    __exportStar(require_world(), exports);
  }
});

// node_modules/@darkforest_eth/constants/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@darkforest_eth/constants/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PLANET_CLAIM_MIN_LEVEL = exports.RECOMMENDED_MODAL_WIDTH = exports.GAS_PRICES_INTERVAL_MS = exports.BLOCK_EXPLORER_URL = exports.MAX_AUTO_GAS_PRICE_GWEI = exports.DEFAULT_GAS_PRICES = exports.GAS_PRICE_API = exports.MAX_BIOME = exports.MIN_BIOME = exports.MAX_PLANET_LEVEL = exports.MIN_PLANET_LEVEL = exports.MAX_ARTIFACT_RARITY = exports.MIN_ARTIFACT_RARITY = exports.MAX_ARTIFACT_TYPE = exports.MIN_ARTIFACT_TYPE = exports.EMPTY_ARTIFACT_ID = exports.EMPTY_LOCATION_ID = exports.EMPTY_ADDRESS = exports.LOCATION_ID_UB = exports.DEFAULT_MAX_CALL_RETRIES = exports.CONTRACT_PRECISION = void 0;
    var types_1 = require_dist2();
    var big_integer_1 = __importDefault(require_BigInteger());
    exports.CONTRACT_PRECISION = 1e3;
    exports.DEFAULT_MAX_CALL_RETRIES = 12;
    exports.LOCATION_ID_UB = (0, big_integer_1.default)("21888242871839275222246405745257275088548364400416034343698204186575808495617");
    exports.EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";
    exports.EMPTY_LOCATION_ID = "0000000000000000000000000000000000000000000000000000000000000000";
    exports.EMPTY_ARTIFACT_ID = "0000000000000000000000000000000000000000000000000000000000000000";
    exports.MIN_ARTIFACT_TYPE = types_1.ArtifactType.Monolith;
    exports.MAX_ARTIFACT_TYPE = types_1.ArtifactType.BlackDomain;
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
    var constants_1 = require_dist3();
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
    function locationIdFromBigInt2(location) {
      const locationBI = (0, big_integer_1.default)(location);
      if (locationBI.geq(constants_1.LOCATION_ID_UB))
        throw new Error("not a valid location");
      let ret = locationBI.toString(16);
      while (ret.length < 64)
        ret = "0" + ret;
      return ret;
    }
    exports.locationIdFromBigInt = locationIdFromBigInt2;
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
      return rawUpgradeBranches.map((a3) => a3.map(decodeUpgrade));
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
    var types_1 = require_dist2();
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
        lastActivated: artifact.lastActivated.toNumber(),
        lastDeactivated: artifact.lastDeactivated.toNumber(),
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
    var constants_1 = require_dist3();
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
        artifactId: rawArrival.carriedArtifactId.eq(0) ? void 0 : (0, artifact_1.artifactIdFromEthersBN)(rawArrival.carriedArtifactId)
      };
      return arrival;
    }
    exports.decodeArrival = decodeArrival;
  }
});

// node_modules/@darkforest_eth/serde/dist/claim.js
var require_claim2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/claim.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeClaimedCoords = void 0;
    var constants_1 = require_dist3();
    var big_integer_1 = __importDefault(require_BigInteger());
    var address_1 = require_address();
    var location_1 = require_location();
    function decodeClaimedCoords(rawClaimedCoords) {
      const locationId = (0, location_1.locationIdFromDecStr)(rawClaimedCoords.locationId.toString());
      let xBI = (0, big_integer_1.default)(rawClaimedCoords.x.toString());
      let yBI = (0, big_integer_1.default)(rawClaimedCoords.y.toString());
      let x3 = 0;
      let y3 = 0;
      if (xBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        xBI = xBI.minus(constants_1.LOCATION_ID_UB);
      }
      x3 = xBI.toJSNumber();
      if (yBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        yBI = yBI.minus(constants_1.LOCATION_ID_UB);
      }
      y3 = yBI.toJSNumber();
      return {
        hash: locationId,
        x: x3,
        y: y3,
        score: rawClaimedCoords.score.toNumber(),
        revealer: (0, address_1.address)(rawClaimedCoords.claimer)
      };
    }
    exports.decodeClaimedCoords = decodeClaimedCoords;
  }
});

// node_modules/@darkforest_eth/serde/dist/event.js
var require_event2 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNetworkEvent = void 0;
    var types_1 = require_dist2();
    function isNetworkEvent(event) {
      return typeof event.tx_to === "string" && typeof event.tx_type === "string" && typeof event.time_exec_called === "number" && (event.autoGasPriceSetting === void 0 || Object.values(types_1.AutoGasSetting).includes(event.autoGasPriceSetting));
    }
    exports.isNetworkEvent = isNetworkEvent;
  }
});

// node_modules/@darkforest_eth/hexgen/dist/index.js
var require_dist4 = __commonJS({
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
      const newBonus = Array(5).fill(false);
      for (let i3 = 0; i3 < newBonus.length; i3++) {
        newBonus[i3] = getBytesFromHex(hex, 9 + i3, 10 + i3).lesser(16);
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
    var constants_1 = require_dist3();
    var hexgen_1 = require_dist4();
    var address_1 = require_address();
    var location_1 = require_location();
    function decodePlanet(rawLocationId, rawPlanet, rawPlanetExtendedInfo) {
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
        lastUpdated: rawPlanetExtendedInfo.lastUpdated.toNumber(),
        upgradeState: [
          rawPlanetExtendedInfo.upgradeState0.toNumber(),
          rawPlanetExtendedInfo.upgradeState1.toNumber(),
          rawPlanetExtendedInfo.upgradeState2.toNumber()
        ],
        unconfirmedDepartures: [],
        unconfirmedUpgrades: [],
        unconfirmedBuyHats: [],
        unconfirmedPlanetTransfers: [],
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
        bonus: (0, hexgen_1.bonusFromHex)(locationId)
      };
      return planet;
    }
    exports.decodePlanet = decodePlanet;
    function decodePlanetDefaults(rawDefaults) {
      return {
        populationCap: rawDefaults.map((x3) => x3[1].toNumber() / constants_1.CONTRACT_PRECISION),
        populationGrowth: rawDefaults.map((x3) => x3[2].toNumber() / constants_1.CONTRACT_PRECISION),
        range: rawDefaults.map((x3) => x3[3].toNumber()),
        speed: rawDefaults.map((x3) => x3[4].toNumber()),
        defense: rawDefaults.map((x3) => x3[5].toNumber()),
        silverGrowth: rawDefaults.map((x3) => x3[6].toNumber() / constants_1.CONTRACT_PRECISION),
        silverCap: rawDefaults.map((x3) => x3[7].toNumber() / constants_1.CONTRACT_PRECISION),
        barbarianPercentage: rawDefaults.map((x3) => x3[8].toNumber())
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
        score: rawPlayer.score.toNumber()
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
    var constants_1 = require_dist3();
    var big_integer_1 = __importDefault(require_BigInteger());
    var address_1 = require_address();
    var location_1 = require_location();
    function decodeRevealedCoords(rawRevealedCoords) {
      const locationId = (0, location_1.locationIdFromDecStr)(rawRevealedCoords.locationId.toString());
      let xBI = (0, big_integer_1.default)(rawRevealedCoords.x.toString());
      let yBI = (0, big_integer_1.default)(rawRevealedCoords.y.toString());
      let x3 = 0;
      let y3 = 0;
      if (xBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        xBI = xBI.minus(constants_1.LOCATION_ID_UB);
      }
      x3 = xBI.toJSNumber();
      if (yBI.gt(constants_1.LOCATION_ID_UB.divide(2))) {
        yBI = yBI.minus(constants_1.LOCATION_ID_UB);
      }
      y3 = yBI.toJSNumber();
      return {
        hash: locationId,
        x: x3,
        y: y3,
        revealer: (0, address_1.address)(rawRevealedCoords.revealer)
      };
    }
    exports.decodeRevealedCoords = decodeRevealedCoords;
  }
});

// node_modules/@darkforest_eth/serde/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@darkforest_eth/serde/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o3, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p2 in m3)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m3, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_address(), exports);
    __exportStar(require_arrival2(), exports);
    __exportStar(require_artifact2(), exports);
    __exportStar(require_claim2(), exports);
    __exportStar(require_event2(), exports);
    __exportStar(require_location(), exports);
    __exportStar(require_planet2(), exports);
    __exportStar(require_player2(), exports);
    __exportStar(require_reveal2(), exports);
    __exportStar(require_upgrade2(), exports);
  }
});

// plugins/MissionControl.tsx
var import_hashing = __toModule(require_dist());

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f;
var e = {};
var c = [];
var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function h(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function v(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
    for (r3 in l3.defaultProps)
      f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
  return y(l3, f3, t3, o3, null);
}
function y(n2, i3, t3, o3, r3) {
  var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
  return r3 == null && l.vnode != null && l.vnode(f3), f3;
}
function d(n2) {
  return n2.children;
}
function _(n2, l3) {
  this.props = n2, this.context = l3;
}
function k(n2, l3) {
  if (l3 == null)
    return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if ((u3 = n2.__k[l3]) != null && u3.__e != null)
      return u3.__e;
  return typeof n2.type == "function" ? k(n2) : null;
}
function b(n2) {
  var l3, u3;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return b(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t3, o3, r3;
      n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n2, l3, u3, i3, t3, o3, r3, f3, s2, a3) {
  var h2, v3, p2, _2, b3, m3, g3, w3 = i3 && i3.__k || c, A2 = w3.length;
  for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
    if ((_2 = u3.__k[h2] = (_2 = l3[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u3, _2.__b = u3.__b + 1, (p2 = w3[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
        w3[h2] = void 0;
      else
        for (v3 = 0; v3 < A2; v3++) {
          if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
            w3[v3] = void 0;
            break;
          }
          p2 = null;
        }
      j(n2, _2, p2 = p2 || e, t3, o3, r3, f3, s2, a3), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P2(n2, _2, p2, w3, b3, s2), typeof u3.type == "function" && (u3.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k(p2));
    }
  for (u3.__e = m3, h2 = A2; h2--; )
    w3[h2] != null && (typeof u3.type == "function" && w3[h2].__e != null && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
  if (g3)
    for (h2 = 0; h2 < g3.length; h2++)
      M(g3[h2], g3[++h2], g3[++h2]);
}
function x(n2, l3, u3) {
  for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P2(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function P2(n2, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (l3.__d !== void 0)
    r3 = l3.__d, l3.__d = void 0;
  else if (u3 == null || t3 != o3 || t3.parentNode == null)
    n:
      if (o3 == null || o3.parentNode !== n2)
        n2.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o3), r3 = o3;
      }
  return r3 !== void 0 ? r3 : t3.nextSibling;
}
function C(n2, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    o3 === "children" || o3 === "key" || o3 in l3 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
}
function $(n2, l3, u3) {
  l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t3) {
  var o3;
  n:
    if (l3 === "style")
      if (typeof u3 == "string")
        n2.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t3)
        l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
        try {
          n2[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n3) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
  var s2, h2, v3, y3, p2, k3, b3, m3, g3, x3, A2, P3 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s2 = l.__b) && s2(u3);
  try {
    n:
      if (typeof P3 == "function") {
        if (m3 = u3.props, g3 = (s2 = P3.contextType) && t3[s2.__c], x3 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h2 = new P3(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P3, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P3.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P3.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p2 = h2.state, v3)
          P3.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P3.getDerivedStateFromProps == null && m3 !== y3 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
            h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h2.__h.length && f3.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y3, p2, k3);
          });
        }
        h2.context = x3, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y3, p2)), A2 = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (s2 = l.diffed) && s2(u3);
  } catch (n3) {
    u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, f3, c3) {
  var s2, a3, v3, y3 = i3.props, p2 = u3.props, d3 = u3.type, _2 = 0;
  if (d3 === "svg" && (o3 = true), r3 != null) {
    for (; _2 < r3.length; _2++)
      if ((s2 = r3[_2]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : s2.nodeType === 3)) {
        l3 = s2, r3[_2] = null;
        break;
      }
  }
  if (l3 == null) {
    if (d3 === null)
      return document.createTextNode(p2);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p2.is && p2), r3 = null, c3 = false;
  }
  if (d3 === null)
    y3 === p2 || c3 && l3.data === p2 || (l3.data = p2);
  else {
    if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
      if (r3 != null)
        for (y3 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
          y3[l3.attributes[_2].name] = l3.attributes[_2].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p2, y3, o3, c3), v3)
      u3.__k = [];
    else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, o3 && d3 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
      for (_2 = r3.length; _2--; )
        r3[_2] != null && h(r3[_2]);
    c3 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l3.value || d3 === "progress" && !_2 || d3 === "option" && _2 !== y3.value) && H(l3, "value", _2, y3.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y3.checked, false));
  }
  return l3;
}
function M(n2, u3, i3) {
  try {
    typeof n2 == "function" ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n2.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
  i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function S(u3, i3, t3) {
  var o3, r3, f3;
  l.__ && l.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
}
n = c.slice, l = { __e: function(n2, l3) {
  for (var u3, i3, t3; l3 = l3.__; )
    if ((u3 = l3.__c) && !u3.__)
      try {
        if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
          return u3.__E = u3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return n2 != null && n2.constructor === void 0;
}, _.prototype.setState = function(n2, l3) {
  var u3;
  u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
}, _.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
}, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

// plugins/lib/darkforest.ts
function getViewport() {
  return ui.getViewport();
}
function getHoveringOverCoords() {
  return ui.getHoveringOverCoords();
}
function getHashConfig() {
  return df.getHashConfig();
}

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var u2;
var r2;
var o2 = 0;
var i2 = [];
var c2 = l.__b;
var f2 = l.__r;
var e2 = l.diffed;
var a2 = l.__c;
var v2 = l.unmount;
function m2(t3, r3) {
  l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
  var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
}
function l2(n2) {
  return o2 = 1, p(w2, n2);
}
function p(n2, r3, o3) {
  var i3 = m2(t2++, 2);
  return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
    var t3 = i3.t(i3.__[0], n3);
    i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
  }], i3.__c = u2), i3.__;
}
function y2(r3, o3) {
  var i3 = m2(t2++, 3);
  !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
}
function d2(n2, u3) {
  var r3 = m2(t2++, 7);
  return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
}
function A(n2, t3) {
  return o2 = 8, d2(function() {
    return n2;
  }, t3);
}
function x2() {
  for (var t3; t3 = i2.shift(); )
    if (t3.__P)
      try {
        t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
      } catch (u3) {
        t3.__H.__h = [], l.__e(u3, t3.__v);
      }
}
l.__b = function(n2) {
  u2 = null, c2 && c2(n2);
}, l.__r = function(n2) {
  f2 && f2(n2), t2 = 0;
  var r3 = (u2 = n2.__c).__H;
  r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
}, l.diffed = function(t3) {
  e2 && e2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
    var t4, u3 = function() {
      clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r3 = setTimeout(u3, 100);
    b2 && (t4 = requestAnimationFrame(u3));
  })(x2)), u2 = null;
}, l.__c = function(t3, u3) {
  u3.some(function(t4) {
    try {
      t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || j2(n2);
      });
    } catch (r3) {
      u3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u3 = [], l.__e(r3, t4.__v);
    }
  }), a2 && a2(t3, u3);
}, l.unmount = function(t3) {
  v2 && v2(t3);
  var u3, r3 = t3.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
    try {
      g2(n2);
    } catch (n3) {
      u3 = n3;
    }
  }), u3 && l.__e(u3, r3.__v));
};
var b2 = typeof requestAnimationFrame == "function";
function g2(n2) {
  var t3 = u2, r3 = n2.__c;
  typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t3;
}
function j2(n2) {
  var t3 = u2;
  n2.__c = n2.__(), u2 = t3;
}
function k2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
    return t4 !== n2[u3];
  });
}
function w2(n2, t3) {
  return typeof t3 == "function" ? t3(n2) : t3;
}

// plugins/views/MissionControlView.tsx
function MissionControlView({
  onChunkSelected,
  onChunkClear,
  onFetchData,
  onFetchPlanets,
  onClearRemoteChunks
}) {
  const [selectionStatus, setSelectionStatus] = l2("none");
  const [firstPoint, setFirstPoint] = l2(void 0);
  const [secondPoint, setSecondPoint] = l2(void 0);
  const onMouseClick = A((evt) => {
    if (selectionStatus == "none")
      return;
    const viewport = getViewport();
    if (evt.target !== viewport.canvas)
      return;
    const coords = getHoveringOverCoords();
    if (!coords)
      return;
    if (selectionStatus == "first") {
      setFirstPoint(coords);
      setSelectionStatus("second");
    } else if (selectionStatus == "second") {
      setSecondPoint(coords);
      setSelectionStatus("none");
    }
  }, [selectionStatus, setSelectionStatus]);
  const reset = A(() => {
    setFirstPoint(void 0);
    setSecondPoint(void 0);
    setSelectionStatus("none");
    onChunkClear();
  }, []);
  y2(() => {
    window.addEventListener("click", onMouseClick);
    return () => {
      window.removeEventListener("click", onMouseClick);
    };
  }, [onMouseClick]);
  y2(() => {
    if (firstPoint && secondPoint) {
      const bx = Math.min(firstPoint.x, secondPoint.x);
      const by = Math.min(firstPoint.y, secondPoint.y);
      const ux = Math.max(firstPoint.x, secondPoint.x);
      const uy = Math.max(firstPoint.y, secondPoint.y);
      onChunkSelected({ x: bx, y: by }, { x: ux, y: uy });
    }
  }, [firstPoint, secondPoint]);
  return /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("p", null, "Don't fetch chunks too big in one go!"), /* @__PURE__ */ v("p", null, "PREVIEW AVAILABLE CHUNKS"), /* @__PURE__ */ v("p", null, "1. Select area"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("button", {
    onClick: () => setSelectionStatus("first")
  }, selectionStatus !== "none" ? "Selecting Area" : "Select Area"), /* @__PURE__ */ v("button", {
    onClick: reset
  }, "CLEAR"), firstPoint && `(${firstPoint.x}, ${firstPoint.y})`, " - ", secondPoint && `(${secondPoint.x}, ${secondPoint.y})`), /* @__PURE__ */ v("p", null, "2. Fetch available chunks from mission control"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("button", {
    onClick: onFetchData
  }, "FETCH DATA"), /* @__PURE__ */ v("button", {
    onClick: onClearRemoteChunks
  }, "CLEAR REMOTE CHUNKS")), /* @__PURE__ */ v("p", null, "3. Now fetch planets in the same area"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("button", {
    onClick: onFetchPlanets
  }, "FETCH PLANETS")));
}

// plugins/MissionControl.tsx
var import_serde = __toModule(require_dist5());
var MAGENTA = "#d445f7";
var CYAN = "#59c0f8";
var BASE_URL = "https://mission-control-staging-y9nhq.ondigitalocean.app/";
function chunkFilter(chunk) {
  const bottomLeft = chunk.bottomLeft;
  const upperRight = chunk.upperRight;
  return `bottom_left[x]=${bottomLeft.x}&bottom_left[y]=${bottomLeft.y}&upper_right[x]=${upperRight.x}&upper_right[y]=${upperRight.y}`;
}
function processChunkWithPlanets(chunkWithPlanets, spaceTypePerlinOpts, biomebasePerlinOpts) {
  const { chunk, planets } = chunkWithPlanets;
  const chunkFootprint = {
    bottomLeft: {
      x: chunk.bottom_left.x,
      y: chunk.bottom_left.y
    },
    sideLength: chunk.size
  };
  const chunkCenter = {
    x: chunkFootprint.bottomLeft.x + chunkFootprint.sideLength / 2,
    y: chunkFootprint.bottomLeft.y + chunkFootprint.sideLength / 2
  };
  const planetLocations = planets.map((planet) => ({
    coords: planet.location,
    hash: (0, import_serde.locationIdFromBigInt)(planet.hash),
    perlin: (0, import_hashing.perlin)(planet.location, spaceTypePerlinOpts),
    biomebase: (0, import_hashing.perlin)(planet.location, biomebasePerlinOpts)
  }));
  return {
    chunkFootprint,
    planetLocations,
    perlin: (0, import_hashing.perlin)(chunkCenter, { ...spaceTypePerlinOpts, floor: false })
  };
}
var MissionControlPlugin = class {
  constructor() {
    __publicField(this, "container");
    __publicField(this, "viewport");
    __publicField(this, "chunk");
    __publicField(this, "remoteChunks");
    this.container = null;
    this.viewport = getViewport();
    this.chunk = null;
    this.remoteChunks = [];
  }
  onChunkSelected(bottomLeft, upperRight) {
    this.chunk = { bottomLeft, upperRight };
  }
  onChunkClear() {
    console.log("clear");
    this.chunk = null;
  }
  async onFetchData() {
    if (!this.chunk)
      return;
    const response = await fetch(`${BASE_URL}/api/chunks?${chunkFilter(this.chunk)}`);
    const { data, errors } = await response.json();
    if (errors) {
      console.error(errors);
      return;
    }
    const newChunks = data.map((rc) => {
      return rc.chunk;
    });
    this.remoteChunks = [...this.remoteChunks, ...newChunks];
  }
  onClearRemoteChunks() {
    this.remoteChunks = [];
  }
  async onFetchPlanets() {
    if (!this.chunk)
      return;
    const response = await fetch(`${BASE_URL}/api/planets?${chunkFilter(this.chunk)}`);
    const { data, errors } = await response.json();
    if (errors) {
      console.error(errors);
      return;
    }
    const hashConfig = getHashConfig();
    const spaceTypePerlinOpts = {
      key: hashConfig.spaceTypeKey,
      scale: hashConfig.perlinLengthScale,
      mirrorX: hashConfig.perlinMirrorX,
      mirrorY: hashConfig.perlinMirrorY,
      floor: true
    };
    const biomebasePerlinOpts = {
      key: hashConfig.biomebaseKey,
      scale: hashConfig.perlinLengthScale,
      mirrorX: hashConfig.perlinMirrorX,
      mirrorY: hashConfig.perlinMirrorY,
      floor: true
    };
    const newChunks = data.map((cp) => processChunkWithPlanets(cp, spaceTypePerlinOpts, biomebasePerlinOpts));
    try {
      await df.bulkAddNewChunks(newChunks);
    } catch (err) {
      console.error(err);
    }
  }
  async render(container) {
    this.container = container;
    container.style.width = "500px";
    S(/* @__PURE__ */ v(MissionControlView, {
      onChunkSelected: (bl, ur) => this.onChunkSelected(bl, ur),
      onChunkClear: () => this.onChunkClear(),
      onFetchData: () => this.onFetchData(),
      onClearRemoteChunks: () => this.onClearRemoteChunks(),
      onFetchPlanets: () => this.onFetchPlanets()
    }), container);
  }
  drawRectangle(ctx, bottomLeft, upperRight, color) {
    const { x: bx, y: by } = bottomLeft;
    const { x: ux, y: uy } = upperRight;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeRect(this.viewport.worldToCanvasX(bx), this.viewport.worldToCanvasY(by), this.viewport.worldToCanvasDist(ux - bx), this.viewport.worldToCanvasDist(by - uy));
    ctx.restore();
  }
  draw(ctx) {
    if (this.chunk) {
      this.drawRectangle(ctx, this.chunk.bottomLeft, this.chunk.upperRight, MAGENTA);
    }
    this.remoteChunks.forEach((chunk) => {
      const upperRight = {
        x: chunk.bottom_left.x + chunk.size,
        y: chunk.bottom_left.y + chunk.size
      };
      this.drawRectangle(ctx, chunk.bottom_left, upperRight, CYAN);
    });
  }
  destroy() {
    if (this.container) {
      S(null, this.container);
    }
  }
};
export {
  MissionControlPlugin as default
};
/**
 * @license Fraction.js v4.0.12 09/09/2015
 * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/