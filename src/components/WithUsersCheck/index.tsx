import React from "react";
import { SplashScreen } from "../SplashScreen";
import { IUsers } from "hjarquin-cross/interfaces";

interface WithUserCheckProps {
  users: IUsers[];
}

export const WithUserCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithUserCheckProps> => {
  return (props: P & WithUserCheckProps) => {
    const { users, ...restProps } = props;

    if (!users || users.length === 0) {
      return <SplashScreen />;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
};
