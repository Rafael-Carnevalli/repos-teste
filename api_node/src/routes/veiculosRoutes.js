import { Router } from "express";
import veiculosController from "../controllers/VeiculosController";

const router = new Router();

router.get('/', veiculosController.index);
router.post('/', veiculosController.insert);
router.put('/:id', veiculosController.update);
router.get('/:id', veiculosController.show);
router.delete('/:id', veiculosController.delete);


export default router;
