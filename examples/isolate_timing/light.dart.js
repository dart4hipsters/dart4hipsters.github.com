//  ********** Library dart:core **************
//  ********** Natives dart:core **************
function $throw(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  // TODO(jmesserly): capture the stack trace on other JS engines.
  if (e && (typeof e == 'object') && Error.captureStackTrace) {
    // TODO(jmesserly): this will clobber the e.stack property
    Error.captureStackTrace(e, $throw);
  }
  throw e;
}
Object.prototype.$index = function(i) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$index = function(i) { return this[i]; }
  }
  return this[i];
}
Array.prototype.$index = function(i) { return this[i]; }
String.prototype.$index = function(i) { return this[i]; }
Object.prototype.$setindex = function(i, value) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$setindex = function(i, value) { return this[i] = value; }
  }
  return this[i] = value;
}
Array.prototype.$setindex = function(i, value) { return this[i] = value; }
var $globalThis = this;
var $globals = null;
var $globalState = null;
function $eq(x, y) {
  if (x == null) return y == null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x == y : x.$eq(y);
}
// TODO(jimhug): Should this or should it not match equals?
Object.prototype.$eq = function(other) { return this === other; }
function $truncdiv(x, y) {
  if (typeof(x) == 'number' && typeof(y) == 'number') {
    if (y == 0) $throw(new IntegerDivisionByZeroException());
    var tmp = x / y;
    return (tmp < 0) ? Math.ceil(tmp) : Math.floor(tmp);
  } else {
    return x.$truncdiv(y);
  }
}
// ********** Code for Object **************
Object.prototype.noSuchMethod = function(name, args) {
  $throw(new NoSuchMethodException(this, name, args));
}
Object.prototype._callback$2 = function($0, $1) {
  return this.noSuchMethod("_callback", [$0, $1]);
};
Object.prototype._setGlobals$0 = function() {
  return this.noSuchMethod("_setGlobals", []);
};
Object.prototype.call$1 = function($0) {
  return this.noSuchMethod("call", [$0]);
};
Object.prototype.complete$1 = function($0) {
  return this.noSuchMethod("complete", [$0]);
};
Object.prototype.forEach$1 = function($0) {
  return this.noSuchMethod("forEach", [$0]);
};
Object.prototype.getRange$2 = function($0, $1) {
  return this.noSuchMethod("getRange", [$0, $1]);
};
Object.prototype.hashCode$0 = function() {
  return this.noSuchMethod("hashCode", []);
};
Object.prototype.is$List = function() {
  return false;
};
Object.prototype.is$Map = function() {
  return false;
};
Object.prototype.lookup$1 = function($0) {
  return this.noSuchMethod("lookup", [$0]);
};
Object.prototype.postMessage$1 = function($0) {
  return this.noSuchMethod("postMessage", [$0]);
};
Object.prototype.receive$1 = function($0) {
  return this.noSuchMethod("receive", [$0]);
};
Object.prototype.send$1 = function($0) {
  return this.noSuchMethod("send", [$0]);
};
Object.prototype.spawn$0 = function() {
  return this.noSuchMethod("spawn", []);
};
Object.prototype.stop$0 = function() {
  return this.noSuchMethod("stop", []);
};
Object.prototype.terminate$0 = function() {
  return this.noSuchMethod("terminate", []);
};
Object.prototype.then$1 = function($0) {
  return this.noSuchMethod("then", [$0]);
};
Object.prototype.toString$0 = function() {
  return this.toString();
};
// ********** Code for Clock **************
function Clock() {}
Clock.now = function() {
  return new Date().getTime();
}
Clock.frequency = function() {
  return 1000;
}
// ********** Code for NoSuchMethodException **************
function NoSuchMethodException(_receiver, _functionName, _arguments) {
  this._receiver = _receiver;
  this._functionName = _functionName;
  this._arguments = _arguments;
  // Initializers done
}
NoSuchMethodException.prototype.toString = function() {
  var sb = new StringBufferImpl("");
  for (var i = 0;
   i < this._arguments.get$length(); i++) {
    if (i > 0) {
      sb.add(", ");
    }
    sb.add(this._arguments.$index(i));
  }
  sb.add("]");
  return ("NoSuchMethodException - receiver: '" + this._receiver + "' ") + ("function name: '" + this._functionName + "' arguments: [" + sb + "]");
}
NoSuchMethodException.prototype.toString$0 = NoSuchMethodException.prototype.toString;
// ********** Code for ClosureArgumentMismatchException **************
function ClosureArgumentMismatchException() {
  // Initializers done
}
ClosureArgumentMismatchException.prototype.toString = function() {
  return "Closure argument mismatch";
}
ClosureArgumentMismatchException.prototype.toString$0 = ClosureArgumentMismatchException.prototype.toString;
// ********** Code for ObjectNotClosureException **************
function ObjectNotClosureException() {
  // Initializers done
}
ObjectNotClosureException.prototype.toString = function() {
  return "Object is not closure";
}
ObjectNotClosureException.prototype.toString$0 = ObjectNotClosureException.prototype.toString;
// ********** Code for StackOverflowException **************
function StackOverflowException() {
  // Initializers done
}
StackOverflowException.prototype.toString = function() {
  return "Stack Overflow";
}
StackOverflowException.prototype.toString$0 = StackOverflowException.prototype.toString;
// ********** Code for NullPointerException **************
function NullPointerException() {
  // Initializers done
}
NullPointerException.prototype.toString = function() {
  return "NullPointerException";
}
NullPointerException.prototype.toString$0 = NullPointerException.prototype.toString;
// ********** Code for EmptyQueueException **************
function EmptyQueueException() {
  // Initializers done
}
EmptyQueueException.prototype.toString = function() {
  return "EmptyQueueException";
}
EmptyQueueException.prototype.toString$0 = EmptyQueueException.prototype.toString;
// ********** Code for dart_core_Function **************
Function.prototype.to$call$0 = function() {
  this.call$0 = this._genStub(0);
  this.to$call$0 = function() { return this.call$0; };
  return this.call$0;
};
Function.prototype.call$0 = function() {
  return this.to$call$0()();
};
function to$call$0(f) { return f && f.to$call$0(); }
Function.prototype.to$call$1 = function() {
  this.call$1 = this._genStub(1);
  this.to$call$1 = function() { return this.call$1; };
  return this.call$1;
};
Function.prototype.call$1 = function($0) {
  return this.to$call$1()($0);
};
function to$call$1(f) { return f && f.to$call$1(); }
Function.prototype.to$call$2 = function() {
  this.call$2 = this._genStub(2);
  this.to$call$2 = function() { return this.call$2; };
  return this.call$2;
};
Function.prototype.call$2 = function($0, $1) {
  return this.to$call$2()($0, $1);
};
function to$call$2(f) { return f && f.to$call$2(); }
// ********** Code for Isolate **************
function Isolate() {}
Isolate.light$ctor = function() {
  this._isLight = true;
  // Initializers done
}
Isolate.light$ctor.prototype = Isolate.prototype;
Isolate.prototype.spawn = function() {
  return IsolateNatives.spawn(this, this._isLight);
}
Isolate.prototype._run = function(port) {
  this._port = port;
  this.main();
}
Isolate.prototype.get$port = function() {
  return this._port;
}
Isolate.prototype.spawn$0 = Isolate.prototype.spawn;
// ********** Code for top level **************
function print(obj) {
  return _print(obj);
}
function _print(obj) {
  if (typeof console == 'object') {
    if (obj) obj = obj.toString();
    console.log(obj);
  } else {
    write(obj);
    write('\n');
  }
}
function _map(itemsAndKeys) {
  var ret = new LinkedHashMapImplementation();
  for (var i = 0;
   i < itemsAndKeys.get$length(); ) {
    ret.$setindex(itemsAndKeys.$index(i++), itemsAndKeys.$index(i++));
  }
  return ret;
}
function _toDartException(e) {
  function attachStack(dartEx) {
    // TODO(jmesserly): setting the stack property is not a long term solution.
    var stack = e.stack;
    // The stack contains the error message, and the stack is all that is
    // printed (the exception's toString() is never called).  Make the Dart
    // exception's toString() be the dominant message.
    if (typeof stack == 'string') {
      var message = dartEx.toString();
      if (/^(Type|Range)Error:/.test(stack)) {
        // Indent JS message (it can be helpful) so new message stands out.
        stack = '    (' + stack.substring(0, stack.indexOf('\n')) + ')\n' +
                stack.substring(stack.indexOf('\n') + 1);
      }
      stack = message + '\n' + stack;
    }
    dartEx.stack = stack;
    return dartEx;
  }

  if (e instanceof TypeError) {
    switch(e.type) {
      case 'property_not_function':
      case 'called_non_callable':
        if (e.arguments[0] == null) {
          return attachStack(new NullPointerException());
        } else {
          return attachStack(new ObjectNotClosureException());
        }
        break;
      case 'non_object_property_call':
      case 'non_object_property_load':
        return attachStack(new NullPointerException());
        break;
      case 'undefined_method':
        var mname = e.arguments[0];
        if (typeof(mname) == 'string' && (mname.indexOf('call$') == 0
            || mname == 'call' || mname == 'apply')) {
          return attachStack(new ObjectNotClosureException());
        } else {
          // TODO(jmesserly): fix noSuchMethod on operators so we don't hit this
          return attachStack(new NoSuchMethodException('', e.arguments[0], []));
        }
        break;
    }
  } else if (e instanceof RangeError) {
    if (e.message.indexOf('call stack') >= 0) {
      return attachStack(new StackOverflowException());
    }
  }
  return e;
}
function _stackTraceOf(e) {
  return  (e && e.stack) ? e.stack : null;
}
//  ********** Library dart:coreimpl **************
// ********** Code for ListFactory **************
ListFactory = Array;
ListFactory.prototype.is$List = function(){return true};
ListFactory.prototype.get$length = function() { return this.length; };
ListFactory.prototype.set$length = function(value) { return this.length = value; };
ListFactory.prototype.add = function(value) {
  this.push(value);
}
ListFactory.prototype.clear = function() {
  this.set$length(0);
}
ListFactory.prototype.getRange = function(start, length) {
  return this.slice(start, start + length);
}
ListFactory.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
ListFactory.prototype.getRange$2 = ListFactory.prototype.getRange;
ListFactory_E = ListFactory;
ListFactory_K = ListFactory;
ListFactory_dart_core_String = ListFactory;
ListFactory_V = ListFactory;
// ********** Code for NumImplementation **************
NumImplementation = Number;
NumImplementation.prototype.hashCode = function() {
  'use strict'; return this & 0x1FFFFFFF;
}
NumImplementation.prototype.hashCode$0 = NumImplementation.prototype.hashCode;
// ********** Code for ExceptionImplementation **************
function ExceptionImplementation(msg) {
  this._msg = msg;
  // Initializers done
}
ExceptionImplementation.prototype.toString = function() {
  return (this._msg == null) ? "Exception" : ("Exception: " + this._msg);
}
ExceptionImplementation.prototype.toString$0 = ExceptionImplementation.prototype.toString;
// ********** Code for FutureNotCompleteException **************
function FutureNotCompleteException() {
  // Initializers done
}
FutureNotCompleteException.prototype.toString = function() {
  return "Exception: future has not been completed";
}
FutureNotCompleteException.prototype.toString$0 = FutureNotCompleteException.prototype.toString;
// ********** Code for FutureAlreadyCompleteException **************
function FutureAlreadyCompleteException() {
  // Initializers done
}
FutureAlreadyCompleteException.prototype.toString = function() {
  return "Exception: future already completed";
}
FutureAlreadyCompleteException.prototype.toString$0 = FutureAlreadyCompleteException.prototype.toString;
// ********** Code for FutureImpl **************
function FutureImpl() {
  this._listeners = new Array();
  this._exceptionHandlers = new Array();
  // Initializers done
  this._isComplete = false;
  this._exceptionHandled = false;
}
FutureImpl.prototype.get$value = function() {
  if (!this.get$isComplete()) {
    $throw(new FutureNotCompleteException());
  }
  if (this._exception != null) {
    $throw(this._exception);
  }
  return this._value;
}
FutureImpl.prototype.get$isComplete = function() {
  return this._isComplete;
}
FutureImpl.prototype.get$hasValue = function() {
  return this.get$isComplete() && this._exception == null;
}
FutureImpl.prototype.then = function(onComplete) {
  if (this.get$hasValue()) {
    onComplete(this.get$value());
  }
  else if (!this.get$isComplete()) {
    this._listeners.add(onComplete);
  }
  else if (!this._exceptionHandled) {
    $throw(this._exception);
  }
}
FutureImpl.prototype._complete = function() {
  this._isComplete = true;
  if (this._exception != null) {
    var $$list = this._exceptionHandlers;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var handler = $$list.$index($$i);
      if (handler.call$1(this._exception)) {
        this._exceptionHandled = true;
        break;
      }
    }
  }
  if (this.get$hasValue()) {
    var $$list = this._listeners;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var listener = $$list.$index($$i);
      listener.call$1(this.get$value());
    }
  }
  else {
    if (!this._exceptionHandled && this._listeners.get$length() > 0) {
      $throw(this._exception);
    }
  }
}
FutureImpl.prototype._setValue = function(value) {
  if (this._isComplete) {
    $throw(new FutureAlreadyCompleteException());
  }
  this._value = value;
  this._complete();
}
FutureImpl.prototype.then$1 = function($0) {
  return this.then(to$call$1($0));
};
// ********** Code for FutureImpl_T **************
/** Implements extends for Dart classes on JavaScript prototypes. */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}
$inherits(FutureImpl_T, FutureImpl);
function FutureImpl_T() {}
FutureImpl_T.prototype._complete = function() {
  this._isComplete = true;
  if (this._exception != null) {
    var $$list = this._exceptionHandlers;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var handler = $$list.$index($$i);
      if (handler.call$1(this._exception)) {
        this._exceptionHandled = true;
        break;
      }
    }
  }
  if (this.get$hasValue()) {
    var $$list = this._listeners;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var listener = $$list.$index($$i);
      listener.call$1(this.get$value());
    }
  }
  else {
    if (!this._exceptionHandled && this._listeners.get$length() > 0) {
      $throw(this._exception);
    }
  }
}
FutureImpl_T.prototype._setValue = function(value) {
  if (this._isComplete) {
    $throw(new FutureAlreadyCompleteException());
  }
  this._value = value;
  this._complete();
}
// ********** Code for CompleterImpl **************
function CompleterImpl() {
  this._futureImpl = new FutureImpl();
  // Initializers done
}
CompleterImpl.prototype.get$future = function() {
  return this._futureImpl;
}
CompleterImpl.prototype.complete = function(value) {
  this._futureImpl._setValue(value);
}
CompleterImpl.prototype.complete$1 = CompleterImpl.prototype.complete;
// ********** Code for CompleterImpl_SendPort **************
$inherits(CompleterImpl_SendPort, CompleterImpl);
function CompleterImpl_SendPort() {}
// ********** Code for HashMapImplementation **************
function HashMapImplementation() {
  // Initializers done
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = HashMapImplementation._computeLoadLimit(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._keys = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._values = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
}
HashMapImplementation.prototype.is$Map = function(){return true};
HashMapImplementation._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * 3), 4);
}
HashMapImplementation._firstProbe = function(hashCode, length) {
  return hashCode & (length - 1);
}
HashMapImplementation._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - 1);
}
HashMapImplementation.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  var insertionIndex = -1;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < 0) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < 0) && (const$4/*HashMapImplementation._DELETED_KEY*/ === existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._probeForLookup = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) return -1;
    if ($eq(existingKey, key)) return hash;
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + 1;
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * 2);
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation._isPowerOfTwo = function(x) {
  return ((x & (x - 1)) == 0);
}
HashMapImplementation.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = 0;
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key === const$4/*HashMapImplementation._DELETED_KEY*/) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = 0;
}
HashMapImplementation.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) === const$4/*HashMapImplementation._DELETED_KEY*/)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation.prototype.$index = function(key) {
  var index = this._probeForLookup(key);
  if (index < 0) return null;
  return this._values.$index(index);
}
HashMapImplementation.prototype.remove = function(key) {
  var index = this._probeForLookup(key);
  if (index >= 0) {
    this._numberOfEntries--;
    var value = this._values.$index(index);
    this._values.$setindex(index);
    this._keys.$setindex(index, const$4/*HashMapImplementation._DELETED_KEY*/);
    this._numberOfDeleted++;
    return value;
  }
  return null;
}
HashMapImplementation.prototype.isEmpty = function() {
  return this._numberOfEntries == 0;
}
HashMapImplementation.prototype.get$length = function() {
  return this._numberOfEntries;
}
HashMapImplementation.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = 0;
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) !== const$4/*HashMapImplementation._DELETED_KEY*/)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
HashMapImplementation.prototype.getKeys = function() {
  var list = new Array(this.get$length());
  var i = 0;
  this.forEach(function _(key, value) {
    list.$setindex(i++, key);
  }
  );
  return list;
}
HashMapImplementation.prototype.getValues = function() {
  var list = new Array(this.get$length());
  var i = 0;
  this.forEach(function _(key, value) {
    list.$setindex(i++, value);
  }
  );
  return list;
}
HashMapImplementation.prototype.containsKey = function(key) {
  return (this._probeForLookup(key) != -1);
}
HashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
// ********** Code for HashMapImplementation_E$E **************
$inherits(HashMapImplementation_E$E, HashMapImplementation);
function HashMapImplementation_E$E() {}
HashMapImplementation_E$E.prototype.is$Map = function(){return true};
// ********** Code for HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V, HashMapImplementation);
function HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V() {}
HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.is$Map = function(){return true};
// ********** Code for _DeletedKeySentinel **************
function _DeletedKeySentinel() {
  // Initializers done
}
// ********** Code for KeyValuePair **************
function KeyValuePair(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
KeyValuePair.prototype.get$value = function() { return this.value; };
KeyValuePair.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for KeyValuePair_K$V **************
$inherits(KeyValuePair_K$V, KeyValuePair);
function KeyValuePair_K$V(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
// ********** Code for LinkedHashMapImplementation **************
function LinkedHashMapImplementation() {
  // Initializers done
  this._map = new HashMapImplementation();
  this._list = new DoubleLinkedQueue_KeyValuePair_K$V();
}
LinkedHashMapImplementation.prototype.is$Map = function(){return true};
LinkedHashMapImplementation.prototype.$setindex = function(key, value) {
  if (this._map.containsKey(key)) {
    this._map.$index(key).get$element().set$value(value);
  }
  else {
    this._list.addLast(new KeyValuePair_K$V(key, value));
    this._map.$setindex(key, this._list.lastEntry());
  }
}
LinkedHashMapImplementation.prototype.$index = function(key) {
  var entry = this._map.$index(key);
  if (entry == null) return null;
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.remove = function(key) {
  var entry = this._map.remove(key);
  if (entry == null) return null;
  entry.remove();
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.getKeys = function() {
  var list = new Array(this.get$length());
  var index = 0;
  this._list.forEach(function _(entry) {
    list.$setindex(index++, entry.key);
  }
  );
  return list;
}
LinkedHashMapImplementation.prototype.getValues = function() {
  var list = new Array(this.get$length());
  var index = 0;
  this._list.forEach(function _(entry) {
    list.$setindex(index++, entry.value);
  }
  );
  return list;
}
LinkedHashMapImplementation.prototype.forEach = function(f) {
  this._list.forEach(function _(entry) {
    f(entry.key, entry.value);
  }
  );
}
LinkedHashMapImplementation.prototype.containsKey = function(key) {
  return this._map.containsKey(key);
}
LinkedHashMapImplementation.prototype.get$length = function() {
  return this._map.get$length();
}
LinkedHashMapImplementation.prototype.isEmpty = function() {
  return this.get$length() == 0;
}
LinkedHashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
// ********** Code for DoubleLinkedQueueEntry **************
function DoubleLinkedQueueEntry(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
DoubleLinkedQueueEntry.prototype.get$element = function() {
  return this._element;
}
// ********** Code for DoubleLinkedQueueEntry_E **************
$inherits(DoubleLinkedQueueEntry_E, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_E(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_E.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_E.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_E.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry_E.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_E.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueueEntry_KeyValuePair_K$V, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_KeyValuePair_K$V(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_KeyValuePair_K$V(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for _DoubleLinkedQueueEntrySentinel **************
$inherits(_DoubleLinkedQueueEntrySentinel, DoubleLinkedQueueEntry_E);
function _DoubleLinkedQueueEntrySentinel() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
_DoubleLinkedQueueEntrySentinel.prototype.remove = function() {
  $throw(const$3/*const EmptyQueueException()*/);
}
_DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry = function() {
  return null;
}
_DoubleLinkedQueueEntrySentinel.prototype.get$element = function() {
  $throw(const$3/*const EmptyQueueException()*/);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_E **************
$inherits(_DoubleLinkedQueueEntrySentinel_E, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_E() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V **************
$inherits(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V() {
  // Initializers done
  DoubleLinkedQueueEntry_KeyValuePair_K$V.call(this, null);
  this._link(this, this);
}
// ********** Code for DoubleLinkedQueue **************
function DoubleLinkedQueue() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_E();
}
DoubleLinkedQueue.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue.prototype.removeFirst = function() {
  return this._sentinel._next.remove();
}
DoubleLinkedQueue.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue.prototype.isEmpty = function() {
  return (this._sentinel._next === this._sentinel);
}
DoubleLinkedQueue.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
DoubleLinkedQueue.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
// ********** Code for DoubleLinkedQueue_IsolateEvent **************
$inherits(DoubleLinkedQueue_IsolateEvent, DoubleLinkedQueue);
function DoubleLinkedQueue_IsolateEvent() {}
// ********** Code for DoubleLinkedQueue_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueue_KeyValuePair_K$V, DoubleLinkedQueue);
function DoubleLinkedQueue_KeyValuePair_K$V() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
// ********** Code for StopwatchImplementation **************
function StopwatchImplementation() {}
StopwatchImplementation.start$ctor = function() {
  this._start = null;
  this._stop = null;
  // Initializers done
  this.start();
}
StopwatchImplementation.start$ctor.prototype = StopwatchImplementation.prototype;
StopwatchImplementation.prototype.start = function() {
  if (this._start == null) {
    this._start = Clock.now();
  }
  else {
    if (this._stop == null) {
      return;
    }
    this._start = Clock.now() - (this._stop - this._start);
  }
}
StopwatchImplementation.prototype.stop = function() {
  if (this._start == null) {
    return;
  }
  this._stop = Clock.now();
}
StopwatchImplementation.prototype.elapsed = function() {
  if (this._start == null) {
    return 0;
  }
  return (this._stop == null) ? (Clock.now() - this._start) : (this._stop - this._start);
}
StopwatchImplementation.prototype.elapsedInMs = function() {
  return $truncdiv((this.elapsed() * 1000), this.frequency());
}
StopwatchImplementation.prototype.frequency = function() {
  return Clock.frequency();
}
StopwatchImplementation.prototype.stop$0 = StopwatchImplementation.prototype.stop;
// ********** Code for StringBufferImpl **************
function StringBufferImpl(content) {
  // Initializers done
  this.clear();
  this.add(content);
}
StringBufferImpl.prototype.add = function(obj) {
  var str = obj.toString();
  if (str == null || str.isEmpty()) return this;
  this._buffer.add(str);
  this._length += str.length;
  return this;
}
StringBufferImpl.prototype.clear = function() {
  this._buffer = new Array();
  this._length = 0;
  return this;
}
StringBufferImpl.prototype.toString = function() {
  if (this._buffer.get$length() == 0) return "";
  if (this._buffer.get$length() == 1) return this._buffer.$index(0);
  var result = StringBase.concatAll(this._buffer);
  this._buffer.clear();
  this._buffer.add(result);
  return result;
}
StringBufferImpl.prototype.toString$0 = StringBufferImpl.prototype.toString;
// ********** Code for StringBase **************
function StringBase() {}
StringBase.join = function(strings, separator) {
  if (strings.get$length() == 0) return '';
  var s = strings.$index(0);
  for (var i = 1;
   i < strings.get$length(); i++) {
    s = s + separator + strings.$index(i);
  }
  return s;
}
StringBase.concatAll = function(strings) {
  return StringBase.join(strings, "");
}
// ********** Code for StringImplementation **************
StringImplementation = String;
StringImplementation.prototype.isEmpty = function() {
  return this.length == 0;
}
StringImplementation.prototype.hashCode = function() {
      'use strict';
      var hash = 0;
      for (var i = 0; i < this.length; i++) {
        hash = 0x1fffffff & (hash + this.charCodeAt(i));
        hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
        hash ^= hash >> 6;
      }

      hash = 0x1fffffff & (hash + (0x03ffffff & hash) << 3);
      hash ^= hash >> 11;
      return 0x1fffffff & (hash + (0x00003fff & hash) << 15);
}
StringImplementation.prototype.hashCode$0 = StringImplementation.prototype.hashCode;
// ********** Code for GlobalState **************
function GlobalState() {
  this.nextIsolateId = 0
  this.currentWorkerId = 0
  this.nextWorkerId = 1
  this.currentContext = null
  this.rootContext = null
  // Initializers done
  this.topEventLoop = new EventLoop();
  this.isolates = new HashMapImplementation();
  this.workers = new HashMapImplementation();
  this.mainWorker = new MainWorker();
  this._nativeInit();
}
GlobalState.prototype.get$useWorkers = function() {
  return this.supportsWorkers;
}
GlobalState.prototype.get$needSerialization = function() {
  return this.get$useWorkers();
}
GlobalState.prototype._nativeInit = function() {
      this.isWorker = typeof ($globalThis['importScripts']) != 'undefined';
      this.inWindow = typeof(window) !== 'undefined';
      this.supportsWorkers = this.isWorker ||
          ((typeof $globalThis['Worker']) != 'undefined');

      // if workers are supported, treat this as a main worker:
      if (this.supportsWorkers) {
        $globalThis.onmessage = function(e) {
          IsolateNatives._processWorkerMessage(this.mainWorker, e);
        };
      }
    
}
GlobalState.prototype.closeWorker = function() {
  if (this.isWorker) {
    if (!this.isolates.isEmpty()) return;
    this.mainWorker.postMessage(_serializeMessage(_map(['command', 'close'])));
  }
  else if (this.isolates.containsKey(this.rootContext.id) && this.workers.isEmpty() && !this.supportsWorkers && !this.inWindow) {
    $throw(new ExceptionImplementation("Program exited with open ReceivePorts."));
  }
}
// ********** Code for MainWorker **************
function MainWorker() {
  this.id = 0
  // Initializers done
}
MainWorker.prototype.get$id = function() { return this.id; };
MainWorker.prototype.set$id = function(value) { return this.id = value; };
MainWorker.prototype.postMessage = function(msg) {
  return $globalThis.postMessage(msg);
}
MainWorker.prototype.terminate = function() {

}
MainWorker.prototype.postMessage$1 = MainWorker.prototype.postMessage;
MainWorker.prototype.terminate$0 = MainWorker.prototype.terminate;
// ********** Code for _Worker **************
Object.prototype.$typeNameOf = function() {
  if ((typeof(window) != 'undefined' && window.constructor.name == 'DOMWindow')
      || typeof(process) != 'undefined') { // fast-path for Chrome and Node
    return this.constructor.name;
  }
  var str = Object.prototype.toString.call(this);
  str = str.substring(8, str.length - 1);
  if (str == 'Window') {
    str = 'DOMWindow';
  } else if (str == 'Document') {
    str = 'HTMLDocument';
  }
  return str;
}
function $dynamic(name) {
  var f = Object.prototype[name];
  if (f && f.methods) return f.methods;

  var methods = {};
  if (f) methods.Object = f;
  function $dynamicBind() {
    // Find the target method
    var obj = this;
    var tag = obj.$typeNameOf();
    var method = methods[tag];
    if (!method) {
      var table = $dynamicMetadata;
      for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (entry.map.hasOwnProperty(tag)) {
          method = methods[entry.tag];
          if (method) break;
        }
      }
    }
    method = method || methods.Object;
    // Patch the prototype, but don't overwrite an existing stub, like
    // the one on Object.prototype.
    var proto = Object.getPrototypeOf(obj);
    if (!proto.hasOwnProperty(name)) proto[name] = method;

    return method.apply(this, Array.prototype.slice.call(arguments));
  };
  $dynamicBind.methods = methods;
  Object.prototype[name] = $dynamicBind;
  return methods;
}
if (typeof $dynamicMetadata == 'undefined') $dynamicMetadata = [];

function $dynamicSetMetadata(inputTable) {
  // TODO: Deal with light isolates.
  var table = [];
  for (var i = 0; i < inputTable.length; i++) {
    var tag = inputTable[i][0];
    var tags = inputTable[i][1];
    var map = {};
    var tagNames = tags.split('|');
    for (var j = 0; j < tagNames.length; j++) {
      map[tagNames[j]] = true;
    }
    table.push({tag: tag, tags: tags, map: map});
  }
  $dynamicMetadata = table;
}
$dynamic("get$id").Worker = function() {
  return this.id;
}
$dynamic("set$id").Worker = function(i) {
  this.id = i;
}
$dynamic("postMessage").Worker = function(msg) {
  return this.postMessage(msg);
}
$dynamic("set$onmessage").Worker = function(f) {
  this.onmessage = f;
}
$dynamic("postMessage$1").Worker = function($0) {
  return this.postMessage($0);
};
// ********** Code for IsolateContext **************
function IsolateContext() {
  // Initializers done
  this.id = get$_globalState().nextIsolateId++;
  this.ports = new HashMapImplementation();
  this.initGlobals();
}
IsolateContext.prototype.get$id = function() { return this.id; };
IsolateContext.prototype.set$id = function(value) { return this.id = value; };
IsolateContext.prototype.initGlobals = function() {
  this.isolateStatics = {};
}
IsolateContext.prototype.eval = function(code) {
  var old = get$_globalState().currentContext;
  get$_globalState().currentContext = this;
  this._setGlobals();
  var result = null;
  try {
    result = code.call$0();
  } finally {
    get$_globalState().currentContext = old;
    if (old != null) old._setGlobals$0();
  }
  return result;
}
IsolateContext.prototype._setGlobals = function() {
  $globals = this.isolateStatics;
}
IsolateContext.prototype.lookup = function(id) {
  return this.ports.$index(id);
}
IsolateContext.prototype.register = function(portId, port) {
  if (this.ports.containsKey(portId)) {
    $throw(new ExceptionImplementation("Registry: ports must be registered only once."));
  }
  this.ports.$setindex(portId, port);
  get$_globalState().isolates.$setindex(this.id, this);
}
IsolateContext.prototype.unregister = function(portId) {
  this.ports.remove(portId);
  if (this.ports.isEmpty()) {
    get$_globalState().isolates.remove(this.id);
  }
}
IsolateContext.prototype._setGlobals$0 = IsolateContext.prototype._setGlobals;
IsolateContext.prototype.lookup$1 = IsolateContext.prototype.lookup;
// ********** Code for EventLoop **************
function EventLoop() {
  this.events = new DoubleLinkedQueue();
  // Initializers done
}
EventLoop.prototype.enqueue = function(isolate, fn, msg) {
  this.events.addLast(new IsolateEvent(isolate, fn, msg));
}
EventLoop.prototype.dequeue = function() {
  if (this.events.isEmpty()) return null;
  return this.events.removeFirst();
}
EventLoop.prototype.runIteration = function() {
  var event = this.dequeue();
  if (event == null) {
    get$_globalState().closeWorker();
    return false;
  }
  event.process();
  return true;
}
EventLoop._wrapSetTimeout = function() {
        return typeof window != 'undefined' ?
            function(a, b) { window.setTimeout(a, b); } : undefined;
    
}
EventLoop.prototype._runHelper = function() {
  var $this = this; // closure support
  var setTimeout = EventLoop._wrapSetTimeout();
  if (setTimeout != null) {
    function next() {
      if (!$this.runIteration()) return;
      setTimeout.call$2(next, 0);
    }
    next();
  }
  else {
    while (this.runIteration()) {
    }
  }
}
EventLoop.prototype.run = function() {
  if (!get$_globalState().isWorker) {
    this._runHelper();
  }
  else {
    try {
      this._runHelper();
    } catch (e) {
      var trace = _stackTraceOf(e);
      e = _toDartException(e);
      get$_globalState().mainWorker.postMessage(_serializeMessage(_map(['command', 'error', 'msg', ('' + e + '\n' + trace)])));
    }
  }
}
// ********** Code for IsolateEvent **************
function IsolateEvent(isolate, fn, message) {
  this.isolate = isolate;
  this.fn = fn;
  this.message = message;
  // Initializers done
}
IsolateEvent.prototype.process = function() {
  this.isolate.eval(this.fn);
}
// ********** Code for SendPortImpl **************
function SendPortImpl(_workerId, _isolateId, _receivePortId) {
  this._workerId = _workerId;
  this._isolateId = _isolateId;
  this._receivePortId = _receivePortId;
  // Initializers done
}
SendPortImpl.prototype.send = function(message, replyTo) {
  if (replyTo != null && !((replyTo instanceof SendPortImpl))) {
    $throw("SendPort::send: Illegal replyTo type.");
  }
  IsolateNatives._sendMessage(this._workerId, this._isolateId, this._receivePortId, _serializeMessage(message), _serializeMessage(replyTo));
}
SendPortImpl.prototype.call = function(message) {
  var result = new ReceivePortSingleShotImpl();
  this.send(message, result.toSendPort());
  return result;
}
SendPortImpl.prototype.$eq = function(other) {
  return ((other instanceof SendPortImpl)) && (this._workerId == other.get$_workerId()) && (this._isolateId == other.get$_isolateId()) && (this._receivePortId == other.get$_receivePortId());
}
SendPortImpl.prototype.hashCode = function() {
  return (this._workerId << 16) ^ (this._isolateId << 8) ^ this._receivePortId;
}
SendPortImpl.prototype.get$_receivePortId = function() { return this._receivePortId; };
SendPortImpl.prototype.get$_isolateId = function() { return this._isolateId; };
SendPortImpl.prototype.get$_workerId = function() { return this._workerId; };
SendPortImpl.prototype.call$1 = SendPortImpl.prototype.call;
SendPortImpl.prototype.hashCode$0 = SendPortImpl.prototype.hashCode;
SendPortImpl.prototype.send$1 = SendPortImpl.prototype.send;
// ********** Code for ReceivePortFactory **************
function ReceivePortFactory() {}
ReceivePortFactory.ReceivePort$factory = function() {
  return new ReceivePortImpl();
}
ReceivePortFactory.ReceivePort$singleShot$factory = function() {
  return new ReceivePortSingleShotImpl();
}
// ********** Code for ReceivePortImpl **************
function ReceivePortImpl() {
  this._id = $globals.ReceivePortImpl__nextFreeId++;
  // Initializers done
  get$_globalState().currentContext.register(this._id, this);
}
ReceivePortImpl.prototype.receive = function(onMessage) {
  this._callback = onMessage;
}
ReceivePortImpl.prototype.close = function() {
  this._callback = null;
  get$_globalState().currentContext.unregister(this._id);
}
ReceivePortImpl.prototype.toSendPort = function() {
  return new SendPortImpl(get$_globalState().currentWorkerId, get$_globalState().currentContext.id, this._id);
}
ReceivePortImpl.prototype.get$_callback = function() { return this._callback; };
ReceivePortImpl.prototype.set$_callback = function(value) { return this._callback = value; };
ReceivePortImpl.prototype._callback$2 = function($0, $1) {
  return this._callback.call$2($0, $1);
};
ReceivePortImpl.prototype.receive$1 = function($0) {
  return this.receive(to$call$2($0));
};
// ********** Code for ReceivePortSingleShotImpl **************
function ReceivePortSingleShotImpl() {
  this._dart_coreimpl_port = new ReceivePortImpl();
  // Initializers done
}
ReceivePortSingleShotImpl.prototype.receive = function(callback) {
  var $this = this; // closure support
  this._dart_coreimpl_port.receive((function (message, replyTo) {
    $this._dart_coreimpl_port.close();
    callback(message, replyTo);
  })
  );
}
ReceivePortSingleShotImpl.prototype.toSendPort = function() {
  return this._dart_coreimpl_port.toSendPort();
}
ReceivePortSingleShotImpl.prototype.receive$1 = function($0) {
  return this.receive(to$call$2($0));
};
// ********** Code for IsolateNatives **************
function IsolateNatives() {}
IsolateNatives.spawn = function(isolate, isLight) {
  var completer = new CompleterImpl();
  var port = ReceivePortFactory.ReceivePort$singleShot$factory();
  port.receive((function (msg, replyPort) {
    completer.complete(replyPort);
  })
  );
  if (get$_globalState().get$useWorkers() && !isLight) {
    IsolateNatives._startWorker(isolate, port.toSendPort());
  }
  else {
    IsolateNatives._startNonWorker(isolate, port.toSendPort());
  }
  return completer.get$future();
}
IsolateNatives._startWorker = function(runnable, replyPort) {
  var factoryName = IsolateNatives._getJSConstructorName(runnable);
  if (get$_globalState().isWorker) {
    get$_globalState().mainWorker.postMessage(_serializeMessage(_map(['command', 'spawn-worker', 'factoryName', factoryName, 'replyPort', replyPort])));
  }
  else {
    IsolateNatives._spawnWorker(factoryName, _serializeMessage(replyPort));
  }
}
IsolateNatives.get$_thisScript = function() {
  return $globals.IsolateNatives__thisScriptCache != null ? $globals.IsolateNatives__thisScriptCache : IsolateNatives._computeThisScript();
}
IsolateNatives._computeThisScript = function() {
      if (!$globalState.supportsWorkers || $globalState.isWorker) return null;

      // TODO(5334778): Find a cross-platform non-brittle way of getting the
      // currently running script.
      var scripts = document.getElementsByTagName('script');
      // The scripts variable only contains the scripts that have already been
      // executed. The last one is the currently running script.
      var script = scripts[scripts.length - 1];
      var src = script && script.src;
      if (!src) {
        // TODO()
        src = "FIXME:5407062" + "_" + Math.random().toString();
        if (script) script.src = src;
      }
      IsolateNatives._thisScriptCache = src;
      return src;
    
}
IsolateNatives._newWorker = function(url) {
  return new Worker(url);
}
IsolateNatives._spawnWorker = function(factoryName, serializedReplyPort) {
  var worker = IsolateNatives._newWorker(IsolateNatives.get$_thisScript());
  worker.set$onmessage((function (e) {
    IsolateNatives._processWorkerMessage(worker, e);
  })
  );
  var workerId = get$_globalState().nextWorkerId++;
  worker.set$id(workerId);
  get$_globalState().workers.$setindex(workerId, worker);
  worker.postMessage(_serializeMessage(_map(['command', 'start', 'id', workerId, 'replyTo', serializedReplyPort, 'factoryName', factoryName])));
}
IsolateNatives._getEventData = function(e) {
  return e.data
}
IsolateNatives._processWorkerMessage = function(sender, e) {
  var msg = _deserializeMessage(IsolateNatives._getEventData(e));
  switch (msg.$index('command')) {
    case 'start':

      get$_globalState().currentWorkerId = msg.$index('id');
      var runnerObject = IsolateNatives._allocate(IsolateNatives._getJSConstructorFromName(msg.$index('factoryName')));
      var serializedReplyTo = msg.$index('replyTo');
      get$_globalState().topEventLoop.enqueue(new IsolateContext(), function function_() {
        var replyTo = _deserializeMessage(serializedReplyTo);
        IsolateNatives._startIsolate(runnerObject, replyTo);
      }
      , 'worker-start');
      get$_globalState().topEventLoop.run();
      break;

    case 'spawn-worker':

      IsolateNatives._spawnWorker(msg.$index('factoryName'), msg.$index('replyPort'));
      break;

    case 'message':

      IsolateNatives._sendMessage(msg.$index('workerId'), msg.$index('isolateId'), msg.$index('portId'), msg.$index('msg'), msg.$index('replyTo'));
      get$_globalState().topEventLoop.run();
      break;

    case 'close':

      IsolateNatives._log("Closing Worker");
      get$_globalState().workers.remove(sender.get$id());
      sender.terminate$0();
      get$_globalState().topEventLoop.run();
      break;

    case 'log':

      IsolateNatives._log(msg.$index('msg'));
      break;

    case 'print':

      if (get$_globalState().isWorker) {
        get$_globalState().mainWorker.postMessage(_serializeMessage(_map(['command', 'print', 'msg', msg])));
      }
      else {
        print(msg.$index('msg'));
      }
      break;

    case 'error':

      $throw(msg.$index('msg'));

  }
}
IsolateNatives._log = function(msg) {
  if (get$_globalState().isWorker) {
    get$_globalState().mainWorker.postMessage(_serializeMessage(_map(['command', 'log', 'msg', msg])));
  }
  else {
    try {
      IsolateNatives._consoleLog(msg);
    } catch (e) {
      var trace = _stackTraceOf(e);
      e = _toDartException(e);
      $throw(new ExceptionImplementation(trace));
    }
  }
}
IsolateNatives._consoleLog = function(msg) {
  $globalThis.console.log(msg);
}
IsolateNatives._getJSConstructor = function(runnable) {
      return runnable.constructor;
    
}
IsolateNatives._getJSConstructorName = function(runnable) {
      return runnable.constructor.name;
    
}
IsolateNatives._getJSConstructorFromName = function(factoryName) {
      return $globalThis[factoryName];
    
}
IsolateNatives._allocate = function(ctor) {
  return new ctor();
}
IsolateNatives._startNonWorker = function(runnable, replyTo) {
  var spawned = new IsolateContext();
  var ctor = IsolateNatives._getJSConstructor(runnable);
  get$_globalState().topEventLoop.enqueue(spawned, function function_() {
    IsolateNatives._startIsolate(IsolateNatives._allocate(ctor), replyTo);
  }
  , 'nonworker start');
}
IsolateNatives._startIsolate = function(isolate, replyTo) {
  _fillStatics(get$_globalState().currentContext);
  var port = ReceivePortFactory.ReceivePort$factory();
  replyTo.send("spawned"/*null._SPAWNED_SIGNAL*/, port.toSendPort());
  isolate._run(port);
}
IsolateNatives._sendMessage = function(workerId, isolateId, receivePortId, message, replyTo) {
  if (workerId == get$_globalState().currentWorkerId) {
    var isolate = get$_globalState().isolates.$index(isolateId);
    if (isolate == null) return;
    var receivePort = isolate.lookup$1(receivePortId);
    if (receivePort == null) return;
    get$_globalState().topEventLoop.enqueue(isolate, (function () {
      if (receivePort.get$_callback() != null) {
        receivePort._callback$2(_deserializeMessage(message), _deserializeMessage(replyTo));
      }
    })
    , 'receive ' + message);
  }
  else {
    var worker;
    if (get$_globalState().isWorker) {
      worker = get$_globalState().mainWorker;
    }
    else {
      worker = get$_globalState().workers.$index(workerId);
    }
    worker.postMessage$1(_serializeMessage(_map(['command', 'message', 'workerId', workerId, 'isolateId', isolateId, 'portId', receivePortId, 'msg', message, 'replyTo', replyTo])));
  }
}
// ********** Code for MessageTraverser **************
function MessageTraverser() {
  // Initializers done
}
MessageTraverser.isPrimitive = function(x) {
  return (x == null) || ((typeof(x) == 'string')) || ((typeof(x) == 'number')) || ((typeof(x) == 'boolean'));
}
MessageTraverser.prototype.traverse = function(x) {
  if (MessageTraverser.isPrimitive(x)) return this.visitPrimitive(x);
  this._taggedObjects = new Array();
  var result;
  try {
    result = this._dispatch(x);
  } finally {
    this._cleanup();
  }
  return result;
}
MessageTraverser.prototype._cleanup = function() {
  var len = this._taggedObjects.get$length();
  for (var i = 0;
   i < len; i++) {
    this._clearAttachedInfo(this._taggedObjects.$index(i));
  }
  this._taggedObjects = null;
}
MessageTraverser.prototype._attachInfo = function(o, info) {
  this._taggedObjects.add(o);
  this._setAttachedInfo(o, info);
}
MessageTraverser.prototype._getInfo = function(o) {
  return this._getAttachedInfo(o);
}
MessageTraverser.prototype._dispatch = function(x) {
  if (MessageTraverser.isPrimitive(x)) return this.visitPrimitive(x);
  if (!!(x && x.is$List())) return this.visitList(x);
  if (!!(x && x.is$Map())) return this.visitMap(x);
  if ((x instanceof SendPortImpl)) return this.visitSendPort(x);
  if ((x instanceof ReceivePortImpl)) return this.visitReceivePort(x);
  if ((x instanceof ReceivePortSingleShotImpl)) return this.visitReceivePortSingleShot(x);
  $throw(("Message serialization: Illegal value " + x + " passed"));
}
MessageTraverser.prototype._clearAttachedInfo = function(o) {
  o['__MessageTraverser__attached_info__'] = (void 0);
}
MessageTraverser.prototype._setAttachedInfo = function(o, info) {
  o['__MessageTraverser__attached_info__'] = info;
}
MessageTraverser.prototype._getAttachedInfo = function(o) {
  return o['__MessageTraverser__attached_info__'];
}
// ********** Code for Copier **************
$inherits(Copier, MessageTraverser);
function Copier() {
  // Initializers done
  MessageTraverser.call(this);
}
Copier.prototype.visitPrimitive = function(x) {
  return x;
}
Copier.prototype.visitList = function(list) {
  var copy = this._getInfo(list);
  if (copy != null) return copy;
  var len = list.get$length();
  copy = new Array(len);
  this._attachInfo(list, copy);
  for (var i = 0;
   i < len; i++) {
    copy.$setindex(i, this._dispatch(list.$index(i)));
  }
  return copy;
}
Copier.prototype.visitMap = function(map) {
  var $this = this; // closure support
  var copy = this._getInfo(map);
  if (copy != null) return copy;
  copy = new HashMapImplementation();
  this._attachInfo(map, copy);
  map.forEach((function (key, val) {
    copy.$setindex($this._dispatch(key), $this._dispatch(val));
  })
  );
  return copy;
}
Copier.prototype.visitSendPort = function(port) {
  return new SendPortImpl(port._workerId, port._isolateId, port._receivePortId);
}
Copier.prototype.visitReceivePort = function(port) {
  return port.toSendPort();
}
Copier.prototype.visitReceivePortSingleShot = function(port) {
  return port.toSendPort();
}
// ********** Code for Serializer **************
$inherits(Serializer, MessageTraverser);
function Serializer() {
  this._nextFreeRefId = 0
  // Initializers done
  MessageTraverser.call(this);
}
Serializer.prototype.visitPrimitive = function(x) {
  return x;
}
Serializer.prototype.visitList = function(list) {
  var copyId = this._getInfo(list);
  if (copyId != null) return ['ref', copyId];
  var id = this._nextFreeRefId++;
  this._attachInfo(list, id);
  var jsArray = this._serializeList(list);
  return ['list', id, jsArray];
}
Serializer.prototype.visitMap = function(map) {
  var copyId = this._getInfo(map);
  if (copyId != null) return ['ref', copyId];
  var id = this._nextFreeRefId++;
  this._attachInfo(map, id);
  var keys = this._serializeList(map.getKeys());
  var values = this._serializeList(map.getValues());
  return ['map', id, keys, values];
}
Serializer.prototype.visitSendPort = function(port) {
  return ['sendport', port._workerId, port._isolateId, port._receivePortId];
}
Serializer.prototype.visitReceivePort = function(port) {
  return this.visitSendPort(port.toSendPort());
  ;
}
Serializer.prototype.visitReceivePortSingleShot = function(port) {
  return this.visitSendPort(port.toSendPort());
}
Serializer.prototype._serializeList = function(list) {
  var len = list.get$length();
  var result = new Array(len);
  for (var i = 0;
   i < len; i++) {
    result.$setindex(i, this._dispatch(list.$index(i)));
  }
  return result;
}
// ********** Code for Deserializer **************
function Deserializer() {
  // Initializers done
}
Deserializer.isPrimitive = function(x) {
  return (x == null) || ((typeof(x) == 'string')) || ((typeof(x) == 'number')) || ((typeof(x) == 'boolean'));
}
Deserializer.prototype.deserialize = function(x) {
  if (Deserializer.isPrimitive(x)) return x;
  this._deserialized = new HashMapImplementation();
  return this._deserializeHelper(x);
}
Deserializer.prototype._deserializeHelper = function(x) {
  if (Deserializer.isPrimitive(x)) return x;
  switch (x.$index(0)) {
    case 'ref':

      return this._deserializeRef(x);

    case 'list':

      return this._deserializeList(x);

    case 'map':

      return this._deserializeMap(x);

    case 'sendport':

      return this._deserializeSendPort(x);

    default:

      $throw("Unexpected serialized object");

  }
}
Deserializer.prototype._deserializeRef = function(x) {
  var id = x.$index(1);
  var result = this._deserialized.$index(id);
  return result;
}
Deserializer.prototype._deserializeList = function(x) {
  var id = x.$index(1);
  var dartList = x.$index(2);
  this._deserialized.$setindex(id, dartList);
  var len = dartList.get$length();
  for (var i = 0;
   i < len; i++) {
    dartList.$setindex(i, this._deserializeHelper(dartList.$index(i)));
  }
  return dartList;
}
Deserializer.prototype._deserializeMap = function(x) {
  var result = new HashMapImplementation();
  var id = x.$index(1);
  this._deserialized.$setindex(id, result);
  var keys = x.$index(2);
  var values = x.$index(3);
  var len = keys.get$length();
  for (var i = 0;
   i < len; i++) {
    var key = this._deserializeHelper(keys.$index(i));
    var value = this._deserializeHelper(values.$index(i));
    result.$setindex(key, value);
  }
  return result;
}
Deserializer.prototype._deserializeSendPort = function(x) {
  var workerId = x.$index(1);
  var isolateId = x.$index(2);
  var receivePortId = x.$index(3);
  return new SendPortImpl(workerId, isolateId, receivePortId);
}
// ********** Code for _ArgumentMismatchException **************
$inherits(_ArgumentMismatchException, ClosureArgumentMismatchException);
function _ArgumentMismatchException(_message) {
  this._dart_coreimpl_message = _message;
  // Initializers done
  ClosureArgumentMismatchException.call(this);
}
_ArgumentMismatchException.prototype.toString = function() {
  return ("Closure argument mismatch: " + this._dart_coreimpl_message);
}
_ArgumentMismatchException.prototype.toString$0 = _ArgumentMismatchException.prototype.toString;
// ********** Code for _FunctionImplementation **************
_FunctionImplementation = Function;
_FunctionImplementation.prototype._genStub = function(argsLength, names) {
      // Fast path #1: if no named arguments and arg count matches
      if (this.length == argsLength && !names) {
        return this;
      }

      var paramsNamed = this.$optional ? (this.$optional.length / 2) : 0;
      var paramsBare = this.length - paramsNamed;
      var argsNamed = names ? names.length : 0;
      var argsBare = argsLength - argsNamed;

      // Check we got the right number of arguments
      if (argsBare < paramsBare || argsLength > this.length ||
          argsNamed > paramsNamed) {
        return function() {
          $throw(new _ArgumentMismatchException(
            'Wrong number of arguments to function. Expected ' + paramsBare +
            ' positional arguments and at most ' + paramsNamed +
            ' named arguments, but got ' + argsBare +
            ' positional arguments and ' + argsNamed + ' named arguments.'));
        };
      }

      // First, fill in all of the default values
      var p = new Array(paramsBare);
      if (paramsNamed) {
        p = p.concat(this.$optional.slice(paramsNamed));
      }
      // Fill in positional args
      var a = new Array(argsLength);
      for (var i = 0; i < argsBare; i++) {
        p[i] = a[i] = '$' + i;
      }
      // Then overwrite with supplied values for optional args
      var lastParameterIndex;
      var namesInOrder = true;
      for (var i = 0; i < argsNamed; i++) {
        var name = names[i];
        a[i + argsBare] = name;
        var j = this.$optional.indexOf(name);
        if (j < 0 || j >= paramsNamed) {
          return function() {
            $throw(new _ArgumentMismatchException(
              'Named argument "' + name + '" was not expected by function.' +
              ' Did you forget to mark the function parameter [optional]?'));
          };
        } else if (lastParameterIndex && lastParameterIndex > j) {
          namesInOrder = false;
        }
        p[j + paramsBare] = name;
        lastParameterIndex = j;
      }

      if (this.length == argsLength && namesInOrder) {
        // Fast path #2: named arguments, but they're in order and all supplied.
        return this;
      }

      // Note: using Function instead of 'eval' to get a clean scope.
      // TODO(jmesserly): evaluate the performance of these stubs.
      var f = 'function(' + a.join(',') + '){return $f(' + p.join(',') + ');}';
      return new Function('$f', 'return ' + f + '').call(null, this);
    
}
// ********** Code for top level **************
function get$_globalState() {
  return $globalState;
}
function set$_globalState(val) {
  $globalState = val;
}
function startRootIsolate(entry) {
  set$_globalState(new GlobalState());
  if (get$_globalState().isWorker) return;
  var rootContext = new IsolateContext();
  get$_globalState().rootContext = rootContext;
  _fillStatics(rootContext);
  get$_globalState().currentContext = rootContext;
  rootContext.eval(entry);
  get$_globalState().topEventLoop.run();
}
function _fillStatics(context) {
    $globals = context.isolateStatics;
    $static_init();
}
function _serializeMessage(message) {
  if (get$_globalState().get$needSerialization()) {
    return new Serializer().traverse(message);
  }
  else {
    return new Copier().traverse(message);
  }
}
function _deserializeMessage(message) {
  if (get$_globalState().get$needSerialization()) {
    return new Deserializer().deserialize(message);
  }
  else {
    return message;
  }
}
//  ********** Library A very pretty stop watch class **************
// ********** Code for PrettyStopwatch **************
function PrettyStopwatch() {}
PrettyStopwatch.start$ctor = function() {
  // Initializers done
  this.timer = new StopwatchImplementation.start$ctor();
}
PrettyStopwatch.start$ctor.prototype = PrettyStopwatch.prototype;
PrettyStopwatch.prototype.stop = function() {
  this.timer.stop();
  print("Elapsed time: " + this.timer.elapsedInMs() + "ms");
}
PrettyStopwatch.prototype.stop$0 = PrettyStopwatch.prototype.stop;
// ********** Code for top level **************
//  ********** Library light weight isolates for solving fibs **************
// ********** Code for FibSolver **************
$inherits(FibSolver, Isolate);
function FibSolver() {
  // Initializers done
  Isolate.light$ctor.call(this);
}
FibSolver.prototype.main = function() {
  var answers = new HashMapImplementation();
  this.get$port().receive((function (message, replyTo) {
    message.forEach$1((function (i) {
      answers.$setindex(i, fib(i));
    })
    );
    replyTo.send$1(answers);
  })
  );
}
// ********** Code for top level **************
function fib(i) {
  if (i < 2) return i;
  return fib(i - 2) + fib(i - 1);
}
//  ********** Library light **************
// ********** Code for top level **************
function main() {
  var fib_solver = new FibSolver();
  var list = [5, 40, 39, 32, 6, 41];
  var timer = new PrettyStopwatch.start$ctor(), completer = new CompleterImpl();
  completer.get$future().then$1((function (args) {
    timer.stop$0();
  })
  );
  spawn(fib_solver, list, completer);
}
function spawn(fib_solver, list, completer) {
  var done1 = false, done2 = false;
  fib_solver.spawn$0().then$1((function (port) {
    port.call$1(list.getRange$2(0, 3)).receive$1((function (message, replyTo) {
      message.forEach$1((function (i, answer) {
        print("fib(" + i + ") = " + answer);
      })
      );
      done1 = true;
      if (done2) completer.complete$1(true);
    })
    );
  })
  );
  fib_solver.spawn$0().then$1((function (port) {
    port.call$1(list.getRange$2(3, 3)).receive$1((function (message, replyTo) {
      message.forEach$1((function (i, answer) {
        print("fib(" + i + ") = " + answer);
      })
      );
      done2 = true;
      if (done1) completer.complete$1(true);
    })
    );
  })
  );
}
// ********** Generic Type Inheritance **************
/** Implements extends for generic types. */
function $inheritsMembers(child, parent) {
  child = child.prototype;
  parent = parent.prototype;
  Object.getOwnPropertyNames(parent).forEach(function(name) {
    if (typeof(child[name]) == 'undefined') child[name] = parent[name];
  });
}
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_E, DoubleLinkedQueueEntry_E);
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, DoubleLinkedQueueEntry_KeyValuePair_K$V);
// 1 dynamic types.
// 1 types
// 0 !leaf
//  ********** Globals **************
function $static_init(){
  $globals.ReceivePortImpl__nextFreeId = 1;
}
var const$3 = new EmptyQueueException()/*const EmptyQueueException()*/;
var const$4 = new _DeletedKeySentinel()/*const _DeletedKeySentinel()*/;
startRootIsolate(main);
