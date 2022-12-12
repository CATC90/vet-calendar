import { AvaliableHourResponse } from "../../interfaces";
import AvailableHoursSkeleton from "./skeleton";
import { DateTime } from "luxon";
import styles from "./available-hours.module.css";

type AvailableHoursType = {
  isLoading: boolean;
  data?: AvaliableHourResponse;
};

type VetTargetWrapperType = {
  children: React.ReactNode;
};

function VetTargetWrapper({ children }: VetTargetWrapperType) {
  return <div className={styles.vetTargetContainer}>{children}</div>;
}

export default function AvailableHours({
  isLoading,
  data,
}: AvailableHoursType) {
  return (
    <div>
      {isLoading
        ? Array.from(Array(3).keys()).map(() => (
            <VetTargetWrapper>
              <AvailableHoursSkeleton />
            </VetTargetWrapper>
          ))
        : data?.availableHoursByVet.map(({ vet, availableHours }) => (
            <VetTargetWrapper>
              <div className={styles.targetContent}>
                <div className={styles.targetHead}>
                    <p>{vet.name}</p>
                </div>
                <div className={styles.availableHours}>
                    {availableHours.map((date) => (
                        <div className={styles.badge}>
                            {DateTime.fromISO(date).toFormat("h':'mm")}
                        </div>
                    ))}
                </div>
              </div>
            </VetTargetWrapper>
          ))}
    </div>
  );
}
