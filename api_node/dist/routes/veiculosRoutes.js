"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VeiculosController = require('../controllers/VeiculosController'); var _VeiculosController2 = _interopRequireDefault(_VeiculosController);

const router = new (0, _express.Router)();

router.get('/', _VeiculosController2.default.index);
router.post('/', _VeiculosController2.default.insert);
router.put('/:id', _VeiculosController2.default.update);
router.get('/:id', _VeiculosController2.default.show);
router.delete('/:id', _VeiculosController2.default.delete);


exports. default = router;
