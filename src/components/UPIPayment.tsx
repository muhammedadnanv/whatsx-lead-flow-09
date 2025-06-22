
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Copy, CheckCircle, Clock, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UPIPaymentProps {
  onBack: () => void;
}

export const UPIPayment: React.FC<UPIPaymentProps> = ({ onBack }) => {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'checking' | 'completed'>('pending');
  const [unlockCode, setUnlockCode] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const { toast } = useToast();

  const amount = 29;
  const upiId = "adnanmuhammad4393@okicici";
  const merchantName = "WhatsX";
  
  // Generate UPI payment link
  const upiLink = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&cu=INR&tn=WhatsX%20Codebase%20Access`;

  console.log('UPI Payment Component loaded', { paymentStatus, timeLeft });

  // Generate unlock code
  const generateUnlockCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `WX-${result}`;
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && paymentStatus === 'pending') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, paymentStatus]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleUPIPayment = () => {
    console.log('UPI Payment initiated', { upiLink });
    
    // Open UPI app
    window.open(upiLink, '_blank');
    
    // Start checking for payment
    setPaymentStatus('checking');
    console.log('Payment status changed to checking');
    
    // Simulate payment verification (in real app, this would be server-side)
    setTimeout(() => {
      const code = generateUnlockCode();
      console.log('Generated unlock code:', code);
      setUnlockCode(code);
      setPaymentStatus('completed');
      
      // Store unlock code in localStorage
      localStorage.setItem('whatsxUnlockCode', code);
      localStorage.setItem('whatsxAccessGranted', 'true');
      console.log('Stored access data in localStorage');
      
      toast({
        title: "Payment Successful!",
        description: "Your unlock code has been generated. Save it safely!",
      });
    }, 10000); // 10 seconds simulation
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    console.log('Copied to clipboard:', text);
    toast({
      title: "Copied!",
      description: "Copied to clipboard",
    });
  };

  const handleManualPayment = () => {
    console.log('Manual payment verification triggered');
    // Simulate manual verification
    const code = generateUnlockCode();
    setUnlockCode(code);
    setPaymentStatus('completed');
    localStorage.setItem('whatsxUnlockCode', code);
    localStorage.setItem('whatsxAccessGranted', 'true');
    
    toast({
      title: "Payment Verified!",
      description: "Manual verification successful",
    });
  };

  if (paymentStatus === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-green-200 shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">Payment Successful!</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your unlock code:</p>
              <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-purple-600">{unlockCode}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(unlockCode)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Save this code - you'll need it to access the codebase</p>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                onClick={() => {
                  console.log('Navigating to codebase access page');
                  window.location.href = '/codebase-access';
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Access Codebase Now
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onBack}
              >
                Back to Pricing
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-purple-200 shadow-2xl">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <CardTitle className="ml-2 text-xl font-bold text-purple-900">UPI Payment</CardTitle>
          </div>
          
          {paymentStatus === 'pending' && (
            <Badge className="w-fit bg-orange-100 text-orange-700 border-orange-200">
              <Clock className="w-3 h-3 mr-1" />
              {formatTime(timeLeft)} remaining
            </Badge>
          )}
          
          {paymentStatus === 'checking' && (
            <Badge className="w-fit bg-blue-100 text-blue-700 border-blue-200">
              <Clock className="w-3 h-3 mr-1" />
              Verifying payment...
            </Badge>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Payment Details */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-bold text-2xl text-purple-600">₹{amount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">UPI ID:</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm">{upiId}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(upiId)}
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">How to pay:</h3>
            <ol className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span>Click "Pay with UPI" to open your UPI app</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span>Complete the payment of ₹{amount}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span>Your unlock code will be generated automatically</span>
              </li>
            </ol>
          </div>

          {/* Payment Buttons */}
          <div className="space-y-3">
            {paymentStatus === 'pending' && (
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={handleUPIPayment}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Pay ₹{amount} with UPI
              </Button>
            )}
            
            {paymentStatus === 'checking' && (
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 mb-4">Checking payment status...</p>
                <Button 
                  variant="outline" 
                  onClick={handleManualPayment}
                  className="text-sm"
                >
                  I've completed the payment
                </Button>
              </div>
            )}
          </div>

          {/* Manual Payment Note */}
          <div className="text-xs text-gray-500 text-center border-t pt-4">
            Having issues? Contact support with your transaction ID
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
