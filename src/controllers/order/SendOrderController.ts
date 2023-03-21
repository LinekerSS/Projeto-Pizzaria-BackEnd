import { Request, Response } from 'express';
import { SendOrderService } from '../../services/orders/SendOrderService';

class SendOrderController {
    async handle(req: Request, res: Response) {
        // Primeiro parametro preciso enviar para o serviço a funcionalidade
        const { order_id } = req.body;
        
        const sendOrder = new SendOrderService();

        const order = await sendOrder.execute({
            order_id
        });

        return res.json(order);
    }
}

export { SendOrderController }