import React from 'react';
import DefaultPageHeader from '../components/ui/page-header';
import { Button } from '../components/ui/button';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { toast } = useToast();

  const handleGoogleSignin = async (e: any) => {
    e.preventDefault();
    // @ts-ignore
    const loginWithGoogle = await auth.googleLogin();

    if (loginWithGoogle.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong',
        // The error message here will likely be about Google Auth/billing
        description: `${loginWithGoogle.error.message}`
      });
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* <DefaultPageHeader title='Customers' subheading='Manage all customers for you company' addItemTextButton='Add login item'/> */}
      <div className="flex justify-center w-screen-xl mx-auto mt-[100px] sm:mt-[180px]">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <div className="w-[60px] shadow-md bg-blue-600 rounded-2xl mx-auto mb-4">
              {/* Assuming you replaced the TRA-logo.png with the new PLACED logo */}
              <img src="/assets/TRA-logo.png" className="shadow-xs p-[2px]" /> 
            </div>
          </div>
          <p className="font-[600] text-[30px] mb-2">Log in to your PLACED Staff Dash</p>
          <p className="text-muted-foreground text-[16px] mb-1 font-[400]">
            Your team, our home. Access your dashboard below.
          </p>
          <p className="text-sm text-primary mb-6 font-[500]">
            **Lunai, your know-it-all helper, is here to guide you.** 🚀
          </p>
          <form onSubmit={handleGoogleSignin}>
            <Button variant={'outline'} className="w-full" type="submit">
              <img src="/assets/google-icon-144.png" alt="Google Icon" className="mr-2 h-4 w-4" />{' '}
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
