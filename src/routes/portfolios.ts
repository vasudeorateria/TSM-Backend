import {Router} from "express";
import {getPortfolioImages, getPortfolios} from "../controllers/portfolios";

const route = Router()

// Read
route.get('/', async (req, res) => {
    try {
        const portfolios = await getPortfolios()
        res.status(200).send(portfolios)
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

route.get('/:portfolioId/images' , async (req,res)=>{
    try {
        const portfolioId = Number(req.params.portfolioId)
        const portfolioImages = await getPortfolioImages(portfolioId)
        res.status(200).send(portfolioImages)
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})
export const portfolioRoute = route