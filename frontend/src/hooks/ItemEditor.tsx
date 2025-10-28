import { useCallback, useState } from "react";
import type { EditorForm, EditorOptions, ItemType } from "../models/Types";
import { getUserOptions } from "../services/user";
import { dummyUser } from "../../dummy_data/users/users";

export function useEditorState() {
    const [editorForm, setEditorForm] = useState<EditorForm>({
        name: "",
        imageUrl: "",
        color: null,
        tags: [],
        seasons: [],
        clothingPieces: [],
        clothingType: null
    });

    const [editorOptions, setEditorOptions] = useState<EditorOptions>({
        colors: [],
        tags: [],
        seasons: [],
        clothingPieces: [],
        clothingTypes: []
    });

    function updateForm(form: Partial<EditorForm>) {
        const newForm: EditorForm = {...editorForm, ...form};
        setEditorForm(newForm);
    }

    const loadOptions = useCallback((itemType: ItemType) => setEditorOptions(getUserOptions(dummyUser, itemType, "editor") as EditorOptions), [setEditorOptions]);

    return {editorForm, updateForm, editorOptions, loadOptions}
}