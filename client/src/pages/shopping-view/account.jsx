import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import accImg from '../../assets/account.jpg'
import Address from '@/components/shopping-view/address';
import ShoppingOrders from '@/components/shopping-view/orders';

function ShoppingAccount(){
    return <div className="flex flex-col">
        <div className="relative h-[350px] w-full overflow-hidden">
            <img src={accImg} className='h-full w-full object-cover object-center' />
        </div>
        <div className='container mx-auto grid grid-cols-1 gap-8 py-8'>
            <div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm'>
                <Tabs defaultValue='address'>
                    <TabsList className="flex items-center justify-center gap-12">
                        <TabsTrigger className="p-4 pl-8 pr-8 " value="address" >Address </TabsTrigger>
                        <TabsTrigger className="p-4 pl-8 pr-8 " value="orders" >Orders </TabsTrigger>
                    </TabsList>
                    <TabsContent value='address'>
                        <Address/>
                    </TabsContent>
                    <TabsContent value='orders'>
                        <ShoppingOrders/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>;
}
export default ShoppingAccount;