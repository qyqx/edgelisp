EdgeLisp
========

EdgeLisp is a Lisp for JavaScript.

<a href="http://manuel.github.com/edgelisp/repl.html">Try the REPL</a>

Contact
-------

EdgeLisp is developed by Manuel Simoni <msimoni@gmail.com>

Features
--------

* Classes integrated with the JS types
* Multiple-dispatching generic functions
* Separate function and variable namespaces (Lisp-2)
* Optional, keyword, and rest parameters
* Runtime type-checked function parameters
* Nonlocal exits; stack unwind protection
* Condition system with restarts
* `defmacro`
* Slot access through (overridable) generic functions
* (Slightly) Generalized references
* Inline JavaScript, with escaping back into Lisp, (and back into JS...)
* Optional dynamically-scoped variables
* Everything-is-an-object
* In-browser REPL
* Scheme numerical tower

Planned Features
----------------

* Multiple inheritance
* Hygienic defmacro, based on SRFI 72
* Sequence protocol based on D's ranges

Compatibility
-------------

EdgeLisp aspires to compile to EMCAScript, 3rd Edition (JavaScript
1.5), but currently uses the nonstandard extensions __proto__ (for
inheritance) and function.caller (for debugging).

License
-------

You choose the license for Lisp code *you write* in EdgeLisp.
(EdgeLisp-compiled programs are not considered derived works of the
EdgeLisp compiler, runtime, and included Lisp files.)

If you *modify* EdgeLisp (compiler, runtime, or included Lisp files),
you must make the modified version available to your users under the
AGPL.  See file COPYING.

Thanks
------

* Chris Double for parsing expression grammar
  https://github.com/doublec/jsparse
* Douglas Crockford for JSON parser
  https://github.com/douglascrockford/JSON-js
* Danny Yoo for numerical tower
  https://github.com/dyoo/js-numbers
