
import { motion } from "framer-motion";
import { Camera, Globe, ArrowUp, MessageCircle, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform: string) => {
    let url = '';
    const message = encodeURIComponent("Hi! I'm interested in your photography services.");
    
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/+1234567890?text=${message}`; // Replace with your WhatsApp number
        break;
      case 'messenger':
        url = 'https://m.me/YourFacebookPage'; // Replace with your Facebook page username
        break;
      case 'telegram':
        url = 'https://t.me/YourTelegramUsername'; // Replace with your Telegram username
        break;
    }

    window.open(url, '_blank');
    toast({
      title: "Opening " + platform,
      description: "Redirecting you to continue the conversation.",
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Capture Your World
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional photography services specializing in 360° virtual tours, 
            event coverage, and aerial photography.
          </motion.p>
          <motion.button
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Globe}
              title="360° Virtual Tours"
              description="Immersive virtual experiences that bring spaces to life, perfect for real estate and business showcases."
            />
            <ServiceCard
              icon={Camera}
              title="Event Photography"
              description="Capturing the special moments of your events with professional photography services."
            />
            <ServiceCard
              icon={ArrowUp}
              title="Aerial Photography"
              description="Stunning aerial perspectives of properties, events, and landscapes using state-of-the-art drone technology."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to bring your vision to life? Contact us to discuss your project.
          </motion.p>
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  Choose your preferred messaging platform to start a conversation.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <Button
                  variant="outline"
                  className="flex items-center justify-start gap-2 h-12"
                  onClick={() => handleSocialClick('messenger')}
                >
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <span>Continue with Messenger</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-start gap-2 h-12"
                  onClick={() => handleSocialClick('whatsapp')}
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span>Continue with WhatsApp</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-start gap-2 h-12"
                  onClick={() => handleSocialClick('telegram')}
                >
                  <Send className="h-5 w-5 text-blue-500" />
                  <span>Continue with Telegram</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default Index;
