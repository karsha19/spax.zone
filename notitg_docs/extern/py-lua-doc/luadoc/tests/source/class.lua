----------------------
--- a module containing some classes.
--- @module classes

local _M = {}

---- a useful class.
--- a long desc on
--- several lines
--- @class Bonzo

_M.Bonzo = class()

--- a method.
--- function one; reference to @{one.md.classes|documentation}
function Bonzo:one()

end

--- a metamethod
--- function __tostring
function Bonzo:__tostring()

end

return M