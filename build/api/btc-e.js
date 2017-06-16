(function(){var t,n,e;t=require("../conf"),n=require("btce-deal"),e=function(){function e(){}e.displayName="API";var r,u;return e.prototype,r=new n.Public(t.host),u=new n.Trade(t.key,t.secret,t.host),e.prototype.getTrades=function(t,n,e){return r.getTrades(t,n).then(function(t){return e(null,t)}).catch(function(t){return e(t)})},e.prototype.getInfo=function(t){return r.getInfo().then(function(n){return t(null,n)}).catch(function(n){return t(n)})},e.prototype.getTicker=function(t,n){return r.getTicker(t).then(function(t){return n(null,t)}).catch(function(t){return n(t)})},e.prototype.ordersRequest=function(t,n){return u.getActiveOrders(t).then(function(t){return n(null,t)}).catch(function(t){return n(t)})},e.prototype.balanceRequest=function(t,n){return u.getInfo().then(function(e){return n(null,e.funds[t.name],e.funds[t.nameTwo])}).catch(function(t){return n(t)})},e.prototype.tradeSetOrder=function(t,n,e,r,o){return u.trade({pair:t,type:n,rate:e,amount:r}).then(function(t){return o(null,t)}).catch(function(t){return o(t)})},e.prototype.tradeCancelOrder=function(t,n){return u.cancelOrder(t).then(function(t){return n(null,t)}).catch(function(t){return n(t)})},e.prototype.tradeGetHistory=function(t,n,e){return u.getTradeHistory({pair:t,count:n}).then(function(t){return e(null,t)}).catch(function(t){return e(t)})},e.prototype.setNonce=function(t){u.nonce=t},e}(),module.exports=e}).call(this);