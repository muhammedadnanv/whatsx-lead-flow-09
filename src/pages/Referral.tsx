

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Share2, 
  Gift, 
  Users, 
  DollarSign, 
  Copy, 
  Check, 
  Mail, 
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Star,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const [copied, setCopied] = useState(false);
  const [referralCode] = useState("WHATSX-USER123"); // In real app, this would come from user data
  const [referralLink] = useState(`https://whatsx-nine.vercel.app/?ref=${referralCode}`);
  const { toast } = useToast();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const marketingMessages = {
    short: "🚀 Transform your website visitors into WhatsApp leads with WhatsX! Get 87% higher conversion rates with AI-powered forms. Try it free:",
    medium: "📱 I just discovered WhatsX - an amazing AI-powered platform that turns website visitors into WhatsApp leads! \n\n✅ 87% higher conversion rates\n✅ AI chatbots that work 24/7\n✅ Easy drag-and-drop form builder\n✅ Seamless integrations\n\nPerfect for anyone looking to boost their lead generation. Check it out:",
    long: "Hey! I wanted to share something incredible I found - WhatsX! 🔥\n\nIt's an AI-powered lead generation platform that captures website visitors and delivers them straight to your WhatsApp. The results are mind-blowing:\n\n🎯 87% higher conversion rates vs traditional forms\n⚡ 10x faster lead response time\n🤖 AI agents that work 24/7\n🛠️ Drag-and-drop form builder\n🔗 50+ integrations with popular tools\n\nThousands of businesses are already using it to transform their WhatsApp interactions. You can try it completely free - no credit card required!\n\nDefinitely worth checking out:"
  };

  const handleShare = (platform: string, messageType: keyof typeof marketingMessages = 'medium') => {
    const shareText = marketingMessages[messageType];
    const shareUrl = referralLink;
    
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
        break;
      case "email":
        url = `mailto:?subject=${encodeURIComponent("Check out WhatsX - AI-Powered WhatsApp Lead Generation")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleCopyMessage = (messageType: keyof typeof marketingMessages) => {
    const message = marketingMessages[messageType] + " " + referralLink;
    handleCopy(message, "Marketing message");
  };

  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 2840,
    pendingEarnings: 480,
    conversionRate: 67
  };

  const referralHistory = [
    { name: "John D.", date: "2 days ago", status: "Active", earnings: 240 },
    { name: "Sarah M.", date: "1 week ago", status: "Active", earnings: 240 },
    { name: "Mike R.", date: "2 weeks ago", status: "Pending", earnings: 240 },
    { name: "Lisa K.", date: "3 weeks ago", status: "Active", earnings: 240 }
  ];

  return (
    <Layout
      seoTitle="Share WhatsX - Referral Program | Earn by Sharing AI-Powered Lead Generation"
      seoDescription="Share WhatsX with your network and help others transform their website visitors into WhatsApp leads. Get rewarded for spreading the word about our AI-powered platform."
      seoKeywords="WhatsX referral, share WhatsX, lead generation, WhatsApp marketing, AI forms, affiliate program"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-light-green/30 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Badge className="bg-whatsapp-green/10 text-whatsapp-green border-whatsapp-green/20 px-3 py-1.5 sm:px-4 sm:py-2 text-sm">
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Share WhatsX & Earn Rewards
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Share WhatsX with Your Network
            <span className="text-whatsapp-green block mt-2">Help Others Transform Their Leads</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Spread the word about WhatsX's AI-powered lead generation platform. Help businesses achieve 
            <span className="text-whatsapp-green font-semibold"> 87% higher conversion rates</span> and earn rewards for every successful referral!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-whatsapp-green/10">
              <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-whatsapp-green mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Easy Sharing</h3>
              <p className="text-gray-600 text-sm">Ready-made marketing content for all platforms</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-whatsapp-green/10">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-whatsapp-green mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">High Converting</h3>
              <p className="text-gray-600 text-sm">WhatsX delivers proven results that sell themselves</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-whatsapp-green/10">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-whatsapp-green mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Earn Rewards</h3>
              <p className="text-gray-600 text-sm">Get commission for every successful referral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="share" className="space-y-6 sm:space-y-8">
            <TabsList className="grid w-full max-w-sm sm:max-w-md mx-auto grid-cols-3 h-12">
              <TabsTrigger value="share" className="text-xs sm:text-sm">Share WhatsX</TabsTrigger>
              <TabsTrigger value="dashboard" className="text-xs sm:text-sm">Dashboard</TabsTrigger>
              <TabsTrigger value="history" className="text-xs sm:text-sm">History</TabsTrigger>
            </TabsList>

            {/* Share WhatsX Tab */}
            <TabsContent value="share" className="space-y-6 sm:space-y-8">
              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green mr-2" />
                    Your WhatsX Referral Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="flex-1 text-sm min-h-[44px]"
                    />
                    <Button 
                      onClick={() => handleCopy(referralLink, "Referral link")}
                      className="bg-whatsapp-green hover:bg-whatsapp-dark-green min-w-[120px] min-h-[44px] text-sm sm:text-base"
                    >
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                      value={referralCode} 
                      readOnly 
                      className="flex-1 text-sm min-h-[44px]"
                      placeholder="Your referral code"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => handleCopy(referralCode, "Referral code")}
                      className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20 min-w-[120px] min-h-[44px] text-sm sm:text-base"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Ready-to-Use Marketing Messages</CardTitle>
                  <p className="text-gray-600 text-sm sm:text-base">Choose the perfect message for your audience</p>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h4 className="font-semibold text-xs sm:text-sm text-gray-600">SHORT MESSAGE (Social Media)</h4>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCopyMessage('short')}
                          className="self-start min-h-[36px] text-xs"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm text-gray-700 break-words">{marketingMessages.short}</p>
                    </div>

                    <div className="border rounded-lg p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h4 className="font-semibold text-xs sm:text-sm text-gray-600">MEDIUM MESSAGE (General Use)</h4>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCopyMessage('medium')}
                          className="self-start min-h-[36px] text-xs"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-line break-words">{marketingMessages.medium}</p>
                    </div>

                    <div className="border rounded-lg p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h4 className="font-semibold text-xs sm:text-sm text-gray-600">DETAILED MESSAGE (Email/Personal)</h4>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCopyMessage('long')}
                          className="self-start min-h-[36px] text-xs"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-line break-words">{marketingMessages.long}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Share on Your Favorite Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      onClick={() => handleShare("whatsapp")}
                      className="flex flex-col items-center p-4 sm:p-6 h-auto border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20 min-h-[80px] sm:min-h-[100px]"
                    >
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm">WhatsApp</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("twitter", "short")}
                      className="flex flex-col items-center p-4 sm:p-6 h-auto border-blue-400 text-blue-400 hover:bg-blue-50 min-h-[80px] sm:min-h-[100px]"
                    >
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("facebook")}
                      className="flex flex-col items-center p-4 sm:p-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50 min-h-[80px] sm:min-h-[100px]"
                    >
                      <Facebook className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("linkedin")}
                      className="flex flex-col items-center p-4 sm:p-6 h-auto border-blue-700 text-blue-700 hover:bg-blue-50 min-h-[80px] sm:min-h-[100px]"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("email", "long")}
                      className="flex flex-col items-center p-4 sm:p-6 h-auto border-gray-500 text-gray-500 hover:bg-gray-50 min-h-[80px] sm:min-h-[100px] col-span-2 sm:col-span-1"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                      <span className="text-xs sm:text-sm">Email</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card>
                  <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl sm:text-3xl font-bold text-whatsapp-green">{referralStats.totalReferrals}</div>
                    <div className="text-sm text-gray-500 mt-1">{referralStats.activeReferrals} active</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl sm:text-3xl font-bold text-whatsapp-green">${referralStats.totalEarnings}</div>
                    <div className="text-sm text-gray-500 mt-1">${referralStats.pendingEarnings} pending</div>
                  </CardContent>
                </Card>

                <Card className="sm:col-span-2 lg:col-span-1">
                  <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl sm:text-3xl font-bold text-whatsapp-green">{referralStats.conversionRate}%</div>
                    <div className="text-sm text-gray-500 mt-1">Above average</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green mr-2" />
                    Your Referral Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">This Month's Target</span>
                      <span className="text-sm text-gray-500">8/10 referrals</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-whatsapp-green h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Share WhatsX with 2 more people this month to reach your referral goal!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-6 sm:space-y-8">
              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Recent Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {referralHistory.map((referral, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-whatsapp-light-green/30 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm sm:text-base">{referral.name}</div>
                            <div className="text-xs sm:text-sm text-gray-600">{referral.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4 ml-11 sm:ml-0">
                          <Badge 
                            variant={referral.status === "Active" ? "default" : "secondary"}
                            className={`${referral.status === "Active" ? "bg-whatsapp-green" : ""} text-xs`}
                          >
                            {referral.status}
                          </Badge>
                          <div className="text-base sm:text-lg font-semibold text-whatsapp-green">
                            ${referral.earnings}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Referral;
