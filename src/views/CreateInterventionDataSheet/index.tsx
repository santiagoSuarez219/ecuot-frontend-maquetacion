import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import InterventionDataSheetAdd from "../../components/UrbanPlanningInterventions/InterventionDataSheetAdd";
import { getInterventionsById } from "../../api/InterventionAPI";
import Loader from "../../components/Loader/Loader";

export default function CreateInterventionDataSheet() {
  const params = useParams();
  const interventionId = params.interventionId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-intervention", interventionId],
    queryFn: () => getInterventionsById(interventionId),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;
  if (data) return <InterventionDataSheetAdd data={data} />;
}
