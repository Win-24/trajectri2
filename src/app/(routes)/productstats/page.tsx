
import SidebarStudio from "@/components/shared/Navigation/Sidebar/SidebarStudio";
import db from "@/vendor/db";
import { formatCurrency, formatNumber } from "@/utils/formatters";



async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: { pricePaidInCents: true },
        _count: true
    })

    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
    }
}

async function getProductData() {
    const [activeCount, inactiveCount] = await Promise.all([
        db.product.count({ where: { isAvailableForPurchase: true }}),
        db.product.count({ where: { isAvailableForPurchase: false }})
    ])

    return { activeCount, inactiveCount }
}


const ProductStats = async () => {
    const [salesData, productData] = await Promise.all([
        getSalesData(),
        getProductData(),
    ])


  return (
    <div className="flex flex-col w-full h-full">
        <SidebarStudio />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-8">
            <div className="w-full p-8">
                <ProductStatsCard 
                    title="Sales" 
                    subtitle= {formatCurrency(salesData.amount)}
                    body={`${formatNumber(salesData.numberOfSales)} Orders`}
                />
            </div>

            <div className="w-full p-8">
                <ProductStatsCard 
                    title="Customers" 
                    subtitle= {formatCurrency(salesData.amount)}
                    body={`${formatNumber(salesData.numberOfSales)} Orders`}
                />
            </div>

            <div className="w-full p-8">
                <ProductStatsCard 
                    title="Active Products" 
                    subtitle= {`${formatNumber(productData.activeCount)}`}
                    body={`${formatNumber(productData.inactiveCount)} Inactive Products`} 
                />
            </div>
        </div>
    </div>
  )


    type ProductStatsCardProps = {
        title: string;
        subtitle: string;
        body: string;
    }

    function ProductStatsCard({ title, subtitle, body }: ProductStatsCardProps) {
        return (
            <div className="max-w-sm rounded-lg border-[1px] border-zinc-300 overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-700">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}

                <div className="px-6 p-4 dark:text-white">
                    <div className="pb-2 border-b-[1px] border-zinc-300 dark:border-zinc-500 font-bold text-xl text-zinc-500 mb-2 dark:text-white">{title}</div>

                    <p className="text-gray-700 text-3xl border-b-[1px] border-zinc-300 mb-2 py-2 dark:text-white dark:border-zinc-500">
                        {subtitle}
                    </p>
                    
                    <p className="text-gray-700 text-base dark:text-white">
                        {body}
                    </p>
                </div>
                
                {/* <div className="px-6 pt-4 pb-2 dark:text-white">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>
        );
    }

}

export default ProductStats
