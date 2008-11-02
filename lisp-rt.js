/* CyberLisp: A Lisp that compiles to JavaScript 1.5.
   
   Copyright (C) 2008 by Manuel Simoni.
   
   CyberLisp is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published
   by the Free Software Foundation; either version 2, or (at your
   option) any later version.
   
   CyberLisp is distributed in the hope that it will be useful, but
   WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with GNU Emacs; see the file COPYING.  If not, write to the
   Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
   Boston, MA 02110-1301, USA. */
   
/* Lisp runtime: this file should contain all functions needed to run
   compiled Lisp code.

   Lisp code that does use `eval' will always need to include the
   compiler, `lisp.js', too. */

function lisp_arity_min(length, min)
{
    if (length < min)
        throw Error("Too few arguments ");
}

function lisp_arity_min_max(length, min, max)
{
    lisp_arity_min(length, min);
    if (length > max)
        throw Error("Too many arguments ");
}

/* Called with a function's arguments and the count of positional
   (required and optional) parameters of the function, returns the
   sequence of arguments to which the rest parameter is bound. */
function lisp_rest_param(_arguments, pos_ct) {
    // Don't include calling convention argument.
    var offset = 1 + pos_ct;
    var args = [];
    var len = _arguments.length;
    for (var i = offset; i < len; i++) {
        args[i - offset] = _arguments[i];
    }
    return args;
}

function lisp_is_true(obj)
{
    return (obj != false) && (obj != null);
}

lisp_set("true", "true");
lisp_set("false", "false");
lisp_set("null", "null");
