
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
  Trophy,
  Star,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const [copied, setCopied] = useState(false);
  const [referralCode] = useState("WHATSX-USER123"); // In real app, this would come from user data
  const [referralLink] = useState(`https://whatsx.ai/signup?ref=${referralCode}`);
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

  const handleShare = (platform: string) => {
    const shareText = "Transform your website visitors into WhatsApp leads with WhatsX! Join me and get 30% commission on every referral. ";
    const shareUrl = referralLink;
    
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "email":
        url = `mailto:?subject=${encodeURIComponent("Join WhatsX - AI-Powered Lead Generation")}&body=${encodeURIComponent(shareText + shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, "_blank");
    }
  };

  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 2840,
    pendingEarnings: 480,
    conversionRate: 67,
    tier: "Gold"
  };

  const referralHistory = [
    { name: "John D.", date: "2 days ago", status: "Active", earnings: 240 },
    { name: "Sarah M.", date: "1 week ago", status: "Active", earnings: 240 },
    { name: "Mike R.", date: "2 weeks ago", status: "Pending", earnings: 240 },
    { name: "Lisa K.", date: "3 weeks ago", status: "Active", earnings: 240 }
  ];

  return (
    <Layout
      seoTitle="Referral Program - WhatsX | Earn 30% Commission"
      seoDescription="Join WhatsX referral program and earn 30% commission for every successful referral. Share WhatsX with your network and get rewarded."
      seoKeywords="referral program, affiliate marketing, earn commission, WhatsApp leads, passive income"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-light-green/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Badge className="bg-whatsapp-green/10 text-whatsapp-green border-whatsapp-green/20 px-4 py-2">
              <Gift className="w-4 h-4 mr-2" />
              Earn 30% Commission
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Refer Friends & Colleagues
            <span className="text-whatsapp-green block mt-2">Earn Unlimited Income</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Share WhatsX with your network and earn <span className="text-whatsapp-green font-semibold">30% recurring commission</span> on every successful referral. 
            It's a win-win for everyone!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-whatsapp-green/10">
              <DollarSign className="w-8 h-8 text-whatsapp-green mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">30% Commission</h3>
              <p className="text-gray-600 text-sm">Recurring monthly commission on all plans</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-whatsapp-green/10">
              <Users className="w-8 h-8 text-whatsapp-green mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Unlimited Referrals</h3>
              <p className="text-gray-600 text-sm">No limit on how many people you can refer</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-whatsapp-green/10">
              <TrendingUp className="w-8 h-8 text-whatsapp-green mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">Monitor your earnings and referrals instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="dashboard" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="share">Share & Earn</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-whatsapp-green">{referralStats.totalReferrals}</div>
                    <div className="text-sm text-gray-500 mt-1">{referralStats.activeReferrals} active</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-whatsapp-green">${referralStats.totalEarnings}</div>
                    <div className="text-sm text-gray-500 mt-1">${referralStats.pendingEarnings} pending</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-whatsapp-green">{referralStats.conversionRate}%</div>
                    <div className="text-sm text-gray-500 mt-1">Above average</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Current Tier</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
                      <div>
                        <div className="text-lg font-bold text-gray-900">{referralStats.tier}</div>
                        <div className="text-sm text-gray-500">Level 3</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 text-whatsapp-green mr-2" />
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
                      Complete 2 more referrals this month to reach Platinum tier and unlock 35% commission rate!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Share & Earn Tab */}
            <TabsContent value="share" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Share2 className="w-5 h-5 text-whatsapp-green mr-2" />
                    Your Referral Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => handleCopy(referralLink, "Referral link")}
                      className="bg-whatsapp-green hover:bg-whatsapp-dark-green min-w-[120px]"
                    >
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                      value={referralCode} 
                      readOnly 
                      className="flex-1"
                      placeholder="Your referral code"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => handleCopy(referralCode, "Referral code")}
                      className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20 min-w-[120px]"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    <Button
                      variant="outline"
                      onClick={() => handleShare("whatsapp")}
                      className="flex flex-col items-center p-6 h-auto border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20"
                    >
                      <MessageCircle className="w-6 h-6 mb-2" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("twitter")}
                      className="flex flex-col items-center p-6 h-auto border-blue-400 text-blue-400 hover:bg-blue-50"
                    >
                      <Twitter className="w-6 h-6 mb-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("facebook")}
                      className="flex flex-col items-center p-6 h-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <Facebook className="w-6 h-6 mb-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("linkedin")}
                      className="flex flex-col items-center p-6 h-auto border-blue-700 text-blue-700 hover:bg-blue-50"
                    >
                      <Linkedin className="w-6 h-6 mb-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare("email")}
                      className="flex flex-col items-center p-6 h-auto border-gray-500 text-gray-500 hover:bg-gray-50"
                    >
                      <Mail className="w-6 h-6 mb-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commission Tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg border-whatsapp-green bg-whatsapp-light-green/10">
                      <div className="flex items-center">
                        <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
                        <div>
                          <div className="font-semibold text-whatsapp-green">Gold Tier (Current)</div>
                          <div className="text-sm text-gray-600">5-14 referrals</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-whatsapp-green">30%</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Trophy className="w-6 h-6 text-gray-400 mr-3" />
                        <div>
                          <div className="font-semibold">Platinum Tier</div>
                          <div className="text-sm text-gray-600">15-29 referrals</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-700">35%</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Trophy className="w-6 h-6 text-gray-400 mr-3" />
                        <div>
                          <div className="font-semibold">Diamond Tier</div>
                          <div className="text-sm text-gray-600">30+ referrals</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-700">40%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {referralHistory.map((referral, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-whatsapp-light-green/30 rounded-full flex items-center justify-center mr-4">
                            <Users className="w-5 h-5 text-whatsapp-green" />
                          </div>
                          <div>
                            <div className="font-semibold">{referral.name}</div>
                            <div className="text-sm text-gray-600">{referral.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge 
                            variant={referral.status === "Active" ? "default" : "secondary"}
                            className={referral.status === "Active" ? "bg-whatsapp-green" : ""}
                          >
                            {referral.status}
                          </Badge>
                          <div className="text-lg font-semibold text-whatsapp-green">
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
