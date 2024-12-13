import React, { useState } from 'react';
import { useSubscribeEmailMutation } from '../utils/api';

const Banner: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subscribeEmail, { isLoading }] = useSubscribeEmailMutation();

  const data = {
    image: 'https://s3-alpha-sig.figma.com/img/f4d5/d5dc/898fbd88150fd0e8ce8e5a85ec6d8ab2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUHCVwx8ROLqSkq-4QkpwHKA5z868A6PClxmOQ0pvRLpLDttIrt7sPNJgDT8lrdra3QxamHbHVQu8mQWdsnAD4kaoqj2FwPhMN5AooB3dKEzTUZLp3MvR63IoAHSQmtph1~03GxD9gRbsE06v8Qi1pr1So-tVU3bSMUuHzMuFpuUYzR7YDq7BE3H4cMCB0Mon3gOiiCEm-k37dnbDz3RBhjUzMYDybHXFUr51UXe6hf1lYelpR1sPA8Vv51MLpQ4ZmqggYWKpjT4DtDBbkEKABGIpc8Sa6GIL6QRJSx3EKAR~chluNpZ-e~uTcSt-Usgm8y7qqBHCWHdOfLJO7ZNqw__',
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      await subscribeEmail(email).unwrap();
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
  };

  return (
    <div className='w-full relative'>
      <img
        src={data.image}
        alt="Banner"
        className='object-cover w-full h-[490px] relative'
      />

      <div className="absolute space-y-5 top-0 right-0 w-1/2 h-full text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            Get more discount
            <br />
            Off your order
          </h1>
          <p className="text-lg">
            Join Our Mailing List
          </p>

        {isSubscribed ? (
          <p className="text-green-500 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex items-center space-x-4 p- rounded-md shadow-md w-full max-w-lg"
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Mail Address"
              className="px-4 py-4 w-full rounded-md text-black"
              required
            />
            <button
              type="submit"
              className={`px-6 py-4 rounded-md text-white ${isLoading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Banner;
